/**
 * Verified factual data for KLE Society's College of Commerce & BCA, Gangavathi
 * Sourced directly from official records and https://klecollegegangavathi.com/
 */

export interface Program {
  id: string;
  name: string;
  shortName: string;
  degree: string;
  category: 'it' | 'commerce' | 'pre-university';
  duration: string;
  affiliation: string;
  approval: string;
  established: string;
  tagline: string;
  description: string;
  eligibility: string;
  objectives: string[];
  keySubjects: string[];
  careerProspects: string[];
  syllabusOverview: {
    year: string;
    topics: string[];
  }[];
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Admissions' | 'AICTE / Regulatory' | 'Examinations' | 'General';
  isImportant: boolean;
  fileUrl?: string;
  fileName?: string;
  description: string;
}

export interface CollegeEvent {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Workshops' | 'Cultural' | 'Sports' | 'Announcements';
  description: string;
  location: string;
  speakerOrOrganizer?: string;
}

export interface Facility {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Facilities' | 'Academic' | 'Students' | 'Leadership';
  image: string;
  caption: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Admissions' | 'Academics' | 'Campus Life' | 'Facilities';
}

export const COLLEGE_INFO = {
  name: "KLE Society's College of Commerce & Bachelor of Computer Applications",
  shortName: "KLE College, Gangavathi",
  campusName: "KLE Campus, Gangavathi",
  parentSociety: "Karnataka Lingayat Education (K.L.E.) Society, Belagavi",
  societyFounded: "1916",
  motto: "Work is Worship (Kayakave Kailasa)",
  tagline: "Education • Excellence • Opportunity • Student Growth",
  
  // Leadership from official website
  chairman: {
    name: "Dr. Prabhakar Kore",
    title: "Chairman, KLE Society & Chancellor, KLE University Belagavi",
    designation: "M.P. (Rajya Sabha)",
    image: "/images/kle/chairman.jpg",
    message: "The KLE Society is an embodiment of the perseverance of thousands of dedicated individuals committed to enhanced education and healthcare. For over a century, our missionary zeal has pioneered higher education across rural and urban Karnataka, empowering generations of students to lead purposeful, innovative, and ethically grounded lives.",
  },
  principal: {
    name: "Dr. Manasa D. A.",
    title: "Principal",
    institution: "KLE Society's College of BCA & Commerce, Gangavathi",
    image: "/images/kle/principal.jpg",
    message: "Our institution offers an innovative academic curriculum that seamlessly blends theoretical depth with extensive hands-on practice. We prepare our students for the rapidly growing IT and corporate industries, empowering them with adept computational knowledge, analytical thinking, and ethical human values.",
  },

  // Contact details verified from official website
  contact: {
    address: "KLE Campus, Koppal Road, Dist. Koppal, Vaddarahatti – Gangavathi - 583235, Karnataka, India",
    phone: "+91 94834 82741",
    altPhone: "+91 83962 20111",
    email1: "klesbcagvt@gmail.com",
    email2: "klecommgvt@gmail.com",
    officeHours: "Monday to Saturday: 8:00 AM – 5:00 PM (Sunday Closed)",
    officialWebsite: "https://klecollegegangavathi.com/",
    googleMapsUrl: "https://maps.app.goo.gl/BfDGfAMWRgSVHheC9",
    mapEmbedCoords: {
      lat: 15.4465693,
      lng: 76.4970108,
    },
  },

  // Verified institutional numbers (no hallucinations)
  verifiedStats: [
    { label: "Years of KLE Society Legacy", value: "108+", subtext: "Serving society since 1916" },
    { label: "KLE Global Institutions", value: "270+", subtext: "Colleges, hospitals & research centers" },
    { label: "Dedicated KLE Educators", value: "16,000+", subtext: "Mentoring over 1,10,000 students" },
    { label: "AICTE Approved Technical Dept", value: "LoA Granted", subtext: "Department of Computer Applications" },
  ],

  // Key institutional highlights
  highlights: [
    "Affiliated to Koppal University with recognized curriculum standards",
    "Approved by the All India Council for Technical Education (AICTE), New Delhi",
    "Guided by the 108-year educational legacy of the K.L.E. Society Belagavi",
    "State-of-the-art computer laboratories with high-speed internet connectivity",
    "Extensive college bus transit covering Gangavathi, Koppal & nearby rural hubs",
    "Dedicated faculty mentorship with guided study hours for academic excellence",
    "Active Grievance Redressal, Anti-Ragging, and Women Empowerment cells",
    "Tranquil, disturbance-free academic campus situated along Koppal Road",
  ]
};

