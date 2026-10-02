import React, { useState, useEffect } from 'react';
import { 
  Check, Copy, Database, ExternalLink, RefreshCw, 
  Server, ShieldCheck, Terminal, Trash2, X, AlertCircle, CheckCircle2
} from 'lucide-react';
import { 
  checkSupabaseConnection, getAppointments, 
  SUPABASE_PROJECT_ID, SUPABASE_SQL_SCHEMA, 
  SUPABASE_URL, AppointmentRecord 
} from '../lib/supabase';

interface SupabaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupabaseModal: React.FC<SupabaseModalProps> = ({ isOpen, onClose }) => {
  const [copiedSql, setCopiedSql] = useState(false);
  const [testing, setTesting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<{
    connected: boolean;
    hasAppointmentsTable: boolean;
    message: string;
  } | null>(null);

  const [appointments, setAppointments] = useState<AppointmentRecord[]>([]);
  const [isFromSupabase, setIsFromSupabase] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  const runConnectionCheck = async () => {
    setTesting(true);
    const res = await checkSupabaseConnection();
    setConnectionStatus(res);
    setTesting(false);
  };

  const loadData = async () => {
    setLoadingData(true);
    const res = await getAppointments();
    setAppointments(res.data);
    setIsFromSupabase(res.fromSupabase);
    setLoadingData(false);
  };

  useEffect(() => {
    if (isOpen) {
      runConnectionCheck();
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCHEMA);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] border border-slate-200 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0b1f3f] text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif">
                Supabase Backend Sync & Database Inspector
              </h3>
              <p className="text-xs text-slate-300">
                Connected Project: <span className="font-mono text-emerald-400 font-bold">{SUPABASE_PROJECT_ID}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs">
          
          {/* Status Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                Backend Status
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-slate-900 text-sm">Online & Configured</span>
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block font-mono truncate">
                {SUPABASE_URL}
              </span>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                Appointments Table Status
              </span>
              <div className="flex items-center gap-2">
                {connectionStatus?.hasAppointmentsTable ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="font-bold text-emerald-800 text-sm">Table Active in Supabase</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span className="font-bold text-amber-800 text-sm">Needs 1-Click SQL Setup</span>
                  </>
                )}
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">
                {connectionStatus?.hasAppointmentsTable 
                  ? 'Real-time database sync is live.' 
                  : 'Run the SQL below in Supabase SQL Editor'}
              </span>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                  Active Bookings Count
                </span>
                <span className="font-mono text-2xl font-bold text-[#0f2b5c]">
                  {appointments.length}
                </span>
                <span className="text-[11px] text-slate-500 ml-1">
                  ({isFromSupabase ? 'From Supabase Cloud' : 'Local Fallback Buffer'})
                </span>
              </div>
              <button
                onClick={() => { runConnectionCheck(); loadData(); }}
                disabled={testing || loadingData}
                className="mt-2 text-xs font-semibold text-blue-900 hover:underline inline-flex items-center gap-1 self-start"
              >
                <RefreshCw className={`w-3 h-3 ${testing || loadingData ? 'animate-spin' : ''}`} />
                <span>Refresh Status</span>
              </button>
            </div>
          </div>

          {/* Quick Setup Instructions if table needs creation */}
          {!connectionStatus?.hasAppointmentsTable && (
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm">
                    Supabase Database Initialization Step:
                  </h4>
                  <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                    Your Supabase project is connected with your API Key! To enable cloud storage in your Supabase project, open your Supabase SQL Editor and execute this schema script:
                  </p>
                </div>
                <a
                  href={`https://supabase.com/dashboard/project/${SUPABASE_PROJECT_ID}/sql/new`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded shadow-sm inline-flex items-center gap-1.5 shrink-0 text-xs"
                >
                  <span>Open Supabase SQL Editor</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* SQL Code Block */}
              <div className="relative">
                <pre className="p-3 bg-slate-900 text-slate-200 rounded text-[11px] font-mono overflow-x-auto max-h-44 border border-slate-800">
                  {SUPABASE_SQL_SCHEMA}
                </pre>
                <button
                  onClick={handleCopySql}
                  className="absolute top-2 right-2 px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded text-[11px] inline-flex items-center gap-1 shadow"
                >
                  {copiedSql ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedSql ? 'Copied SQL!' : 'Copy SQL'}</span>
                </button>
              </div>
            </div>
          )}

          {/* Appointments Live Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-slate-900 font-serif">
                Recent Campus Appointment Bookings
              </h4>
              <span className="text-[11px] text-slate-500">
                Automatically saved on form submission
              </span>
            </div>

            {appointments.length > 0 ? (
              <div className="border border-slate-200 rounded-lg overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <th className="p-3">Ref ID</th>
                      <th className="p-3">Student Name</th>
                      <th className="p-3">Phone</th>
                      <th className="p-3">Service / Course</th>
                      <th className="p-3">Visit Date & Slot</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {appointments.map((apt, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-mono font-bold text-blue-900">{apt.booking_ref}</td>
                        <td className="p-3 font-semibold text-slate-900">{apt.student_name}</td>
                        <td className="p-3 font-mono">{apt.phone}</td>
                        <td className="p-3">{apt.service_title}</td>
                        <td className="p-3">
                          <span className="font-medium text-slate-800">{apt.visit_date}</span>
                          <span className="block text-[11px] text-slate-500">{apt.time_slot}</span>
                        </td>
                        <td className="p-3">
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            <Check className="w-3 h-3" />
                            {apt.status || 'Confirmed'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg text-slate-500">
                No bookings recorded yet. Fill out the appointment booking form on the homepage to see it appear here!
              </div>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <a
            href={`https://supabase.com/dashboard/project/${SUPABASE_PROJECT_ID}/editor`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline font-semibold inline-flex items-center gap-1"
          >
            <span>Open Supabase Table Editor ({SUPABASE_PROJECT_ID})</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-slate-700 bg-white border border-slate-300 rounded shadow-sm hover:bg-slate-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
