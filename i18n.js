// ===================================
// MULTILINGUAL SUPPORT (i18n)
// Languages: English, Myanmar
// ===================================

const translations = {
    en: {
        'nav-about': 'About',
        'nav-gallery': 'Gallery',
        'nav-infrastructure': 'Infrastructure',
        'nav-timeline': 'Timeline',
        'nav-impact': 'Impact',
        'nav-success': 'Success',
        'nav-future': 'Future',
        'nav-contact': 'Contact',

        // Hero
        'hero-title': 'Empowering Karenni Communities Through Digital Education',
        'hero-subtitle': 'Myanmar Humanitarian Fund (UNOCHA) supported project bringing offline-first learning to remote areas with 20+ Raspberry Pi units, 300 tablets, and sustainable solar infrastructure',
        'stat-raspberry': 'Raspberry Pi Units',
        'stat-tablets': 'Tablets',
        'stat-hubs': 'Starlink Hubs',
        'hero-cta': 'Download Full Report',

        // About
        'about-title': 'About the Project',
        'about-p1': 'The Fortitude Learning Box is a Myanmar Humanitarian Fund (UNOCHA) supported initiative designed to bridge the digital divide in Karenni communities. Our mission is to provide accessible, offline-first digital education solutions to remote areas where traditional internet connectivity is limited or unavailable.',
        'about-p2': 'Through innovative use of Raspberry Pi technology, solar power, and satellite connectivity, we\'ve established three learning centers serving hundreds of students with comprehensive educational resources including textbooks, interactive courses, audio books, and multimedia content.',
        'about-p3': 'Future expansion and digital education improvements require significant budget investment. We are seeking additional funding support to scale operations, develop localized content, and enhance infrastructure across more communities.',

        // Gallery
        'gallery-title': 'Photo Gallery',
        'gallery-subtitle': 'Capturing moments of learning, growth, and community impact',
        'filter-all': 'All',
        'filter-students': 'Students Learning',
        'filter-community': 'Community',
        'filter-technology': 'Technology',
        'filter-impact': 'Impact',

        // Infrastructure
        'infra-title': 'Technical Infrastructure',
        'infra-subtitle': 'Sustainable, scalable technology for offline-first education',
        'infra-rpi-title': '20+ Raspberry Pi Units',
        'infra-rpi-desc': 'Raspberry Pi 4 (4GB RAM) serving as local content servers, running Moodle LMS and hosting educational resources offline',
        'infra-tablets-title': '300 Android Tablets',
        'infra-tablets-desc': 'Offline-capable tablets distributed to students for accessing educational content, textbooks, and interactive courses',
        'infra-solar-title': 'Solar Power Systems',
        'infra-solar-desc': 'Off-grid solar panel arrays providing sustainable, reliable power for all equipment in remote locations',
        'infra-wifi-title': 'WiFi Mesh Network',
        'infra-wifi-desc': 'Local WiFi routers creating mesh networks for device connectivity within learning centers',
        'infra-starlink-title': '3 Starlink Hubs',
        'infra-starlink-desc': 'Satellite internet connectivity for content updates and remote support across three learning centers',
        'infra-content-title': 'Comprehensive Content Library',
        'infra-content-desc': 'Textbooks (KG-Grade 12), comics, audio books, Moodle courses, and multimedia educational resources',
        'infra-arch-title': 'System Architecture',

        // Timeline
        'timeline-title': 'Project Timeline',
        'phase1-date': 'Q1 2025',
        'phase1-title': 'Phase 1: Project Initiation',
        'phase1-desc': 'Needs assessment, community consultations, team formation, and initial resource planning with EU funding approval',
        'phase2-date': 'Q2 2025',
        'phase2-title': 'Phase 2: Infrastructure Deployment',
        'phase2-desc': 'Procurement and installation of 20+ Raspberry Pi units, 300 tablets, solar panels, WiFi routers, and Starlink systems',
        'phase3-date': 'Q3 2025',
        'phase3-title': 'Phase 3: Content Curation & LMS Setup',
        'phase3-desc': 'Gathering textbooks, developing audio content, configuring Moodle LMS, and creating offline-accessible educational resources',
        'phase4-date': 'Q4 2025',
        'phase4-title': 'Phase 4: Pilot Deployment',
        'phase4-desc': 'Initial rollout to 3 learning centers, teacher training, student onboarding, and feedback collection',
        'phase5-date': 'Q1 2026',
        'phase5-title': 'Phase 5: Evaluation & Expansion',
        'phase5-desc': 'Impact assessment, scaling to additional communities, continuous content updates, and sustainability planning',

        // Impact
        'impact-title': 'Project Impact',
        'impact-students': 'Students Reached',
        'impact-centers': 'Learning Centers',
        'impact-resources': 'Educational Resources',
        'impact-renewable': 'Renewable Energy',

        // Impact Details
        'impact-details-title': 'Measurable Impact & Outcomes',
        'metric-completion': 'Course Completion Rate',
        'metric-completion-desc': 'Students successfully completing digital literacy courses',
        'metric-hours': 'Learning Hours',
        'metric-hours-desc': 'Total hours of educational content accessed',
        'metric-teachers': 'Trained Teachers',
        'metric-teachers-desc': 'Educators trained in digital teaching methods',
        'metric-satisfaction': 'Satisfaction Rate',
        'metric-satisfaction-desc': 'Students and parents reporting positive outcomes',

        // Success Stories
        'success-title': 'Success Stories',
        'success-subtitle': 'Real impact on real lives - transforming education in Karenni communities',
        'badge-student': 'Student',
        'badge-teacher': 'Teacher',
        'badge-community': 'Community',
        'story1-title': 'From Zero to Digital Literacy',
        'story1-quote': '"Before the Fortitude Learning Box, I had never used a computer. Now I can access textbooks, watch educational videos, and even help my younger siblings with their homework. This has opened up a whole new world for me."',
        'story1-author': '- Naw Paw, 16-year-old student',
        'story1-impact1': 'Completed 15 courses',
        'story1-impact2': 'Improved grades by 40%',
        'story2-title': 'Empowering Educators with Technology',
        'story2-quote': '"The Fortitude Learning Box has revolutionized how I teach. With access to multimedia content and interactive courses, I can make lessons more engaging. Even without internet, we have everything we need."',
        'story2-author': '- Teacher Saw Htoo, Learning Center Coordinator',
        'story2-impact1': 'Trained 45 teachers',
        'story2-impact2': 'Created 50+ lesson plans',
        'story3-title': 'Bridging the Digital Divide',
        'story3-quote': '"Our village was completely cut off from digital education. The solar-powered learning center has become the heart of our community. Children come here every day, and parents see real hope for their children\'s future."',
        'story3-author': '- Community Leader, Mae La Oon Camp',
        'story3-impact1': '3 villages connected',
        'story3-impact2': '500+ families benefited',

        // Future Innovations
        'future-title': 'Future Innovations & Enhancements',
        'future-subtitle': 'Pioneering the next generation of offline-first education technology',
        'innovation1-title': '360ed Platform Integration',
        'innovation1-desc': 'Currently integrated with 360ed learning management system providing comprehensive course management, student tracking, and standardized educational content aligned with national curriculum across all tablets.',
        'innovation1-timeline': 'Currently Implemented',
        'innovation2-title': 'Local Language Integration',
        'innovation2-desc': 'Developing educational content in Karenni and other ethnic minority languages to preserve cultural identity while providing quality education in mother tongue languages.',
        'innovation2-timeline': '2027-2029',
        'innovation3-title': 'Offline Examination System',
        'innovation3-desc': 'Comprehensive offline examination and assessment system currently in use through the Learning Box, enabling students to take standardized tests and receive certifications without internet dependency.',
        'innovation3-timeline': 'Currently In Use',
        'innovation4-title': 'Community Equipment Donation',
        'innovation4-desc': 'After project completion, all Raspberry Pi units, tablets, solar panels, and infrastructure will be donated to local communities for continued educational use and community ownership.',
        'innovation4-timeline': 'Post-2026',
        'innovation5-title': 'Expanded Connectivity',
        'innovation5-desc': 'Scaling to 10 additional learning centers with enhanced Starlink connectivity, reaching 2,000+ students across remote Karenni regions.',
        'innovation5-timeline': '2027-2030',
        'innovation6-title': 'Future Enhancement Budget',
        'innovation6-desc': 'Significant budget requirements needed for scaling operations, content development, and infrastructure expansion. Local communities will require external funding support for continued enhancements.',
        'innovation6-timeline': 'Ongoing',

        // Sustainability
        'sustainability-title': 'Long-term Sustainability',
        'sustain1-title': 'Local Capacity Building',
        'sustain1-desc': 'Training local technicians and educators to maintain and expand the system independently',
        'sustain2-title': 'Renewable Energy',
        'sustain2-desc': '100% solar-powered infrastructure with battery backup for 24/7 operation',
        'sustain3-title': 'Community Ownership',
        'sustain3-desc': 'Transferring management to local communities for long-term stewardship',
        'sustain4-title': 'Diverse Funding',
        'sustain4-desc': 'Securing partnerships with NGOs, governments, and private sector for continued support',
        'sustain5-title': 'Curriculum Development',
        'sustain5-desc': 'Continuous development of culturally relevant educational content aligned with national standards and local needs',
        'sustain6-title': 'Teacher Training Programs',
        'sustain6-desc': 'Ongoing professional development for educators in digital pedagogy and offline-first teaching methodologies',
        'sustain7-title': 'Student Assessment Systems',
        'sustain7-desc': 'Implementing continuous assessment and progress tracking to ensure quality education outcomes and student success',
        'sustain8-title': 'Community Learning Centers',
        'sustain8-desc': 'Establishing permanent learning centers that serve as educational hubs for lifelong learning and community development',

        // Transparency
        'transparency-title': 'Financial Transparency & Accountability',
        'transparency-subtitle': 'Your investment, our commitment to transparency',
        'budget-title': 'Budget Allocation',
        'budget-infrastructure': 'Infrastructure & Equipment',
        'budget-content': 'Content Development',
        'budget-training': 'Training & Capacity Building',
        'budget-operations': 'Operations & Maintenance',
        'roi-title': 'Return on Investment',
        'roi-per-student': 'Cost per student per year',
        'roi-ratio': 'Social return on investment ratio',
        'roi-lifespan': 'Expected infrastructure lifespan',
        'reporting-title': 'Regular Reporting',
        'report-quarterly': 'Quarterly progress reports',
        'report-annual': 'Annual financial audits',
        'report-impact': 'Impact assessment studies',
        'report-visits': 'Donor site visit opportunities',
        'report-dashboard': 'Real-time monitoring dashboard',

        // Report
        'report-title': 'Project Documentation',
        'report-subtitle': 'Download comprehensive reports and presentations',
        'report-pdf-title': 'Fortitude Learning Box Report v2',
        'report-pdf-desc': 'Detailed project report with impact metrics, technical specifications, and evaluation results',
        'report-download': 'Download PDF',

        // Contact Us
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Get in touch for partnerships, funding opportunities, or project inquiries',
        'contact-funding-title': 'Funding Requirements',
        'contact-funding-desc': 'We require significant budget investment to expand digital education infrastructure, develop localized content, and scale operations to reach more communities across Myanmar.',
        'contact-partnership-title': 'Partnership Opportunities',
        'contact-partnership-desc': 'Collaborate with us to bring sustainable digital education solutions to underserved communities. We welcome NGOs, governments, and private sector partners.',
        'contact-info-title': 'Project Information',
        'contact-info-desc': 'Learn more about our offline-first learning approach, technical infrastructure, and community impact. We\'re happy to share our experience and insights.',
        'form-name': 'Name *',
        'form-email': 'Email *',
        'form-organization': 'Organization',
        'form-subject': 'Subject *',
        'form-select': 'Select a subject',
        'form-funding': 'Funding Opportunity',
        'form-partnership': 'Partnership Inquiry',
        'form-technical': 'Technical Information',
        'form-general': 'General Inquiry',
        'form-message': 'Message *',
        'form-submit': 'Send Message',

        // Footer
        'footer-privacy': 'Privacy Policy',
        'footer-accessibility': 'Accessibility',
        'footer-rights': 'All Rights Reserved.',

        // Cookie
        'cookie-message': 'This website uses cookies to ensure you get the best experience. By continuing to use this site, you accept our use of cookies.',
        'cookie-accept': 'Accept',
        'cookie-decline': 'Decline'
    },

    my: {
        // Myanmar translations (key sections)
        'nav-about': 'အကြောင်း',
        'nav-gallery': 'ဓာတ်ပုံများ',
        'nav-infrastructure': 'အခြေခံအဆောက်အအုံ',
        'nav-timeline': 'အချိန်ဇယား',
        'nav-impact': 'သက်ရောက်မှု',
        'nav-success': 'အောင်မြင်မှု',
        'nav-future': 'အနာဂတ်',
        'nav-report': 'အစီရင်ခံစာ',

        'hero-title': 'ကရင်နီလူမျိုးစုများကို ဒစ်ဂျစ်တယ်ပညာရေးဖြင့် စွမ်းဆောင်ရည်မြှင့်တင်ခြင်း',
        'hero-subtitle': 'EU ရန်ပုံငွေဖြင့် အဝေးဒေသများတွင် 20+ Raspberry Pi ယူနစ်များ၊ 300 တက်ဘလက်များနှင့် ရေရှည်တည်တံ့သော နေရောင်ခြည်စွမ်းအင်အခြေခံအဆောက်အအုံဖြင့် အော့ဖ်လိုင်းပညာသင်ကြားမှုကို ယူဆောင်လာခြင်း',
        'stat-raspberry': 'Raspberry Pi ယူနစ်များ',
        'stat-tablets': 'တက်ဘလက်များ',
        'stat-hubs': 'Starlink ဟပ်များ',
        'hero-cta': 'အစီရင်ခံစာအပြည့်အစုံ ဒေါင်းလုဒ်လုပ်ရန်',

        'about-title': 'ပရောဂျက်အကြောင်း',
        'gallery-title': 'ဓာတ်ပုံပြခန်း',
        'gallery-subtitle': 'သင်ယူမှု၊ ဖွံ့ဖြိုးတိုးတက်မှုနှင့် လူမှုအသိုင်းအဝိုင်းသက်ရောက်မှုများကို မှတ်တမ်းတင်ခြင်း',
        'filter-all': 'အားလုံး',
        'filter-students': 'ကျောင်းသားများသင်ယူနေမှု',
        'filter-community': 'လူမှုအသိုင်းအဝိုင်း',
        'filter-technology': 'နည်းပညာ',
        'filter-impact': 'သက်ရောက်မှု',

        'infra-title': 'နည်းပညာအခြေခံအဆောက်အအုံ',
        'infra-subtitle': 'အော့ဖ်လိုင်းပညာရေးအတွက် ရေရှည်တည်တံ့၍ တိုးချဲ့နိုင်သော နည်းပညာ',
        'timeline-title': 'ပရောဂျက်အချိန်ဇယား',
        'impact-title': 'ပရောဂျက်သက်ရောက်မှု',
        'success-title': 'အောင်မြင်မှုဇာတ်လမ်းများ',
        'future-title': 'အနာဂတ်ဆန်းသစ်တီထွင်မှုများ',
        'transparency-title': 'ဘဏ္ဍာရေးပွင့်လင်းမြင်သာမှုနှင့် တာဝန်ခံမှု',
        'report-title': 'ပရောဂျက်စာရွက်စာတမ်းများ'
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'en';

// Initialize i18n
function initI18n() {
    // Set initial language
    updateLanguage(currentLang);

    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            updateLanguage(lang);
        });
    });
}

// Update language
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'my' ? 'my' : 'en';
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}