export const PROGRAMS: Program[] = [
  {
    id: "bca",
    name: "Bachelor of Computer Applications (BCA)",
    shortName: "BCA",
    degree: "Undergraduate (NEP 2020 Structure)",
    category: "it",
    duration: "3 or 4 Years (6 or 8 Semesters)",
    affiliation: "Affiliated to Koppal University",
    approval: "Approved by AICTE, New Delhi",
    established: "2023-24",
    tagline: "Building competent software developers, data practitioners, and tech innovators.",
    description: "The Department of Computer Applications offers a dynamic ecosystem for study, research, and professional growth. Firmly believing that theoretical knowledge supported by ample in-depth practical exposure is required to meet the challenges of the ever-changing IT landscape, our BCA program nurtures fresh talent with employable technical skills and sound ethical values.",
    eligibility: "Candidates who have completed Two-Year Pre-University (PUC II / 10+2) in Science or Commerce or equivalent examination from a recognized Board / University with the prescribed qualifying percentage.",
    objectives: [
      "Prepare students for rewarding careers in the global software and IT industry.",
      "Impart quality computer education to enhance logical computing, algorithmic thinking, and programming skills.",
      "Implement innovative techniques and practical methodologies in learning and software evaluation.",
      "Develop problem-solving acumen to create, test, and assess computer-based applications and architectures.",
    ],
    keySubjects: [
      "Programming in C, C++, and Java",
      "Python for Data Science & Automation",
      "Data Structures & Algorithm Design",
      "Database Management Systems (DBMS & SQL)",
      "Full-Stack Web Technologies (HTML5, CSS3, JS, React)",
      "Computer Networks & Cyber Security Basics",
      "Operating Systems & Linux Shell Administration",
      "Software Engineering & Agile Methodologies",
      "Cloud Computing & Emerging IT Frameworks",
      "Final Year Live Project & Capstone Seminar",
    ],
    careerProspects: [
      "Software Engineer / Application Developer",
      "Web & Full-Stack Developer",
      "Database Administrator & Analyst",
      "Network & Cloud Support Engineer",
      "IT Project Consultant & Quality Assurance Analyst",
      "Pathway to MCA, M.Sc. IT, or MBA in Information Systems",
    ],
    syllabusOverview: [
      {
        year: "Year 1 (Semesters I & II)",
        topics: ["Fundamentals of Computing & Office Tools", "Problem Solving with C", "Discrete Mathematics", "Data Structures using C++", "Web Designing Fundamentals", "Practical Labs I & II"],
      },
      {
        year: "Year 2 (Semesters III & IV)",
        topics: ["Java Programming & OOP Principles", "Database Management Systems & SQL", "Operating Systems", "Python Programming", "Computer Networks", "DBMS & Java Practicals"],
      },
      {
        year: "Year 3 (Semesters V & VI)",
        topics: ["Software Engineering & Testing", "Cloud Technologies & Web Services", "Cyber Security & Information Assurance", "Elective Specialization", "Mini Project & Major Industry Capstone"],
      },
      {
        year: "Year 4 (Optional Honours - NEP Semesters VII & VIII)",
        topics: ["Advanced Research Methodologies", "Artificial Intelligence & Machine Learning Fundamentals", "Enterprise Architecture", "Honours Dissertation & Defense"],
      },
    ],
  },
  {
    id: "bcom",
    name: "Bachelor of Commerce (B.Com)",
    shortName: "B.Com",
    degree: "Undergraduate (NEP 2020 Structure)",
    category: "commerce",
    duration: "3 or 4 Years (6 or 8 Semesters)",
    affiliation: "Affiliated to Koppal University",
    approval: "Recognized by Govt. of Karnataka",
    established: "2011",
    tagline: "Forging sharp financial analysts, corporate accountants, and ethical business entrepreneurs.",
    description: "Established in 2011, the Bachelor of Commerce program provides comprehensive conceptual grounding and practical mastery across financial accounting, corporate taxation, auditing, goods and services tax (GST), banking, and modern business administration. The course combines rigorous academics with practical accounting software workshops.",
    eligibility: "Candidates who have passed Two-Year Pre-University (PUC II / 10+2) in Commerce, Science, or Arts stream from the Karnataka Pre-University Board or equivalent recognized educational board.",
    objectives: [
      "Equip students with thorough conceptual and practical mastery of modern accounting and auditing practices.",
      "Build deep understanding of Goods & Services Tax (GST), Income Tax Law, and financial statutory compliances.",
      "Develop entrepreneurial competencies, managerial insight, and financial decision-making skills.",
      "Prepare aspirants for professional qualifications like CA, CS, CMA, and MBA in Finance.",
    ],
    keySubjects: [
      "Financial Accounting & Advanced Corporate Accounting",
      "Cost & Management Accounting",
      "Income Tax Law, Theory & Computation",
      "Goods and Services Tax (GST) Practices",
      "Principles and Practices of Auditing",
      "Banking Operations, Insurance & Financial Markets",
      "Business Regulatory Framework & Company Law",
      "Computer Applications in Business & Tally ERP",
      "Entrepreneurship Development & Business Ethics",
      "International Business & Foreign Exchange Principles",
    ],
    careerProspects: [
      "Financial Accountant & Tax Consultant",
      "Corporate Auditor & Internal Audit Assistant",
      "Banking & Insurance Executive",
      "GST Practitioner & Financial Planner",
      "Business Development & Accounts Manager",
      "Foundation for CA, CS, CMA, M.Com, or MBA",
    ],
    syllabusOverview: [
      {
        year: "Year 1 (Semesters I & II)",
        topics: ["Financial Accounting I & II", "Management Principles & Practice", "Marketing Management", "Business Mathematics & Statistics", "Digital Fluency & Kannada / English"],
      },
      {
        year: "Year 2 (Semesters III & IV)",
        topics: ["Corporate Accounting", "Cost Accounting", "Business Law & Regulatory Framework", "Direct Taxes Law & Practice", "Financial Markets & Services", "Computerized Accounting"],
      },
      {
        year: "Year 3 (Semesters V & VI)",
        topics: ["Advanced Management Accounting", "Goods & Services Tax (GST)", "Auditing Principles", "International Business", "Financial Management", "Corporate Project Work"],
      },
    ],
  },
  {
    id: "puc",
    name: "Pre-University Courses (PUC)",
    shortName: "PUC",
    degree: "Pre-University Diploma (Campus Wing)",
    category: "pre-university",
    duration: "2 Years (PUC I & II)",
    affiliation: "Karnataka Pre-University Education Board",
    approval: "Recognized by Govt. of Karnataka",
    established: "Campus Establishment",
    tagline: "The premier collegiate stepping stone for Science and Commerce streams.",
    description: "The Pre-University wing at the KLE Gangavathi campus offers structured preparation for higher collegiate education. Featuring specialized subject combinations in Commerce and Science, students benefit from experienced lecturers, guided study sessions, and disciplined test series.",
    eligibility: "Students who have successfully passed the Karnataka SSLC (10th Standard) or equivalent examination from CBSE, ICSE, or State boards.",
    objectives: [
      "Build strong foundational grasp in basic sciences, commerce, and computer fundamentals.",
      "Prepare students for competitive entrance examinations and undergraduate university admissions.",
      "Inculcate study discipline through regular assessments and mentor-guided study hours.",
    ],
    keySubjects: [
      "Commerce Combinations: EBAC (Economics, Business Studies, Accountancy, Computer Science)",
      "Commerce Combinations: HEBA (History, Economics, Business Studies, Accountancy)",
      "Science Combinations: PCMB (Physics, Chemistry, Mathematics, Biology)",
      "Science Combinations: PCMC (Physics, Chemistry, Mathematics, Computer Science)",
      "Languages: English, Kannada, or Hindi",
    ],
    careerProspects: [
      "Seamless direct progression to BCA or B.Com at KLE Gangavathi campus",
      "Eligibility for professional engineering, medical, commerce, and management degrees",
    ],
    syllabusOverview: [
      {
        year: "PUC I (11th Standard)",
        topics: ["Core subject foundations", "Laboratory practicals", "First year Board orientation"],
      },
      {
        year: "PUC II (12th Standard)",
        topics: ["Board syllabus mastery", "Model examinations", "State Board final exams"],
      },
    ],
  },
];

