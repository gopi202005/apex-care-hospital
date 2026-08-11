import { Doctor, Department, HospitalLocation, HealthPackage, ServiceItem, Article, PatientTestimonial, FAQItem } from '../types';

export const HOSPITALS: HospitalLocation[] = [
  {
    id: 'hosp-chennai-main',
    name: 'Apex Care Super Specialty — Chennai Central',
    city: 'Chennai',
    address: '100 Mount Road, Guindy, Chennai, Tamil Nadu 600032',
    pincode: '600032',
    phone: '+91 44 2345 6789',
    emergencyPhone: '+91 44 2345 9999',
    email: 'chennai.central@apexcare.demo',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=1000',
    galleryImages: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
    ],
    distanceKm: 2.4,
    emergency24x7: true,
    icuBeds: 120,
    openingHours: '24 Hours / 7 Days a Week',
    departments: ['Cardiology', 'Neurology', 'Orthopedics', 'Oncology', 'Emergency Medicine', 'Gastroenterology', 'Pediatrics'],
    specialtiesCount: 32,
    latitude: 13.0067,
    longitude: 80.2206,
    visitingHours: 'Morning: 10:00 AM – 12:00 PM | Evening: 4:30 PM – 7:00 PM',
    facilities: ['Advanced Robotic Surgery Suite', 'Level 1 Trauma Center', '3.0T MRI & 256-Slice CT', 'Helipad Access', '24/7 Drive-thru Pharmacy', 'Deluxe Private Patient Suites'],
    googleMapUrl: 'https://maps.google.com'
  },
  {
    id: 'hosp-bengaluru-indira',
    name: 'Apex Care Multi-Specialty — Bengaluru',
    city: 'Bengaluru',
    address: '42 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038',
    pincode: '560038',
    phone: '+91 80 4567 8900',
    emergencyPhone: '+91 80 4567 9999',
    email: 'bengaluru.indiranagar@apexcare.demo',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
    galleryImages: [
      'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
    ],
    distanceKm: 4.8,
    emergency24x7: true,
    icuBeds: 85,
    openingHours: '24 Hours / 7 Days a Week',
    departments: ['Neurology', 'Oncology', 'Pediatrics', 'Dermatology', 'Gynecology', 'Urology'],
    specialtiesCount: 28,
    latitude: 12.9784,
    longitude: 77.6408,
    visitingHours: 'Morning: 10:30 AM – 1:00 PM | Evening: 5:00 PM – 7:30 PM',
    facilities: ['CyberKnife Radiation Oncology', 'NICU & PICU Center', 'Integrated Daycare Surgery', 'International Patient Lounge'],
    googleMapUrl: 'https://maps.google.com'
  },
  {
    id: 'hosp-hyderabad-jubilee',
    name: 'Apex Care Institute of Oncology & Cardiac — Hyderabad',
    city: 'Hyderabad',
    address: 'Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033',
    pincode: '500033',
    phone: '+91 40 3322 1100',
    emergencyPhone: '+91 40 3322 9999',
    email: 'hyderabad.jubilee@apexcare.demo',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1000',
    galleryImages: [
      'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800'
    ],
    distanceKm: 6.1,
    emergency24x7: true,
    icuBeds: 100,
    openingHours: '24 Hours / 7 Days a Week',
    departments: ['Cardiology', 'Oncology', 'Pulmonology', 'Nephrology', 'General Medicine'],
    specialtiesCount: 25,
    latitude: 17.4319,
    longitude: 78.4072,
    visitingHours: 'Morning: 11:00 AM – 1:00 PM | Evening: 4:00 PM – 6:30 PM',
    facilities: ['PET-CT Scan Suite', 'Heart Transplant Unit', 'Bone Marrow Transplant Center', '24/7 Dialysis Unit'],
    googleMapUrl: 'https://maps.google.com'
  },
  {
    id: 'hosp-coimbatore-city',
    name: 'Apex Care Health City — Coimbatore',
    city: 'Coimbatore',
    address: '88 Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004',
    pincode: '641004',
    phone: '+91 422 2888 100',
    emergencyPhone: '+91 422 2888 999',
    email: 'coimbatore.peelamedu@apexcare.demo',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000',
    galleryImages: [
      'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800'
    ],
    distanceKm: 1.8,
    emergency24x7: true,
    icuBeds: 60,
    openingHours: '24 Hours / 7 Days a Week',
    departments: ['Orthopedics', 'ENT', 'Ophthalmology', 'Dental Care', 'Dermatology'],
    specialtiesCount: 20,
    latitude: 11.0264,
    longitude: 77.0027,
    visitingHours: 'Morning: 10:00 AM – 12:30 PM | Evening: 4:30 PM – 7:00 PM',
    facilities: ['Joint Replacement Pavilion', 'Excimer Laser Vision Suite', 'Digital Mammography Unit'],
    googleMapUrl: 'https://maps.google.com'
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'dept-cardiology',
    name: 'Cardiology & Vascular Sciences',
    iconName: 'HeartPulse',
    shortDescription: 'Advanced comprehensive cardiac care, interventional cardiology, heart surgery, and vascular procedures.',
    fullDescription: 'Our Cardiology Department is equipped with cutting-edge biplane cath labs, cardiac MRI, and hybrid operating suites. Supported by renowned cardiologists and cardiothoracic surgeons, we deliver world-class care for coronary artery disease, heart failure, arrhythmias, and structural heart defects.',
    headOfDepartment: 'Dr. Arjun Mehta, MD, DM (Cardiology)',
    doctorCount: 14,
    bannerImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200',
    category: 'super-specialty',
    conditionsTreated: [
      'Coronary Artery Disease & Heart Attack',
      'Heart Failure & Cardiomyopathy',
      'Cardiac Arrhythmias & Atrial Fibrillation',
      'Valvular Heart Disease',
      'Hypertension & Vascular Blockages'
    ],
    proceduresList: [
      'Angioplasty & Stenting (Primary PCI)',
      'Coronary Artery Bypass Graft (CABG)',
      'Transcatheter Aortic Valve Replacement (TAVR)',
      'Pacemaker & ICD Implantation',
      'Electrophysiology Study (EPS) & Radiofrequency Ablation'
    ],
    facilities: [
      '24/7 Chest Pain Emergency Desk',
      '3D Echocardiography Suite',
      'Dedicated Cardiac Intensive Care Unit (CICU)',
      'Advanced Cardiac Rehabilitation Gym'
    ],
    faqs: [
      {
        question: 'What are the early warning signs of a cardiac emergency?',
        answer: 'Chest pressure or tightness, pain radiating to the left arm, neck, or jaw, sudden shortness of breath, dizziness, and cold sweats require immediate emergency evaluation.'
      },
      {
        question: 'How long is recovery after an angioplasty procedure?',
        answer: 'Most patients return home within 24 to 48 hours and resume light daily activities within 5 to 7 days under cardiac rehab guidance.'
      }
    ]
  },
  {
    id: 'dept-neurology',
    name: 'Neurology & Neurosurgery',
    iconName: 'Brain',
    shortDescription: 'Expert care for stroke, brain tumors, epilepsy, Parkinson’s disease, and spinal disorders.',
    fullDescription: 'The Apex Care Neurosciences Institute provides 24/7 hyper-acute stroke intervention, minimally invasive neurosurgery, deep brain stimulation, and comprehensive neuro-rehabilitation.',
    headOfDepartment: 'Dr. Sunita Rao, M.Ch (Neurosurgery)',
    doctorCount: 12,
    bannerImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200',
    category: 'super-specialty',
    conditionsTreated: [
      'Ischemic & Hemorrhagic Stroke',
      'Brain & Spinal Cord Tumors',
      'Epilepsy & Seizure Disorders',
      'Parkinson’s Disease & Movement Disorders',
      'Herniated Disc & Spine Degeneration'
    ],
    proceduresList: [
      'Thrombolytic Therapy & Endovascular Thrombectomy',
      'Keyhole Brain Surgery & Craniotomy',
      'Deep Brain Stimulation (DBS)',
      'Microscopic Spine Decompression'
    ],
    facilities: [
      'Comprehensive Stroke Unit (24/7)',
      'Intraoperative MRI & Stealth Navigation',
      'Continuous Video EEG Monitoring'
    ],
    faqs: [
      {
        question: 'What is the golden hour for stroke treatment?',
        answer: 'The first 4.5 hours after stroke onset are critical for clot-busting intravenous medications to prevent permanent neurological damage.'
      }
    ]
  },
  {
    id: 'dept-orthopedics',
    name: 'Orthopedics & Joint Replacement',
    iconName: 'Bone',
    shortDescription: 'Robotic joint replacements, sports injury management, spine surgeries, and complex trauma care.',
    fullDescription: 'Featuring robotic-assisted knee and hip replacement systems, our orthopedics center restores mobility through advanced surgical precision and accelerated rehabilitation protocols.',
    headOfDepartment: 'Dr. Rajesh Sharma, MS (Ortho), M.Ch',
    doctorCount: 16,
    bannerImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200',
    category: 'surgical',
    conditionsTreated: [
      'Osteoarthritis of Knee & Hip',
      'ACL/PCL Ligament & Meniscus Tears',
      'Complex Bone Fractures & Dislocations',
      'Spinal Canal Stenosis',
      'Rotator Cuff & Shoulder Injuries'
    ],
    proceduresList: [
      'Robotic Total Knee & Hip Replacement',
      'Arthroscopic Knee & Shoulder Repair',
      'Minimally Invasive Spine Surgery (MISS)',
      'Deformity Correction & Trauma Fixation'
    ],
    facilities: [
      'MAKO Robotic Surgical Assistant',
      'Dedicated Orthopedic Rehabilitation Center',
      'Sports Injury Assessment Clinic'
    ],
    faqs: [
      {
        question: 'How long does a robotic knee replacement surgery take?',
        answer: 'The surgical procedure typically takes 60 to 90 minutes. Patients often stand and walk within 6 to 12 hours post-surgery.'
      }
    ]
  },
  {
    id: 'dept-oncology',
    name: 'Comprehensive Cancer Center',
    iconName: 'ShieldAlert',
    shortDescription: 'Integrated medical, surgical, and radiation oncology with personalized precision medicine.',
    fullDescription: 'Our multidisciplinary tumor board brings together medical oncologists, surgical oncologists, radiation therapy specialists, and pathologists to craft tailored cancer treatment programs.',
    headOfDepartment: 'Dr. Ananya Sen, MD, DM (Medical Oncology)',
    doctorCount: 10,
    bannerImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200',
    category: 'super-specialty',
    conditionsTreated: [
      'Breast Cancer',
      'Lung & Gastrointestinal Cancers',
      'Leukemia & Lymphoma',
      'Gynecological Cancers',
      'Head & Neck Malignancies'
    ],
    proceduresList: [
      'Targeted Immunotherapy & Chemotherapy',
      'CyberKnife Robotic Radiosurgery',
      'Minimally Invasive Cancer Resection',
      'Autologous Bone Marrow Transplant'
    ],
    facilities: [
      'TrueBeam STx Linear Accelerator',
      'Daycare Chemotherapy Infusion Suite',
      'Onco-pathology & Genetic Testing Lab'
    ],
    faqs: [
      {
        question: 'What is a Multidisciplinary Tumor Board?',
        answer: 'A expert committee of oncologists, radiologists, and surgeons who meet to review individual patient cases and agree on the optimal treatment sequence.'
      }
    ]
  },
  {
    id: 'dept-pediatrics',
    name: 'Pediatrics & Neonatology',
    iconName: 'Baby',
    shortDescription: 'Compassionate healthcare for newborns, children, and adolescents with Level IV NICU.',
    fullDescription: 'Providing a child-friendly environment with round-the-clock pediatric emergency, pediatric intensive care, immunizations, and developmental delay management.',
    headOfDepartment: 'Dr. Meera Reddy, MD (Pediatrics)',
    doctorCount: 11,
    bannerImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200',
    category: 'medical',
    conditionsTreated: [
      'Premature Birth & Neonatal Distress',
      'Pediatric Respiratory Infections & Asthma',
      'Congenital Heart & Metabolic Defects',
      'Growth & Developmental Delays'
    ],
    proceduresList: [
      'Level IV NICU Care & Surfactant Therapy',
      'Pediatric Endoscopy',
      'Childhood Immunization Programs'
    ],
    facilities: [
      'Level IV Neonatal ICU',
      'Pediatric Intensive Care Unit (PICU)',
      'Child Play & Recovery Zone'
    ],
    faqs: []
  },
  {
    id: 'dept-dermatology',
    name: 'Dermatology & Cosmetology',
    iconName: 'Sparkles',
    shortDescription: 'Clinical dermatology, laser therapies, skin cancer screenings, and aesthetic treatments.',
    fullDescription: 'Combining clinical precision with modern dermatological tech to treat skin conditions, eczema, psoriasis, acne scars, and hair loss.',
    headOfDepartment: 'Dr. Priya Nair, MD (Dermatology)',
    doctorCount: 8,
    bannerImage: 'https://images.unsplash.com/photo-1512290900676-26c2a4ed7470?auto=format&fit=crop&q=80&w=1200',
    category: 'medical',
    conditionsTreated: [
      'Severe Acne & Rosacea',
      'Psoriasis & Eczema',
      'Alopecia & Hair Thinning',
      'Pigmentation & Melasma',
      'Skin Lesions & Mole Screening'
    ],
    proceduresList: [
      'CO2 Fractional Laser Resurfacing',
      'PRP Hair Restoration Therapy',
      'Phototherapy for Psoriasis & Vitiligo',
      'Excision of Skin Biopsies'
    ],
    facilities: [
      'State-of-the-art Laser Suite',
      'Dermatoscopy Diagnostic Lounge'
    ],
    faqs: []
  },
  {
    id: 'dept-gastroenterology',
    name: 'Gastroenterology & Hepatology',
    iconName: 'Activity',
    shortDescription: 'Comprehensive GI care, advanced therapeutic endoscopy, liver transplantation, and IB management.',
    fullDescription: 'Equipped with High-Definition NBI Endoscopy suites for early detection of GI bleeding, polyps, fatty liver, and inflammatory bowel diseases.',
    headOfDepartment: 'Dr. Sanjay Kapoor, MD, DM (Gastro)',
    doctorCount: 9,
    bannerImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200',
    category: 'medical',
    conditionsTreated: ['Acid Reflux (GERD)', 'Ulcerative Colitis & Crohn’s Disease', 'Cirrhosis & Fatty Liver Disease', 'Gallstones & Pancreatitis'],
    proceduresList: ['Diagnostic & Therapeutic Endoscopy', 'Colonoscopy & Polypectomy', 'ERCP for Bile Duct Stones', 'FibroScan Liver Assessment'],
    facilities: ['Advanced Endoscopy Suite', 'Liver Transplant ICU'],
    faqs: []
  },
  {
    id: 'dept-pulmonology',
    name: 'Pulmonology & Respiratory Care',
    iconName: 'Stethoscope',
    shortDescription: 'Specialized treatment for asthma, COPD, sleep apnea, pulmonary fibrosis, and lung infections.',
    fullDescription: 'Providing advanced pulmonary function testing, EBUS bronchoscopy, and dedicated sleep study laboratories for respiratory disorders.',
    headOfDepartment: 'Dr. Farhan Khan, MD (Pulmonary Medicine)',
    doctorCount: 7,
    bannerImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1200',
    category: 'medical',
    conditionsTreated: ['Asthma & Severe Allergies', 'COPD & Emphysema', 'Obstructive Sleep Apnea', 'Pneumonia & Interstitial Lung Disease'],
    proceduresList: ['Bronchoscopy & EBUS', 'Polysomnography (Overnight Sleep Study)', 'Spirometry & Diffusion Capacity Testing'],
    facilities: ['PFT & Pulmonary Rehab Unit', 'Sleep Lab'],
    faqs: []
  },
  {
    id: 'dept-nephrology',
    name: 'Nephrology & Renal Transplant',
    iconName: 'Layers',
    shortDescription: 'Dialysis care, acute kidney injury management, chronic kidney disease, and kidney transplants.',
    fullDescription: '24/7 hemodialysis and peritoneal dialysis facility backed by world-class renal transplant surgeons.',
    headOfDepartment: 'Dr. Vikram Malhotra, MD, DM (Nephrology)',
    doctorCount: 8,
    bannerImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    category: 'super-specialty',
    conditionsTreated: ['Chronic Kidney Disease (CKD)', 'Renal Failure', 'Glomerulonephritis', 'Hypertensive Kidney Disease'],
    proceduresList: ['Hemodialysis & SLED', 'AV Fistula Creation', 'Kidney Transplantation', 'Renal Biopsy'],
    facilities: ['High-Flux Dialysis Center', 'Sterile Transplant Recovery ICU'],
    faqs: []
  },
  {
    id: 'dept-urology',
    name: 'Urology & Andrology',
    iconName: 'Shield',
    shortDescription: 'Laser kidney stone removal, prostate enlargement, reconstructive urology, and male health.',
    fullDescription: 'Offering Holmium Laser Enucleation of Prostate (HoLEP) and RIRS laser stone removal for painless recovery.',
    headOfDepartment: 'Dr. Shalini Verma, MS, M.Ch (Urology)',
    doctorCount: 7,
    bannerImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200',
    category: 'surgical',
    conditionsTreated: ['Kidney Stones & Ureteral Stones', 'Benign Prostatic Hyperplasia (BPH)', 'Bladder Cancer', 'Erectile Dysfunction & Male Infertility'],
    proceduresList: ['RIRS & Laser Lithotripsy', 'HoLEP Prostate Surgery', 'Lap & Robotic Urological Surgery'],
    facilities: ['Laser Surgery Suite', 'Urodynamic Testing Lab'],
    faqs: []
  },
  {
    id: 'dept-gynecology',
    name: 'Obstetrics & Gynecology',
    iconName: 'UserCheck',
    shortDescription: 'High-risk pregnancy care, painless deliveries, laparoscopic gynecology, and fertility support.',
    fullDescription: 'Holistic women health care from adolescent gynecology through maternity to menopausal care.',
    headOfDepartment: 'Dr. Kavita Deshmukh, MD, DGO',
    doctorCount: 11,
    bannerImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200',
    category: 'medical',
    conditionsTreated: ['High-Risk Pregnancies', 'Fibroids & Endometriosis', 'PCOS & Hormonal Imbalances', 'Cervical Health'],
    proceduresList: ['Painless Epidural Delivery', 'Laparoscopic Hysterectomy', 'Colposcopy & Pap Smears'],
    facilities: ['Private Birthing Suites', 'Metal Fetal Medicine Center'],
    faqs: []
  },
  {
    id: 'dept-ent',
    name: 'ENT & Head & Neck Surgery',
    iconName: 'Ear',
    shortDescription: 'Ear microsurgery, endoscopic sinus surgery, voice disorders, and hearing rehabilitation.',
    fullDescription: 'Comprehensive care for sinus, hearing loss, vertigo, snore solutions, and voice pathology.',
    headOfDepartment: 'Dr. David Miller, MS (ENT)',
    doctorCount: 6,
    bannerImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
    category: 'surgical',
    conditionsTreated: ['Chronic Sinusitis & Nasal Polyps', 'Hearing Loss & Tinnitus', 'Tonsillitis & Sleep Apnea', 'Vertigo & Balance Disorders'],
    proceduresList: ['Functional Endoscopic Sinus Surgery (FESS)', 'Cochlear Implant Surgery', 'Tympanoplasty'],
    facilities: ['Audiometry & Impedance Lab', 'Voice Therapy Clinic'],
    faqs: []
  },
  {
    id: 'dept-ophthalmology',
    name: 'Ophthalmology & Eye Care',
    iconName: 'Eye',
    shortDescription: 'Micro-incision cataract surgery, LASIK laser vision correction, glaucoma, and retina care.',
    fullDescription: 'Equipped with Femto-second laser technology for precision blade-free cataract and LASIK surgeries.',
    headOfDepartment: 'Dr. Arjun Mehta, MS (Ophthalmology)',
    doctorCount: 6,
    bannerImage: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=1200',
    category: 'surgical',
    conditionsTreated: ['Cataract', 'Refractive Errors (Myopia/Astigmatism)', 'Glaucoma', 'Diabetic Retinopathy'],
    proceduresList: ['Femto-Laser Cataract Surgery (FLACS)', 'SMILE & LASIK Vision Correction', 'Intravitreal Injections'],
    facilities: ['OCT Retina Imaging', 'Excimer Laser Center'],
    faqs: []
  },
  {
    id: 'dept-general-medicine',
    name: 'Internal Medicine & Diabetology',
    iconName: 'Cross',
    shortDescription: 'Management of complex multi-system illnesses, diabetes, hypertension, and infectious diseases.',
    fullDescription: 'Primary care anchor providing preventative health screenings, chronic disease management, and fever evaluation.',
    headOfDepartment: 'Dr. Rajesh Sharma, MD (Medicine)',
    doctorCount: 15,
    bannerImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200',
    category: 'medical',
    conditionsTreated: ['Type 1 & Type 2 Diabetes', 'Hypertension & Dyslipidemia', 'Infectious Fevers (Dengue, Malaria, Typhoid)', 'Thyroid Disorders'],
    proceduresList: ['Continuous Glucose Monitoring (CGM)', 'Preventive Health Assessment'],
    facilities: ['Diabetic Foot Care Clinic', 'Executive Health Check Lounge'],
    faqs: []
  },
  {
    id: 'dept-emergency',
    name: '24x7 Emergency & Trauma Center',
    iconName: 'Zap',
    shortDescription: 'Level-1 trauma center with 24/7 dedicated ER physicians, ambulances, and acute resuscitation.',
    fullDescription: 'Rapid triage, cardiac care, stroke protocols, and critical accident management with zero waiting time.',
    headOfDepartment: 'Dr. Sunita Rao, MD (Emergency Medicine)',
    doctorCount: 18,
    bannerImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
    category: 'super-specialty',
    conditionsTreated: ['Accident Trauma & Fractures', 'Heart Attack & Cardiac Arrest', 'Stroke & Brain Trauma', 'Severe Allergic Reactions'],
    proceduresList: ['Advanced Resuscitation', 'Trauma Stabilization Surgery'],
    facilities: ['Dedicated ER Trauma Bay', 'Mobile ICU Ambulances'],
    faqs: []
  },
  {
    id: 'dept-dental',
    name: 'Dental Science & Maxillofacial Care',
    iconName: 'Smile',
    shortDescription: 'Digital smile design, painless root canals, dental implants, and orthognathic surgery.',
    fullDescription: 'Comprehensive dental care using 3D intraoral scanners and computer-guided implantology.',
    headOfDepartment: 'Dr. Priya Nair, MDS',
    doctorCount: 5,
    bannerImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200',
    category: 'surgical',
    conditionsTreated: ['Dental Caries & Tooth Decay', 'Impacted Wisdom Teeth', 'Gum Disease & Periodontitis', 'Malocclusion'],
    proceduresList: ['Single-Sitting Laser Root Canal', 'Immediate Load Dental Implants', 'Invisalign Clear Aligners'],
    facilities: ['3D CBCT Scanner', 'Laser Dentistry Suite'],
    faqs: []
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'doc-arjun-mehta',
    name: 'Dr. Arjun Mehta',
    title: 'Senior Consultant & Director — Cardiology',
    qualification: 'MD (Gen Med), DM (Cardiology), FACC (USA)',
    specialtyId: 'dept-cardiology',
    specialtyName: 'Cardiology',
    experienceYears: 19,
    rating: 4.9,
    reviewCount: 342,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    hospitalIds: ['hosp-chennai-main', 'hosp-hyderabad-jubilee'],
    hospitalNames: ['Apex Care — Chennai Central', 'Apex Care — Hyderabad'],
    location: 'Chennai & Hyderabad',
    languages: ['English', 'Hindi', 'Tamil'],
    consultationFee: 1200,
    availability: 'today',
    nextAvailableSlot: 'Today at 04:30 PM',
    consultationTypes: ['in-person', 'video'],
    featured: true,
    about: 'Dr. Arjun Mehta is a pioneering interventional cardiologist with over 19 years of clinical expertise. He has performed over 5,000 successful coronary angioplasties and complex TAVR procedures. Dr. Mehta is an international faculty member at global cardiovascular summits.',
    expertise: [
      'Complex Coronary Angioplasty (CTO)',
      'Transcatheter Aortic Valve Replacement (TAVR)',
      'Heart Failure & Cardiac Rehabilitation',
      'Radial Artery Angioplasty',
      'Structural Heart Disease Intervention'
    ],
    education: [
      { degree: 'DM — Cardiology', institution: 'All India Institute of Medical Sciences (AIIMS), New Delhi', year: '2008' },
      { degree: 'MD — Internal Medicine', institution: 'Madras Medical College, Chennai', year: '2004' },
      { degree: 'MBBS', institution: 'Stanley Medical College', year: '2000' }
    ],
    experienceList: [
      { role: 'Senior Director & Chief Cardiologist', hospital: 'Apex Care Super Specialty Hospital', period: '2016 – Present' },
      { role: 'Senior Consultant Cardiologist', hospital: 'Mount Sinai Medical Center (Visiting Fellow)', period: '2012 – 2016' }
    ],
    certifications: [
      'Fellow of American College of Cardiology (FACC)',
      'Board Certified in Interventional Cardiology'
    ],
    publications: [
      'Contemporary Outcomes of Transcatheter Valve Implantation — Journal of ACC (2021)',
      'Radial vs Femoral Approach in Acute Coronary Syndromes — Indian Heart Journal (2019)'
    ]
  },
  {
    id: 'doc-sunita-rao',
    name: 'Dr. Sunita Rao',
    title: 'Head of Neurosciences & Senior Neurosurgeon',
    qualification: 'MBBS, MS (General Surgery), M.Ch (Neurosurgery)',
    specialtyId: 'dept-neurology',
    specialtyName: 'Neurology & Neurosurgery',
    experienceYears: 16,
    rating: 4.95,
    reviewCount: 289,
    image: 'https://images.unsplash.com/photo-1594824813566-78a933f2f302?auto=format&fit=crop&q=80&w=800',
    hospitalIds: ['hosp-chennai-main', 'hosp-bengaluru-indira'],
    hospitalNames: ['Apex Care — Chennai Central', 'Apex Care — Bengaluru'],
    location: 'Chennai & Bengaluru',
    languages: ['English', 'Kannada', 'Hindi', 'Tamil'],
    consultationFee: 1500,
    availability: 'today',
    nextAvailableSlot: 'Today at 05:00 PM',
    consultationTypes: ['in-person', 'video'],
    featured: true,
    about: 'Dr. Sunita Rao is a renowned neurosurgeon specializing in brain tumor excision, endoscopic skull base surgery, and acute stroke intervention. She has led groundbreaking clinical trials in neuro-navigation technology.',
    expertise: [
      'Keyhole Brain Surgery',
      'Spine Decompression & Stabilization',
      'Deep Brain Stimulation for Parkinson’s',
      'Cerebrovascular Aneurysm Clipping'
    ],
    education: [
      { degree: 'M.Ch — Neurosurgery', institution: 'NIMHANS, Bengaluru', year: '2010' },
      { degree: 'MS — General Surgery', institution: 'KMC Manipal', year: '2006' }
    ],
    experienceList: [
      { role: 'Head of Neurosciences', hospital: 'Apex Care Super Specialty', period: '2017 – Present' }
    ],
    certifications: ['Fellow of Royal College of Surgeons (FRCS - Edin)'],
    publications: ['Endoscopic Transsphenoidal Pituitary Surgery Advances (2022)']
  },
  {
    id: 'doc-rajesh-sharma',
    name: 'Dr. Rajesh Sharma',
    title: 'Chief Robotic Joint Replacement Surgeon',
    qualification: 'MS (Ortho), M.Ch (Ortho - UK), FACS',
    specialtyId: 'dept-orthopedics',
    specialtyName: 'Orthopedics',
    experienceYears: 22,
    rating: 4.88,
    reviewCount: 412,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    hospitalIds: ['hosp-chennai-main', 'hosp-coimbatore-city'],
    hospitalNames: ['Apex Care — Chennai Central', 'Apex Care — Coimbatore'],
    location: 'Chennai & Coimbatore',
    languages: ['English', 'Hindi', 'Tamil', 'Punjabi'],
    consultationFee: 1300,
    availability: 'tomorrow',
    nextAvailableSlot: 'Tomorrow at 10:00 AM',
    consultationTypes: ['in-person'],
    featured: true,
    about: 'Dr. Rajesh Sharma is an acclaimed orthopedic specialist with over two decades of expertise in MAKO robotic-assisted total knee and hip replacements, minimally invasive joint preservation, and sports injury reconstruction.',
    expertise: ['Robotic Knee Replacement', 'Total Hip Arthroplasty', 'ACL & Meniscus Arthroscopy', 'Revision Joint Surgery'],
    education: [{ degree: 'M.Ch Orthopedics', institution: 'University of Dundee, UK', year: '2005' }],
    experienceList: [{ role: 'Chief Orthopedic Surgeon', hospital: 'Apex Care Hospital', period: '2014 – Present' }],
    certifications: ['Certified MAKO Robotic Surgeon'],
    publications: ['Robotic Alignment vs Manual Technique in TKA (2020)']
  },
  {
    id: 'doc-ananya-sen',
    name: 'Dr. Ananya Sen',
    title: 'Senior Director — Medical & Precision Oncology',
    qualification: 'MD, DM (Medical Oncology), ESMO Certified (Switzerland)',
    specialtyId: 'dept-oncology',
    specialtyName: 'Oncology',
    experienceYears: 15,
    rating: 4.92,
    reviewCount: 215,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    hospitalIds: ['hosp-hyderabad-jubilee', 'hosp-bengaluru-indira'],
    hospitalNames: ['Apex Care — Hyderabad', 'Apex Care — Bengaluru'],
    location: 'Hyderabad & Bengaluru',
    languages: ['English', 'Bengali', 'Hindi', 'Telugu'],
    consultationFee: 1400,
    availability: 'today',
    nextAvailableSlot: 'Today at 03:00 PM',
    consultationTypes: ['in-person', 'video'],
    featured: true,
    about: 'Dr. Ananya Sen is an expert medical oncologist focused on target-driven immunotherapy, genomic profiling for personalized cancer treatment, and breast & lung cancer therapeutics.',
    expertise: ['Targeted Immunotherapy', 'Genomic Cancer Profiling', 'Breast Cancer Care', 'Chemotherapy Protocols'],
    education: [{ degree: 'DM Medical Oncology', institution: 'Tata Memorial Hospital, Mumbai', year: '2011' }],
    experienceList: [{ role: 'Director Medical Oncology', hospital: 'Apex Care Oncology Institute', period: '2018 – Present' }],
    certifications: ['European Society for Medical Oncology (ESMO) Fellow'],
    publications: ['Immunotherapy Response Rates in Non-Small Cell Lung Cancer (2023)']
  },
  {
    id: 'doc-vikram-malhotra',
    name: 'Dr. Vikram Malhotra',
    title: 'Lead Consultant — Nephrology & Transplant Physician',
    qualification: 'MD, DM (Nephrology), FISN (USA)',
    specialtyId: 'dept-nephrology',
    specialtyName: 'Nephrology',
    experienceYears: 17,
    rating: 4.85,
    reviewCount: 178,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    hospitalIds: ['hosp-chennai-main', 'hosp-hyderabad-jubilee'],
    hospitalNames: ['Apex Care — Chennai Central', 'Apex Care — Hyderabad'],
    location: 'Chennai & Hyderabad',
    languages: ['English', 'Hindi', 'Telugu'],
    consultationFee: 1100,
    availability: 'tomorrow',
    nextAvailableSlot: 'Tomorrow at 11:30 AM',
    consultationTypes: ['in-person', 'video'],
    featured: false,
    about: 'Dr. Vikram Malhotra has directed over 400 renal transplants and manages complex glomerulonephritis, ABO-incompatible kidney transplants, and intensive care nephrology.',
    expertise: ['Renal Transplantation', 'ABO-Incompatible Kidney Transplant', 'Hemodialysis Management', 'Lupus Nephritis Care'],
    education: [{ degree: 'DM Nephrology', institution: 'PGIMER Chandigarh', year: '2009' }],
    experienceList: [{ role: 'Chief Nephrologist', hospital: 'Apex Care Hospital', period: '2015 – Present' }],
    certifications: ['International Society of Nephrology Fellow'],
    publications: ['Long-term Survival in Renal Allograft Recipients (2021)']
  },
  {
    id: 'doc-meera-reddy',
    name: 'Dr. Meera Reddy',
    title: 'Senior Consultant — Pediatrics & Neonatology',
    qualification: 'MD (Pediatrics), Fellowship in Neonatology (Australia)',
    specialtyId: 'dept-pediatrics',
    specialtyName: 'Pediatrics',
    experienceYears: 14,
    rating: 4.94,
    reviewCount: 310,
    image: 'https://images.unsplash.com/photo-1594824813566-78a933f2f302?auto=format&fit=crop&q=80&w=800',
    hospitalIds: ['hosp-bengaluru-indira', 'hosp-chennai-main'],
    hospitalNames: ['Apex Care — Bengaluru', 'Apex Care — Chennai Central'],
    location: 'Bengaluru & Chennai',
    languages: ['English', 'Telugu', 'Kannada', 'Tamil'],
    consultationFee: 900,
    availability: 'today',
    nextAvailableSlot: 'Today at 06:00 PM',
    consultationTypes: ['in-person', 'video'],
    featured: true,
    about: 'Dr. Meera Reddy specializes in high-risk neonatal intensive care (Level IV NICU), premature baby neurodevelopmental care, pediatric asthma, and growth monitoring.',
    expertise: ['Neonatal Intensive Care', 'Premature Infant Nutrition', 'Pediatric Respiratory Diseases', 'Child Development'],
    education: [{ degree: 'Fellowship Neonatology', institution: 'Royal Children’s Hospital, Melbourne', year: '2012' }],
    experienceList: [{ role: 'Chief Neonatologist', hospital: 'Apex Care Children Wing', period: '2017 – Present' }],
    certifications: ['Neonatal Resuscitation Provider (NRP) Instructor'],
    publications: ['Surfactant Therapy in Extreme Preterm Infants (2020)']
  },
  {
    id: 'doc-sanjay-kapoor',
    name: 'Dr. Sanjay Kapoor',
    title: 'Chief Interventional Gastroenterologist',
    qualification: 'MD, DM (Gastroenterology), FASGE',
    specialtyId: 'dept-gastroenterology',
    specialtyName: 'Gastroenterology',
    experienceYears: 18,
    rating: 4.87,
    reviewCount: 195,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    hospitalIds: ['hosp-chennai-main'],
    hospitalNames: ['Apex Care — Chennai Central'],
    location: 'Chennai',
    languages: ['English', 'Hindi', 'Tamil'],
    consultationFee: 1100,
    availability: 'this-week',
    nextAvailableSlot: 'Thu, 20 Aug at 11:00 AM',
    consultationTypes: ['in-person'],
    featured: false,
    about: 'Dr. Sanjay Kapoor is a pioneer in endoscopic ultrasound (EUS) and ERCP for complex pancreatic-biliary diseases.',
    expertise: ['Endoscopic Ultrasound (EUS)', 'ERCP & Bile Duct Stenting', 'Ulcerative Colitis & Crohn’s', 'Fatty Liver Reversal'],
    education: [{ degree: 'DM Gastroenterology', institution: 'AIIMS New Delhi', year: '2008' }],
    experienceList: [{ role: 'Chief Gastroenterologist', hospital: 'Apex Care', period: '2015 – Present' }],
    certifications: ['American Society for Gastrointestinal Endoscopy Fellow'],
    publications: ['EUS-Guided Biliary Drainage Innovations (2022)']
  },
  {
    id: 'doc-priya-nair',
    name: 'Dr. Priya Nair',
    title: 'Senior Aesthetic & Clinical Dermatologist',
    qualification: 'MD (Dermatology, Venereology & Leprosy), Fellowship (USA)',
    specialtyId: 'dept-dermatology',
    specialtyName: 'Dermatology',
    experienceYears: 12,
    rating: 4.91,
    reviewCount: 264,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    hospitalIds: ['hosp-bengaluru-indira', 'hosp-coimbatore-city'],
    hospitalNames: ['Apex Care — Bengaluru', 'Apex Care — Coimbatore'],
    location: 'Bengaluru & Coimbatore',
    languages: ['English', 'Malayalam', 'Tamil', 'Hindi'],
    consultationFee: 1000,
    availability: 'today',
    nextAvailableSlot: 'Today at 04:00 PM',
    consultationTypes: ['in-person', 'video'],
    featured: false,
    about: 'Dr. Priya Nair provides state-of-the-art solution for skin conditions, laser therapy, acne scar revision, and hair regrowth treatments.',
    expertise: ['CO2 Laser Skin Resurfacing', 'PRP Hair Therapy', 'Psoriasis Biologics', 'Anti-aging Therapeutics'],
    education: [{ degree: 'MD Dermatology', institution: 'JIPMER Pondicherry', year: '2014' }],
    experienceList: [{ role: 'Consultant Dermatologist', hospital: 'Apex Care Skin & Laser Center', period: '2018 – Present' }],
    certifications: ['International Society of Dermatology Fellow'],
    publications: ['Fractional Photothermolysis for Severe Acne Scars (2021)']
  },
  {
    id: 'doc-farhan-khan',
    name: 'Dr. Farhan Khan',
    title: 'Lead Consultant — Pulmonology & Sleep Medicine',
    qualification: 'MD (Pulmonary Med), DTCD, FCCP (USA)',
    specialtyId: 'dept-pulmonology',
    specialtyName: 'Pulmonology',
    experienceYears: 15,
    rating: 4.86,
    reviewCount: 162,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    hospitalIds: ['hosp-hyderabad-jubilee'],
    hospitalNames: ['Apex Care — Hyderabad'],
    location: 'Hyderabad',
    languages: ['English', 'Urdu', 'Hindi', 'Telugu'],
    consultationFee: 1000,
    availability: 'tomorrow',
    nextAvailableSlot: 'Tomorrow at 02:30 PM',
    consultationTypes: ['in-person', 'video'],
    featured: false,
    about: 'Dr. Farhan Khan specializes in interventional pulmonology, asthma control, interstitial lung disease, and sleep-disordered breathing.',
    expertise: ['Endobronchial Ultrasound (EBUS)', 'Sleep Apnea Titration', 'Severe Asthma Biologics', 'Post-COVID Pulmonary Rehab'],
    education: [{ degree: 'MD Pulmonary Medicine', institution: 'Osmania Medical College', year: '2011' }],
    experienceList: [{ role: 'Consultant Pulmonologist', hospital: 'Apex Care Hospital', period: '2016 – Present' }],
    certifications: ['American College of Chest Physicians Fellow'],
    publications: ['Diagnostic Yield of EBUS-TBNA in Mediastinal Lymphadenopathy (2020)']
  },
  {
    id: 'doc-kavita-deshmukh',
    name: 'Dr. Kavita Deshmukh',
    title: 'Senior Consultant — Obstetrics & Laparoscopic Gynecology',
    qualification: 'MD, DGO, FICOG, Fellowship in Gynae-Laparoscopy',
    specialtyId: 'dept-gynecology',
    specialtyName: 'Gynecology',
    experienceYears: 20,
    rating: 4.96,
    reviewCount: 388,
    image: 'https://images.unsplash.com/photo-1594824813566-78a933f2f302?auto=format&fit=crop&q=80&w=800',
    hospitalIds: ['hosp-bengaluru-indira', 'hosp-chennai-main'],
    hospitalNames: ['Apex Care — Bengaluru', 'Apex Care — Chennai Central'],
    location: 'Bengaluru & Chennai',
    languages: ['English', 'Marathi', 'Hindi', 'Kannada'],
    consultationFee: 1100,
    availability: 'today',
    nextAvailableSlot: 'Today at 03:30 PM',
    consultationTypes: ['in-person', 'video'],
    featured: true,
    about: 'Dr. Kavita Deshmukh has safely delivered over 4,000 babies and specializes in high-risk pregnancies, PCOS management, and painless laparoscopic hysterectomy.',
    expertise: ['High-Risk Maternity Care', 'Laparoscopic Myomectomy & Hysterectomy', 'PCOS & Fertility Support', 'Menopause Management'],
    education: [{ degree: 'MD Obstetrics & Gynecology', institution: 'KEM Hospital, Mumbai', year: '2006' }],
    experienceList: [{ role: 'Senior Consultant Gynecologist', hospital: 'Apex Care Women Center', period: '2013 – Present' }],
    certifications: ['Indian College of Obstetricians and Gynecologists Fellow'],
    publications: ['Management of Gestational Diabetes in Urban Populations (2021)']
  },
  {
    id: 'doc-david-miller',
    name: 'Dr. David Miller',
    title: 'Consultant — ENT & Skull Base Specialist',
    qualification: 'MS (ENT), DLO (UK), Fellowship in Otology',
    specialtyId: 'dept-ent',
    specialtyName: 'ENT',
    experienceYears: 13,
    rating: 4.83,
    reviewCount: 142,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    hospitalIds: ['hosp-coimbatore-city'],
    hospitalNames: ['Apex Care — Coimbatore'],
    location: 'Coimbatore',
    languages: ['English', 'Tamil'],
    consultationFee: 950,
    availability: 'tomorrow',
    nextAvailableSlot: 'Tomorrow at 09:30 AM',
    consultationTypes: ['in-person', 'video'],
    featured: false,
    about: 'Dr. David Miller focuses on endoscopic sinus surgery, tympanoplasty, vertigo management, and snoring & sleep apnea surgical solutions.',
    expertise: ['Functional Endoscopic Sinus Surgery', 'Cochlear Implant Surgery', 'Micro Ear Surgery', 'Vertigo Assessment'],
    education: [{ degree: 'MS ENT', institution: 'Christian Medical College (CMC), Vellore', year: '2013' }],
    experienceList: [{ role: 'Consultant ENT Surgeon', hospital: 'Apex Care Coimbatore', period: '2017 – Present' }],
    certifications: ['Fellowship in Micro-Otology (UK)'],
    publications: ['Outcomes of Endoscopic Sinus Surgery in Recurrent Polyps (2019)']
  },
  {
    id: 'doc-shalini-verma',
    name: 'Dr. Shalini Verma',
    title: 'Consultant Urologist & Robotic Surgeon',
    qualification: 'MS (Gen Surg), M.Ch (Urology), DNB',
    specialtyId: 'dept-urology',
    specialtyName: 'Urology',
    experienceYears: 14,
    rating: 4.89,
    reviewCount: 167,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    hospitalIds: ['hosp-chennai-main', 'hosp-bengaluru-indira'],
    hospitalNames: ['Apex Care — Chennai Central', 'Apex Care — Bengaluru'],
    location: 'Chennai & Bengaluru',
    languages: ['English', 'Hindi', 'Tamil'],
    consultationFee: 1200,
    availability: 'today',
    nextAvailableSlot: 'Today at 05:30 PM',
    consultationTypes: ['in-person', 'video'],
    featured: false,
    about: 'Dr. Shalini Verma specializes in laser treatment of kidney stones (RIRS), Holmium laser prostate surgery (HoLEP), and reconstructive urology.',
    expertise: ['RIRS Laser Stone Removal', 'HoLEP Prostate Surgery', 'Robotic Pyeloplasty', 'Laparoscopic Nephrectomy'],
    education: [{ degree: 'M.Ch Urology', institution: 'Sanjay Gandhi PGIMS Lucknow', year: '2012' }],
    experienceList: [{ role: 'Consultant Urologist', hospital: 'Apex Care Hospital', period: '2016 – Present' }],
    certifications: ['Robotic Surgical Training (Intuitive Surgical)'],
    publications: ['Comparative Study of RIRS vs PCNL in 2cm Renal Calculi (2022)']
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: 'pkg-essential',
    title: 'Essential Health Checkup',
    subtitle: 'Comprehensive vital organ screening for preventive health monitoring.',
    category: 'wellness',
    price: 2499,
    originalPrice: 4500,
    discountPercentage: 44,
    testCount: 65,
    durationHours: '2 Hours',
    recommendedFor: 'Men & Women aged 18 to 45 years',
    fastingRequired: true,
    popular: false,
    includedTests: [
      { category: 'Haematology', tests: ['Complete Blood Count (CBC)', 'ESR', 'Peripheral Smear'] },
      { category: 'Diabetes Screen', tests: ['Fasting Blood Sugar (FBS)', 'HbA1c (3 Month Average)'] },
      { category: 'Lipid Profile', tests: ['Total Cholesterol', 'HDL', 'LDL', 'Triglycerides', 'VLDL'] },
      { category: 'Renal Function', tests: ['Serum Creatinine', 'Blood Urea Nitrogen', 'Uric Acid'] },
      { category: 'Liver Function', tests: ['SGOT', 'SGPT', 'Bilirubin Total & Direct', 'Alkaline Phosphatase'] },
      { category: 'Diagnostics & Consult', tests: ['12-Lead ECG', 'Chest X-Ray (PA View)', 'Senior Physician Consultation'] }
    ],
    prepInstructions: [
      'Fast for 10-12 hours overnight prior to sample collection. Water is permitted.',
      'Wear comfortable clothing suitable for chest X-ray and ECG.',
      'Bring previous medical records if any.'
    ]
  },
  {
    id: 'pkg-advanced-wellness',
    title: 'Advanced Master Health Check',
    subtitle: 'Exhaustive whole-body screening including thyroid, cardiac risk & ultrasound.',
    category: 'full-body',
    price: 4999,
    originalPrice: 9500,
    discountPercentage: 47,
    testCount: 88,
    durationHours: '3.5 Hours',
    recommendedFor: 'Adults aged 35+ seeking annual comprehensive screening',
    fastingRequired: true,
    popular: true,
    includedTests: [
      { category: 'Basic Vitals & CBC', tests: ['Complete Blood Count (CBC)', 'ESR', 'Blood Group & Rh'] },
      { category: 'Diabetes & Metabolism', tests: ['Fasting Blood Sugar', 'Post Prandial Sugar', 'HbA1c'] },
      { category: 'Thyroid Care', tests: ['TSH', 'Free T3', 'Free T4'] },
      { category: 'Advanced Cardiac Screen', tests: ['Lipid Profile', 'High-Sensitivity CRP (hs-CRP)', 'Treadmill Test (TMT / Stress Test)', 'ECG'] },
      { category: 'Imaging & Ultrasound', tests: ['Ultrasound Abdomen & Pelvis', 'Chest X-Ray'] },
      { category: 'Organ Profiles', tests: ['Complete Liver Profile', 'Complete Kidney Profile', 'Urine Routine & Micro'] },
      { category: 'Consultations', tests: ['Senior Physician Review', 'Dietary & Lifestyle Counseling'] }
    ],
    prepInstructions: [
      'Strict 12-hour fasting required.',
      'Avoid high-fat meals or alcohol 24 hours prior.',
      'Full bladder required for Ultrasound Abdomen.'
    ]
  },
  {
    id: 'pkg-cardiac-care',
    title: 'Executive Cardiac Wellness Package',
    subtitle: 'Specialized heart evaluation with Echo, TMT & Cardiac Biomarkers.',
    category: 'cardiac',
    price: 5999,
    originalPrice: 11000,
    discountPercentage: 45,
    testCount: 42,
    durationHours: '3 Hours',
    recommendedFor: 'Individuals with family history of heart disease, hypertension, or high stress',
    fastingRequired: true,
    popular: false,
    includedTests: [
      { category: 'Advanced Heart Diagnostics', tests: ['2D Echocardiography with Color Doppler', 'Treadmill Stress Test (TMT)', '12-Lead Digital ECG'] },
      { category: 'Cardiac Biomarkers', tests: ['hs-CRP', 'Lipoprotein (a)', 'Homocysteine Level', 'Apolipoprotein A1 & B'] },
      { category: 'Blood Sugar & Kidney', tests: ['HbA1c', 'Serum Creatinine', 'Electrolytes'] },
      { category: 'Expert Consultation', tests: ['Senior Cardiologist Consultation & Risk Stratification'] }
    ],
    prepInstructions: [
      'Overnight fasting of 10 hours.',
      'Do not take beta-blocker cardiac medication on test morning without consulting your doctor.',
      'Wear sports shoes and loose clothes for Treadmill Test.'
    ]
  },
  {
    id: 'pkg-women-health',
    title: 'Comprehensive Women Wellness',
    subtitle: 'Dedicated health assessment including Pap Smear, Mammogram/Ultrasound & Bone Density.',
    category: 'women',
    price: 5499,
    originalPrice: 10500,
    discountPercentage: 47,
    testCount: 75,
    durationHours: '3 Hours',
    recommendedFor: 'Women aged 30+ for hormonal, breast & gynecological evaluation',
    fastingRequired: true,
    popular: true,
    includedTests: [
      { category: 'Gynecological Care', tests: ['Pap Smear Test', 'Pelvic Ultrasound (TVS/TAS)', 'Gynecologist Consultation'] },
      { category: 'Breast Health', tests: ['Bilateral Mammogram (or Breast Ultrasound for <40 yrs)'] },
      { category: 'Hormones & Bone Care', tests: ['Vitamin D3', 'Vitamin B12', 'Serum Calcium', 'DEXA Bone Density Scan'] },
      { category: 'Full Organ Screen', tests: ['CBC', 'Thyroid Profile (T3, T4, TSH)', 'Diabetes Screen', 'Lipid & Liver Profile'] }
    ],
    prepInstructions: [
      'Schedule test 5 to 10 days after completion of menstrual period.',
      'Do not apply talcum powder, deodorant, or lotions on chest area on morning of mammogram.'
    ]
  },
  {
    id: 'pkg-senior-citizen',
    title: 'Senior Citizen Total Care (Gold)',
    subtitle: 'Tailored for seniors 60+ focusing on joint health, prostate/breast screen, and stroke risk.',
    category: 'senior',
    price: 6999,
    originalPrice: 13500,
    discountPercentage: 48,
    testCount: 92,
    durationHours: '4 Hours',
    recommendedFor: 'Senior citizens aged 60 and above',
    fastingRequired: true,
    popular: false,
    includedTests: [
      { category: 'Senior Vital Screens', tests: ['CBC', 'ESR', 'Full Lipid', 'Liver & Kidney Panel', 'HbA1c'] },
      { category: 'Cancer Markers', tests: ['PSA (Prostate Specific Antigen for Men) / CA-125 (for Women)'] },
      { category: 'Orthopedic & Nerve', tests: ['Vitamin D3', 'Vitamin B12', 'Serum Electrolytes', 'Uric Acid'] },
      { category: 'Cardiac & Vision', tests: ['2D Echo', 'ECG', 'Ophthalmology Eye & Glaucoma Check'] },
      { category: 'Consultations', tests: ['Senior Physician Review', 'Orthopedic Review', 'Geriatric Care Guidance'] }
    ],
    prepInstructions: [
      '12-hour fasting.',
      'Wheelchair assistance available at hospital entrance on request.'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-emergency',
    title: '24x7 Emergency & Critical Care',
    shortDesc: 'Immediate Level-1 trauma care with rapid response cardiac and stroke emergency units.',
    fullDesc: 'Apex Care Emergency Department operates around the clock with immediate triage, specialized trauma bays, advanced ventilator support, and direct access to cath labs and operating suites.',
    iconName: 'Ambulance',
    badge: '24/7 Available',
    features: ['Zero waiting triage protocol', 'Mobile ICU Ambulances with GPS tracking', 'On-call specialists across all medical fields'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'srv-diagnostics',
    title: 'Advanced Radiology & Imaging',
    shortDesc: 'Ultra-clear 3.0T MRI, 256-Slice CT, 3D Mammography, and PET-CT scan suites.',
    fullDesc: 'Delivering precision diagnostics with low radiation dose algorithms and instant digital radiology reporting accessible via patient portal.',
    iconName: 'Scan',
    features: ['3.0 Tesla Silent MRI', '256-Slice Dual Source Cardiac CT', 'Sub-second digital X-ray processing'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'srv-health-checkup',
    title: 'Preventive Health Checkups',
    shortDesc: 'Customized wellness checkup packages with dedicated fast-track lounges.',
    fullDesc: 'Tailored health packages designed to detect early signs of lifestyle diseases, heart ailments, and metabolic disorders in a comfortable setting.',
    iconName: 'HeartPulse',
    features: ['Same-day report delivery', 'Personalized physician consultation', 'Exclusive health check lounge'],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'srv-pharmacy',
    title: '24x7 In-House & Online Pharmacy',
    shortDesc: '100% authentic medications, cold-chain storage, and home delivery.',
    fullDesc: '24-hour hospital pharmacy stocking critical care meds, oncology drugs, surgical disposables, and prescription refilling.',
    iconName: 'Pill',
    badge: '24/7 Open',
    features: ['Strict temperature-controlled storage', 'Pharmacist consultation desk', 'Doorstep delivery within city limits'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'srv-ambulance',
    title: 'Advanced Life Support Ambulance',
    shortDesc: 'Mobile ICUs equipped with cardiac monitors, ventilators, and trained paramedics.',
    fullDesc: 'Rapid medical transport with live telemetry sending vital signs to hospital ER before ambulance arrival.',
    iconName: 'Truck',
    badge: 'Speed Dispatch',
    features: ['Telemetry connected to hospital ER', 'Dedicated neonatal transport incubator', 'Trained emergency medical technicians'],
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'srv-teleconsultation',
    title: 'HD Teleconsultation & Virtual Care',
    shortDesc: 'Consult top specialists from the comfort of your home with secure video call.',
    fullDesc: 'Seamless digital appointments, electronic prescription sharing, and follow-up reviews online.',
    iconName: 'Video',
    features: ['HIPAA-compliant encrypted video platform', 'Instant digital prescriptions', 'Easy document upload'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'srv-home-care',
    title: 'Apex Home Healthcare Services',
    shortDesc: 'Professional nursing, doctor visits, sample collection, and post-op care at home.',
    fullDesc: 'Bringing hospital-grade clinical care to your residence, including wound care, catheter management, and elderly monitoring.',
    iconName: 'Home',
    features: ['Certified ICU-trained home nurses', 'At-home lab blood collection', 'Medical equipment rental (Oxygen/BIPAP)'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'srv-physiotherapy',
    title: 'Rehabilitation & Physical Therapy',
    shortDesc: 'Advanced sports rehab, stroke recovery, and post-joint replacement therapy.',
    fullDesc: 'Equipped with hydrotherapy, electrotherapy, robotic gait trainers, and experienced physical therapists.',
    iconName: 'Activity',
    features: ['Robotic gait assistance', 'Customized post-surgical recovery plans', 'Ergonomic & posture correction'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'srv-nursing',
    title: 'Critical Care & ICU Services',
    shortDesc: 'Ultra-modern intensive care units with 1:1 dedicated patient-to-nurse ratio.',
    fullDesc: 'Comprehensive care for multi-organ failure, ARDS, septic shock, and post-cardiac surgery recovery.',
    iconName: 'Shield',
    features: ['Infection-controlled isolation rooms', 'HEPA-filtered air circulation', 'Continuous invasive monitoring'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'srv-laboratory',
    title: 'NABL Accredited Pathology Lab',
    shortDesc: 'Automated high-throughput analyzers delivering 99.9% accurate lab reports.',
    fullDesc: 'Full spectrum of diagnostic tests spanning microbiology, histopathology, molecular genetics, and hematology.',
    iconName: 'Microscope',
    features: ['Barcoded sample tracking', 'NABL & CAP quality certification', 'SMS download link for instant reports'],
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'srv-surgical',
    title: 'Robotic & Minimally Invasive Surgery',
    shortDesc: 'Precision surgeries with smaller incisions, less pain, and faster discharge.',
    fullDesc: 'Da Vinci and MAKO robotic systems for urology, gynecology, oncology, and orthopedic procedures.',
    iconName: 'Scissors',
    features: ['Sub-millimeter surgical accuracy', 'Reduced hospital stay', 'Minimal post-operative scarring'],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'srv-daycare',
    title: 'Daycare Surgical Pavilion',
    shortDesc: 'Same-day surgical procedures allowing patients to recover at home by evening.',
    fullDesc: 'Designed for laparoscopic hernia repair, cataract surgery, endoscopy, and minor orthopedic repairs.',
    iconName: 'Clock',
    features: ['Fast-track discharge lounge', 'Personalized home recovery guidelines', 'Dedicated daycare coordinator'],
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-warning-signs-heart',
    title: '10 Heart Warning Signs You Should Never Ignore',
    slug: '10-warning-signs-you-shouldnt-ignore',
    excerpt: 'Recognizing early symptoms of cardiac distress like chest tightness, unexplained shortness of breath, and Jaw pain can save lives.',
    content: `Heart disease remains one of the leading health challenges worldwide. While sudden chest pain is the most recognized sign of a heart attack, subtle symptoms often appear days or weeks before a major cardiac event.

### Key Symptoms to Monitor:
1. **Chest Discomfort or Pressure**: A feeling of fullness, squeezing, or pain in the center of your chest lasting more than a few minutes.
2. **Shortness of Breath**: Unexplained breathlessness during routine light activity or while resting.
3. **Pain Radiating to Arm or Jaw**: Discomfort that travels down the left arm, neck, back, or lower jaw.
4. **Cold Sweats & Lightheadedness**: Sudden breaking out in a cold sweat accompanied by dizziness.
5. **Unusual Fatigue**: Feeling exhausted without clear reason, especially common in women.

If you or a loved one experience these symptoms, contact Apex Care 24/7 Emergency Helpline (+91 44 2345 9999) immediately.`,
    category: 'Cardiology',
    author: 'Dr. Arjun Mehta',
    authorRole: 'Senior Consultant Cardiologist',
    authorImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200',
    date: 'August 04, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
    tags: ['Heart Health', 'Cardiology', 'Emergency Care', 'Preventive Health']
  },
  {
    id: 'art-prepare-cardiology-consult',
    title: 'How to Prepare for Your First Cardiology Consultation',
    slug: 'how-to-prepare-for-your-first-cardiology-consultation',
    excerpt: 'Essential tips on compiling medical records, listing medications, and preparing key questions for your specialist visit.',
    content: `Visiting a cardiologist for the first time can feel intimidating, but taking a few proactive steps can ensure your appointment is informative and efficient.

### What to Bring:
- **Medical History & Past ECGs**: Bring previous blood test results, Echo reports, and discharge summaries.
- **Medication List**: Write down all current prescription drugs, over-the-counter supplements, and dosages.
- **Family History**: Note any close relatives who have had high blood pressure, heart attacks, or stroke.
- **Symptom Log**: Track when your symptoms occur, how long they last, and what triggers them.`,
    category: 'Patient Guide',
    author: 'Apex Clinical Care Team',
    authorRole: 'Patient Education Advisory',
    authorImage: 'https://images.unsplash.com/photo-1594824813566-78a933f2f302?auto=format&fit=crop&q=80&w=200',
    date: 'July 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    tags: ['Doctor Visit', 'Patient Tips', 'Cardiology']
  },
  {
    id: 'art-understanding-preventive-checkups',
    title: 'Understanding Preventive Health Checkups: Why Annual Screening Matters',
    slug: 'understanding-preventive-health-checkups',
    excerpt: 'Discover how routine blood tests, organ profiles, and diagnostic scans detect silent conditions like hypertension and diabetes early.',
    content: `Preventive healthcare shifts the focus from treating illnesses after they develop to catching risk factors early before symptoms manifest.

### Why Routine Screening Saves Lives:
- **Detects Silent Conditions**: High blood pressure, high cholesterol, and fatty liver often show no symptoms in early stages.
- **Cost-Effective Healthcare**: Early intervention prevents expensive hospitalizations and complex treatments later.
- **Tailored Lifestyle Advice**: Diagnostic reports provide baseline metrics for nutrition and fitness plans.`,
    category: 'Wellness',
    author: 'Dr. Rajesh Sharma',
    authorRole: 'Director — Internal Medicine',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200',
    date: 'July 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    tags: ['Preventive Care', 'Wellness', 'Health Screening']
  }
];

export const TESTIMONIALS: PatientTestimonial[] = [
  {
    id: 'tst-1',
    name: 'Santhosh Kumar',
    age: 52,
    location: 'Chennai',
    treatment: 'Coronary Angioplasty',
    department: 'Cardiology',
    doctorName: 'Dr. Arjun Mehta',
    rating: 5,
    comment: 'The emergency response at Apex Care Chennai was phenomenal. When I experienced sudden chest pressure, their ER team completed my ECG and transferred me to the cath lab in under 20 minutes. Dr. Arjun Mehta explained everything calmly to my family. I am back to work feeling healthy.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    date: '2 weeks ago',
    verified: true
  },
  {
    id: 'tst-2',
    name: 'Radhika Swaminathan',
    age: 61,
    location: 'Bengaluru',
    treatment: 'Robotic Knee Replacement',
    department: 'Orthopedics',
    doctorName: 'Dr. Rajesh Sharma',
    rating: 5,
    comment: 'After suffering from severe osteoarthritis for 5 years, I opted for robotic knee replacement under Dr. Rajesh Sharma. I was able to walk with support on the very evening of my surgery! The nursing staff and rehab team in Bengaluru were incredibly attentive.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    date: '1 month ago',
    verified: true
  },
  {
    id: 'tst-3',
    name: 'Venkatesh Rao',
    age: 44,
    location: 'Hyderabad',
    treatment: 'Kidney Stone Laser (RIRS)',
    department: 'Urology',
    doctorName: 'Dr. Shalini Verma',
    rating: 5,
    comment: 'I was admitted for an 11mm kidney stone. Dr. Shalini performed a laser RIRS procedure with zero incision. Discharged the next morning without any discomfort. Very transparent booking process and insurance desk approval.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    date: '3 weeks ago',
    verified: true
  },
  {
    id: 'tst-4',
    name: 'Priya & Rahul Deshmukh',
    age: 34,
    location: 'Bengaluru',
    treatment: 'Maternity & Childbirth',
    department: 'Pediatrics & Gynecology',
    doctorName: 'Dr. Kavita Deshmukh',
    rating: 5,
    comment: 'Delivering our baby girl at Apex Care Indiranagar was a dream experience. Dr. Kavita Deshmukh made the labor process comfortable and painless. The birthing suites are pristine and feel like a high-end luxury resort.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    date: '1 month ago',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'booking',
    question: 'How do I book an appointment with a specialist?',
    answer: 'You can book an appointment instantly through our online platform by clicking "Book Appointment", searching for your preferred doctor or specialty, selecting an available date and time slot, and filling in basic patient details. Alternatively, you can call our 24/7 helpline.'
  },
  {
    id: 'faq-2',
    category: 'booking',
    question: 'Can I choose a specific doctor and hospital location?',
    answer: 'Yes! Our doctor finder allows you to filter specialists by location, experience, languages spoken, consultation type (In-person or Video), and date availability.'
  },
  {
    id: 'faq-3',
    category: 'booking',
    question: 'Can I reschedule or cancel my appointment?',
    answer: 'Yes, appointments can be rescheduled or cancelled up to 2 hours prior to the scheduled time without any fee. You will receive an SMS and email notification confirming the update.'
  },
  {
    id: 'faq-4',
    category: 'teleconsult',
    question: 'Do you offer online video consultations?',
    answer: 'Yes. Select "Video Consultation" during booking. You will receive a secure video call link on your registered mobile number and email. Digital prescriptions are issued immediately after the call.'
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'What documents should I bring for my hospital visit?',
    answer: 'Please bring a valid Government ID (Aadhaar, Passport, or Driving License), your appointment reference number (e.g., APT-2026-XXXXX), previous medical reports/X-rays, and insurance card if applicable.'
  },
  {
    id: 'faq-6',
    category: 'insurance',
    question: 'Which health insurance providers are accepted at Apex Care?',
    answer: 'We accept cashless facility for over 45 major health insurance companies and TPAs including Star Health, HDFC ERGO, ICICI Lombard, Niva Bupa, SBI General, and Bajaj Allianz. Our dedicated insurance helpdesk assists with authorization.'
  },
  {
    id: 'faq-7',
    category: 'emergency',
    question: 'Are emergency and trauma services available 24/7?',
    answer: 'Yes. Our emergency room and Level-1 trauma centers across all Apex Care hospital branches operate 24 hours a day, 365 days a year with on-duty emergency physicians, trauma surgeons, and mobile ICU ambulances.'
  },
  {
    id: 'faq-8',
    category: 'general',
    question: 'What are the patient visiting hours?',
    answer: 'General Ward & Private Room Visiting Hours: Morning 10:00 AM to 12:00 PM | Evening 4:30 PM to 7:00 PM. ICU visiting hours are strictly restricted to 11:00 AM to 11:30 AM and 5:00 PM to 5:30 PM (one visitor at a time).'
  }
];

export const STATS = [
  { label: 'Years of Excellence', value: 25, suffix: '+' },
  { label: 'Specialist Doctors', value: 150, suffix: '+' },
  { label: 'Medical Departments', value: 30, suffix: '+' },
  { label: 'Patients Served', value: 500, suffix: 'K+' },
  { label: 'Emergency Care', value: 24, suffix: '/7' }
];

export const POPULAR_SEARCHES = [
  'Cardiologist',
  'Dermatologist',
  'Orthopedic',
  'Pediatrician',
  'Neurologist',
  'Gynecologist',
  'Full Body Checkup'
];