export const NOTICES: Notice[] = [
  {
    id: "notice-aicte",
    title: "AICTE Letter of Approval (LoA) for Department of Computer Applications",
    date: "Official Notice",
    category: "AICTE / Regulatory",
    isImportant: true,
    fileUrl: "/documents/AICTE-Approval-Letter-KLE-Gangavathi.pdf",
    fileName: "AICTE-Approval-Letter-KLE-Gangavathi.pdf",
    description: "Official Letter of Approval (LoA) issued by the All India Council for Technical Education (AICTE), New Delhi, granting formal regulatory approval for the technical undergraduate BCA program at KLE Society's Gangavathi campus.",
  },
  {
    id: "notice-admissions",
    title: "Admissions Open for Academic Year 2025-26 & 2026-27 (BCA & B.Com)",
    date: "Current Academic Cycle",
    category: "Admissions",
    isImportant: true,
    description: "Registration and admission inquiries are formally open for the Bachelor of Computer Applications (BCA) and Bachelor of Commerce (B.Com) courses. Prospective candidates and parents are encouraged to visit the campus admission counter or submit the online registration form.",
  },
  {
    id: "notice-nep-exams",
    title: "Koppal University NEP Semester Examination & Fee Payment Schedule",
    date: "Current Notification",
    category: "Examinations",
    isImportant: false,
    description: "All undergraduate students are advised to review the semester examination registration circular from Koppal University. Examination forms and mandatory fee clearance must be completed at the administrative office before the deadline.",
  },
  {
    id: "notice-scholarships",
    title: "Karnataka State Scholarship Portal (SSP) & Post-Matric Applications",
    date: "Student Welfare",
    category: "General",
    isImportant: true,
    description: "Eligible students belonging to SC, ST, Cat-I, IIA, IIB, IIIA, IIIB, and minority categories are notified to submit their online scholarship applications through the SSP portal. Institutional verification assistance is available at the college office.",
  },
  {
    id: "notice-bus",
    title: "College Bus Transit Route Registration & Timetable Notification",
    date: "Transport Wing",
    category: "General",
    isImportant: false,
    description: "Students utilizing the institutional bus transit service across Gangavathi, Koppal Road, and neighboring feeder zones must register their bus passes for the current academic session at the accounts desk.",
  },
];

export const EVENTS: CollegeEvent[] = [
  {
    id: "event-1",
    title: "National IT Symposium & Technical Workshop on Cloud & Full-Stack Computing",
    date: "Scheduled Academic Event",
    category: "Workshops",
    location: "KLE Computer Applications Seminar Hall",
    description: "A hands-on technical workshop organized by the Department of Computer Applications featuring practical demonstrations on modern web application architectures, cloud deployment, and software industry best practices.",
    speakerOrOrganizer: "Dept. of Computer Applications",
  },
  {
    id: "event-2",
    title: "Practical Workshop on Goods & Services Tax (GST) & Digital Accounting",
    date: "Scheduled Commerce Event",
    category: "Academic",
    location: "Commerce Conference Hall",
    description: "An intensive interactive workshop for B.Com students detailing GST filing mechanisms, input tax credits, e-way bills, and modern computerized accounting tools with practicing Chartered Accountants.",
    speakerOrOrganizer: "Dept. of Commerce & Management",
  },
  {
    id: "event-3",
    title: "Annual Sports Meet & Inter-Class Athletic Tournaments",
    date: "Annual Campus Tradition",
    category: "Sports",
    location: "KLE College Sports Grounds",
    description: "A dynamic showcase of athletic spirit featuring track and field events, cricket, volleyball, kabaddi, and badminton competitions celebrating student sportsmanship and physical well-being.",
    speakerOrOrganizer: "Sports & Physical Education Committee",
  },
  {
    id: "event-4",
    title: "Prathibha Karanji: Annual Cultural Day & Talent Exhibition",
    date: "Annual Campus Tradition",
    category: "Cultural",
    location: "KLE Campus Open Auditorium",
    description: "A grand celebration of cultural heritage featuring classical music, contemporary drama, folk dance, debate, and fine arts showcasing the diverse creative talents of our students.",
    speakerOrOrganizer: "Cultural Activities Committee",
  },
  {
    id: "event-5",
    title: "New Student Induction & Orientation Ceremony",
    date: "Commencement of Session",
    category: "Academic",
    location: "College Main Auditorium",
    description: "Formal welcome address by the Principal and senior faculty members introducing newly enrolled students to the KLE academic ethos, code of conduct, library privileges, and mentorship frameworks.",
    speakerOrOrganizer: "College Administrative Council",
  },
];

export const FACILITIES: Facility[] = [
  {
    id: "lab",
    title: "Well-Equipped & Wi-Fi Enabled Computer Labs",
    shortDesc: "High-speed networked workstations with software programming environments.",
    fullDesc: "Our computer applications laboratory is furnished with contemporary desktop machines, high-speed leased line internet connectivity, and the latest software development suites for C, C++, Java, Python, Web Technologies, and Database Management.",
    image: "/images/kle/students.jpg",
    iconName: "Monitor",
    features: ["Dedicated high-speed internet & Wi-Fi", "Modern operating systems and compilers", "Individual terminal allocation per student", "Power backup with uninterruptible power supply (UPS)"],
  },
  {
    id: "library",
    title: "Central Academic Library & Reading Hall",
    shortDesc: "Comprehensive collection of textbooks, reference volumes, and periodicals.",
    fullDesc: "The college library provides a serene and scholarly environment with an extensive repository of university curriculum textbooks, reference guides, national journals, commerce compendiums, and digital study materials.",
    image: "/images/kle/library.jpg",
    iconName: "BookOpen",
    features: ["Vast volume of commerce & computer science titles", "Quiet, well-ventilated reading hall", "Subscription to leading periodicals & newspapers", "Book lending service for all enrolled students"],
  },
  {
    id: "bus",
    title: "College Bus Transit Facility",
    shortDesc: "Safe, punctual campus transportation across Gangavathi and surrounding areas.",
    fullDesc: "To ensure effortless, safe, and punctual commuting for students hailing from various areas of Gangavathi and surrounding rural belts, the college operates a dedicated fleet of college buses.",
    image: "/images/kle/campus.jpg",
    iconName: "Bus",
    features: ["Punctual morning pick-up and evening drop-off", "Conducted under direct college supervision", "Covers major nodal points on Koppal Road and town zones", "Affordable and highly secure for female students"],
  },
  {
    id: "staffroom",
    title: "Faculty Mentorship & Consultation Rooms",
    shortDesc: "Dedicated faculty work spaces for continuous student guidance and academic mentoring.",
    fullDesc: "Spacious faculty chambers and consultation corners facilitate frequent 1-on-1 interaction between professors and students, fostering strong mentorship and prompt resolution of academic queries.",
    image: "/images/kle/staffroom.jpg",
    iconName: "Users",
    features: ["Full-time accessibility of professors", "Personalized academic counselling", "Continuous assessment feedback", "Supportive mentorship environment"],
  },
  {
    id: "alerts",
    title: "SMS & Digital Parent Alert Service",
    shortDesc: "Prompt communication on attendance, schedules, and official notices.",
    fullDesc: "An institutional automated alert system regularly updates parents and guardians regarding daily attendance, monthly progress, upcoming examination timetables, and college circulars.",
    image: "/images/kle/students.jpg",
    iconName: "Bell",
    features: ["Daily absent/present mobile notifications", "Examination and fee alert broadcasts", "Instant emergency and holiday alerts", "Transparent parent-institution link"],
  },
  {
    id: "guided-study",
    title: "Guided Study Hours & Academic Mentoring",
    shortDesc: "Structured supervised study sessions for conceptual clarity and exam success.",
    fullDesc: "Special guided study hours are scheduled under the personal oversight of faculty members to assist students with difficult topics, practical coding challenges, and numerical commerce problems.",
    image: "/images/kle/library.jpg",
    iconName: "GraduationCap",
    features: ["Supervised revision and doubt clearance", "Remedial assistance for difficult subjects", "Practice problem sessions for accounts & programming", "Exam performance enhancement"],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "KLE Gangavathi Campus Building",
    category: "Campus",
    image: "/images/kle/campus.jpg",
    caption: "The academic building of KLE Society's College of Commerce & BCA on Koppal Road, Vaddarahatti, Gangavathi.",
  },
  {
    id: "g-2",
    title: "Central Academic Library",
    category: "Facilities",
    image: "/images/kle/library.jpg",
    caption: "Quiet reading and reference facilities stocked with commerce and IT educational volumes.",
  },
  {
    id: "g-3",
    title: "Faculty Staffroom & Mentor Workspace",
    category: "Facilities",
    image: "/images/kle/staffroom.jpg",
    caption: "Our faculty workspace where teachers prepare lectures and conduct student mentoring.",
  },
  {
    id: "g-4",
    title: "Students in Classroom & Computer Lab",
    category: "Students",
    image: "/images/kle/students.jpg",
    caption: "Engaged undergraduate students during academic sessions and practical computer training.",
  },
  {
    id: "g-5",
    title: "Dr. Prabhakar Kore, Chairman",
    category: "Leadership",
    image: "/images/kle/chairman.jpg",
    caption: "Dr. Prabhakar Kore, M.P. (Rajya Sabha), Chairman of KLE Society & Chancellor of KLE University.",
  },
  {
    id: "g-6",
    title: "Dr. Manasa D. A., Principal",
    category: "Leadership",
    image: "/images/kle/principal.jpg",
    caption: "Dr. Manasa D. A., Principal, leading academic operations and student excellence at Gangavathi.",
  },
];

export const ADMISSION_PROCESS_STEPS = [
  {
    step: "01",
    title: "Submission of Enquiry / Application",
    description: "Fill out the online enquiry form or collect the official admission brochure and application form from the college admission counter at the Gangavathi campus.",
  },
  {
    step: "02",
    title: "Counselling & Academic Guidance",
    description: "Meet with our experienced admission counsellors and department heads to discuss course pathways, syllabus structure, career prospects, and fee breakdown.",
  },
  {
    step: "03",
    title: "Verification of Original Documents",
    description: "Present the mandatory original documents and marks cards (SSLC, PUC II, Caste/Income Certificate, Aadhaar) at the administrative verification desk.",
  },
  {
    step: "04",
    title: "Enrollment & Seat Confirmation",
    description: "Complete formal admission fee clearance to confirm your enrollment in the preferred program (BCA or B.Com) and obtain the official student identification number.",
  },
];

export const REQUIRED_DOCUMENTS = [
  "Original SSLC (10th Standard) Marks Card + 3 attested photocopies",
  "Original PUC II (10+2) Marks Card / Passing Certificate + 3 attested photocopies",
  "Transfer Certificate (TC) issued by the last attended educational institution",
  "Migration Certificate (mandatory for students from outside Karnataka or other Boards)",
  "Caste and Income Certificate (mandatory for SC, ST, Cat-I, IIA, IIB, IIIA, IIIB fee concessions)",
  "Aadhaar Card photocopy of the applicant and parent/guardian",
  "5 recent passport-size color photographs and 2 stamp-size photographs",
  "Eligibility Certificate (where applicable for non-Karnataka students)",
];

export const FAQS: FAQItem[] = [
  {
    question: "Is the BCA program at KLE Gangavathi approved by AICTE?",
    answer: "Yes. The Department of Computer Applications at KLE Society's College, Gangavathi holds a formal Letter of Approval (LoA) from the All India Council for Technical Education (AICTE), New Delhi, ensuring compliance with national technical education norms.",
    category: "Admissions",
  },
  {
    question: "Which University is the college affiliated with?",
    answer: "The college is permanently affiliated to Koppal University, Karnataka, adhering to the curriculum, credit structure, and examination frameworks prescribed under the National Education Policy (NEP 2020).",
    category: "Academics",
  },
  {
    question: "Does the college provide student bus transportation?",
    answer: "Yes. The institution runs its own fleet of college buses covering Gangavathi town, Koppal Road, and key neighboring villages to provide safe, comfortable, and punctual transit for all students.",
    category: "Facilities",
  },
  {
    question: "Are government and post-matric scholarships available?",
    answer: "Yes. Eligible students can apply for post-matric scholarships through the Karnataka State Scholarship Portal (SSP), National Scholarship Portal (NSP), and special category welfare concessions. The administrative office provides full application assistance.",
    category: "Admissions",
  },
  {
    question: "What are the college working hours and contact details?",
    answer: "The college operates Monday through Saturday from 8:00 AM to 5:00 PM (Sunday closed). You can reach the campus directly by telephone at +91 94834 82741 or email at klesbcagvt@gmail.com.",
    category: "Campus Life",
  },
  {
    question: "Can students from Science, Commerce, and Arts join the BCA course?",
    answer: "Candidates who have completed Two-Year Pre-University (PUC II / 10+2) in Science or Commerce or equivalent examination with the qualifying aggregate marks are eligible for BCA admission.",
    category: "Academics",
  },
];
