/* ========================================
   CODENEST - VANILLA JAVASCRIPT
   Modern, clean, production-ready JS
   Kétnyelvű támogatás (HU/EN)
   ======================================== */

   (function() {
    'use strict';

    /* ========================================
       TRANSLATIONS - FORDÍTÁSI TÁR
       ======================================== */
    
    const translations = {
        en: {
            // Meta
            pageTitle: 'CodeNest - Define · Develop · Deliver',
            pageDescription: 'Professional websites and digital solutions built for measurable business impact.',
            
            // Navigation
            navHome: 'Home',
            navServices: 'Services',
            navPortfolio: 'Portfolio',
            navTeam: 'Team',
            navContact: 'Contact',
            langEn: 'EN',
            langHu: 'HU',
            getQuote: 'Get Quote',
            shareFeedback: 'Share Feedback',
            
            // Hero
            heroBadge: 'CodeNest Agency',
            heroTitle: 'Define · Develop · Deliver',
            heroSubtitle: 'Professional websites and digital solutions — built for measurable business impact.',
            ctaPrimary: 'Get a Quote',
            ctaSecondary: 'Portfolio',
            ctaFeedback: 'Share Your Opinion',
            statProjects: '150+',
            statSatisfaction: '98%',
            statExperience: '5+',
            statProjectsLabel: 'Projects',
            statSatisfactionLabel: 'Satisfaction',
            statExperienceLabel: 'Years Exp.',
            
            // Process
            processTitle: 'The Process',
            processSubtitle: 'From concept to launch in three simple steps',
            step1Title: 'DEFINE',
            step1Desc: 'Requirement analysis, UX planning, tech decisions',
            step2Title: 'DEVELOP',
            step2Desc: 'React, Next.js, Node.js – fast optimized code',
            step3Title: 'DELIVER',
            step3Desc: 'SEO setup, analytics, support',
            
            // Services
            servicesTitle: 'Services',
            servicesSubtitle: 'Complete digital solutions in one place',
            service1Title: 'Website Development',
            service1Desc: 'Modern, responsive websites that convert. From landing pages to corporate sites.',
            service2Title: 'Web Applications',
            service2Desc: 'Custom web applications built with React and Node.js stack, scalable architecture.',
            // E-commerce entries removed per request
            service4Title: 'UI/UX Design',
            service4Desc: 'User-centered design, Figma prototypes and design systems.',
            service5Title: 'Maintenance & Support',
            service5Desc: 'Ongoing technical support, updates and optimization for maximum performance.',
            
            // Portfolio
            portfolioTitle: 'Portfolio',
            portfolioSubtitle: 'Successful projects that brought real results to our clients',
            featuredBadge: 'Featured Project',
            featuredTitle: 'TechStore E-commerce Platform',
            featuredDesc: 'Complete e-commerce solution for electronics. The platform resulted in 300% growth in online sales, with modern payment solutions and real-time inventory management.',
            viewProject: 'View Project',
            categoryEcommerce: 'E-commerce',
            categoryWebApp: 'Web Application',
            categoryHealthcare: 'Healthcare',
            categoryMarketing: 'Marketing Site',
            categoryHospitality: 'Hospitality',
            categoryRealEstate: 'Real Estate',
            categorySport: 'Sport & Health',
            
            // Team
            teamTitle: 'Our Team',
            teamSubtitle: 'Experienced professionals who are passionate about creating the best digital solutions. Behind every project are skilled developers, designers and project managers.',
            markKovacs: 'Márk Kovács',
            annaSzabo: 'Anna Szabó',
            davidNagy: 'Dávid Nagy',
            eszterToth: 'Eszter Tóth',
            roleFrontend: 'Frontend Developer',
            roleBackend: 'Backend Developer',
            roleDesigner: 'UI/UX Designer',
            rolePM: 'Project Manager',
            
            // Why Choose Us
            whyTitle: 'Why Choose Us?',
            whySubtitle: 'What makes us stand out in the market',
            why1Title: 'Fast Delivery',
            why1Desc: 'Efficient agile workflow that guarantees project delivery on time.',
            why2Title: 'Measurable Impact',
            why2Desc: 'Every project is built for measurable business results: growth, conversion, revenue.',
            why3Title: 'Modern Tech Stack',
            why3Desc: 'Latest and most reliable technologies: React, Next.js, Node.js, TypeScript.',
            why4Title: 'International Cooperation',
            why4Desc: 'Hungarian and English support, experience in international projects.',
            statsCompleted: 'Completed Projects',
            statsClients: 'Happy Clients',
            statsRate: 'Satisfaction Rate',
            statsSupport: 'Support',
            
            // CTA / Contact
            ctaTitle: 'Ready to start your project?',
            ctaSubtitle: 'Get in touch with us and let\'s discuss how we can help grow your business digitally.',
            emailLabel: 'Email',
            emailValue: 'info.codenest.hu@gmail.com',
            phoneLabel: 'Phone',
            phoneValue: '+36 30 123 4567',
            formName: 'Name',
            formEmail: 'Email',
            formProject: 'Project type',
            formMessage: 'Message',
            formPlaceholderName: 'Full name',
            formPlaceholderEmail: 'email@example.com',
            formPlaceholderMessage: 'Tell us about your project...',
            formSelectService: 'Select a service',
            formSubmit: 'Get a Quote',
            website: 'Website Development',
            webapp: 'Web Application',
            ecommerce: 'E-commerce',
            design: 'UI/UX Design',
            maintenance: 'Maintenance',
            
            // Footer
            footerDescription: 'Professional websites and digital solutions — built for measurable business impact.',
            footerServices: 'Services',
            footerCompany: 'Company',
            footerLegal: 'Legal',
            imprint: 'Imprint / Impresszum',
            privacy: 'Privacy Policy',
            gdpr: 'GDPR',
            terms: 'Terms of Service',
            copyright: '© 2025 CodeNest. All rights reserved.',
            english: 'Switch to English',
            hungarian: 'Magyarra váltás'
        },
        hu: {
            // Meta
            pageTitle: 'CodeNest - Definiáljuk · Fejlesztjük · Leszállítjuk',
            pageDescription: 'Professzionális weboldalak és digitális megoldások — mérhető üzleti hatásért építve.',
            
            // Navigation
            navHome: 'Főoldal',
            navServices: 'Szolgáltatások',
            navPortfolio: 'Portfólió',
            navTeam: 'Csapat',
            navContact: 'Kapcsolat',
            langEn: 'EN',
            langHu: 'HU',
            getQuote: 'Árajánlat',
            shareFeedback: 'Visszajelzés',
            
            // Hero
            heroBadge: 'CodeNest Ügynökség',
            heroTitle: 'Definiáljuk · Fejlesztjük · Leszállítjuk',
            heroSubtitle: 'Professzionális weboldalak és digitális megoldások — mérhető üzleti hatásért építve.',
            ctaPrimary: 'Árajánlat kérése',
            ctaSecondary: 'Portfólió',
            ctaFeedback: 'Oszd meg velünk véleményed',
            statProjects: '150+',
            statSatisfaction: '98%',
            statExperience: '5+',
            statProjectsLabel: 'Projekt',
            statSatisfactionLabel: 'Elégedettség',
            statExperienceLabel: 'Év tap.',
            
            // Process
            processTitle: 'A Folyamat',
            processSubtitle: 'Koncepttől a launchig három egyszerű lépésben',
            step1Title: 'DEFINIÁLÁS',
            step1Desc: 'Követelményelemzés, UX tervezés, technológiai döntések',
            step2Title: 'FEJLESZTÉS',
            step2Desc: 'React, Next.js, Node.js — gyors, optimalizált kód',
            step3Title: 'LESZÁLLÍTÁS',
            step3Desc: 'SEO beállítás, analitika, támogatás',
            
            // Services
            servicesTitle: 'Szolgáltatások',
            servicesSubtitle: 'Teljes körű digitális megoldások egy helyen',
            service1Title: 'Weboldal Fejlesztés',
            service1Desc: 'Modern, reszponzív weboldalak, amelyek konvertálnak. Landing page-ektől a vállalati oldalakig.',
            service2Title: 'Webalkalmazások',
            service2Desc: 'Egyedi webalkalmazások React és Node.js stackkel, skálázható architektúra.',
            service3Title: 'E-commerce Fejlesztés',
            service3Desc: 'Teljes körű e-commerce megoldások integrált fizetési és készletkezelési rendszerekkel.',
            service4Title: 'UI/UX Tervezés',
            service4Desc: 'Felhasználóközpontú tervezés, Figma prototípusok és design rendszerek.',
            service5Title: 'Karbantartás & Támogatás',
            service5Desc: 'Folyamatos technikai támogatás, frissítések és optimalizálás a maximális teljesítményért.',
            
            // Portfolio
            portfolioTitle: 'Portfólió',
            portfolioSubtitle: 'Sikeres projektek, amelyek valódi eredményt hoztak ügyfeleinknek',
            featuredBadge: 'Kiemelt Projekt',
            featuredTitle: 'TechStore E-commerce Platform',
            featuredDesc: 'Teljes körű e-commerce megoldás elektronikai termékekhez. A platform 300%-os online értékesítés-növekedést eredményezett, modern fizetési megoldásokkal és valós idejű készletkezeléssel.',
            viewProject: 'Projekt megtekintése',
            categoryEcommerce: 'E-commerce',
            categoryWebApp: 'Webalkalmazás',
            categoryHealthcare: 'Egészségügy',
            categoryMarketing: 'Marketing Oldal',
            categoryHospitality: 'Vendéglátás',
            categoryRealEstate: 'Ingatlan',
            categorySport: 'Sport & Egészség',
            
            // Team
            teamTitle: 'Csapatunk',
            teamSubtitle: 'Tapasztalt szakemberek, akik szenvedélyesek a legjobb digitális megoldások létrehozásában. Minden projekt mögött képzett fejlesztők, tervezők és projektmenedzserek állnak.',
            markKovacs: 'Kovács Márk',
            annaSzabo: 'Szabó Anna',
            davidNagy: 'Nagy Dávid',
            eszterToth: 'Tóth Eszter',
            roleFrontend: 'Frontend Fejlesztő',
            roleBackend: 'Backend Fejlesztő',
            roleDesigner: 'UI/UX Tervező',
            rolePM: 'Projektmenedzser',
            
            // Why Choose Us
            whyTitle: 'Miért minket válassz?',
            whySubtitle: 'Mi különböztet meg minket a piacon',
            why1Title: 'Gyors Szállítás',
            why1Desc: 'Hatékony agilis munkafolyamat, amely garantálja a projekt időben történő leszállítását.',
            why2Title: 'Mérhető Hatás',
            why2Desc: 'Minden projekt mérhető üzleti eredményekért készül: növekedés, konverzió, bevétel.',
            why3Title: 'Modern Tech Stack',
            why3Desc: 'A legújabb és legmegbízhatóbb technológiák: React, Next.js, Node.js, TypeScript.',
            why4Title: 'Nemzetközi Együttműködés',
            why4Desc: 'Magyar és angol nyelvű támogatás, tapasztalat nemzetközi projektekben.',
            statsCompleted: 'Befejezett Projekt',
            statsClients: 'Elégedett Ügyfél',
            statsRate: 'Elégedettségi Ráta',
            statsSupport: 'Támogatás',
            
            // CTA / Contact
            ctaTitle: 'Készen állsz elkezdeni a projekted?',
            ctaSubtitle: 'Vedd fel velünk a kapcsolatot és beszéljük meg, hogyan segíthetünk digitálisan növelni üzleti sikereidet.',
            emailLabel: 'Email',
            emailValue: 'info.codenest.hu@gmail.com',
            phoneLabel: 'Telefon',
            phoneValue: '+36 30 123 4567',
            formName: 'Név',
            formEmail: 'Email',
            formProject: 'Projekt típusa',
            formMessage: 'Üzenet',
            formPlaceholderName: 'Teljes név',
            formPlaceholderEmail: 'email@pelda.hu',
            formPlaceholderMessage: 'Mesélj a projektedről...',
            formSelectService: 'Válassz szolgáltatást',
            formSubmit: 'Árajánlat kérése',
            website: 'Weboldal Fejlesztés',
            webapp: 'Webalkalmazás',
            ecommerce: 'E-commerce',
            design: 'UI/UX Tervezés',
            maintenance: 'Karbantartás',
            
            // Footer
            footerDescription: 'Professzionális weboldalak és digitális megoldások — mérhető üzleti hatásért építve.',
            footerServices: 'Szolgáltatások',
            footerCompany: 'Cég',
            footerLegal: 'Jogi',
            imprint: 'Impresszum',
            privacy: 'Adatvédelmi Irányelvek',
            gdpr: 'GDPR',
            terms: 'Általános Szerződési Feltételek',
            copyright: '© 2025 CodeNest. Minden jog fenntartva.',
            english: 'English',
            hungarian: 'Magyar'
        }
    };

    /* ========================================
       I18N - INTERNATIONALIZATION
       ======================================== */
    
    let currentLang = 'en'; // Alapértelmezett - MINDIG ANGOL!

    // Nyelv lekérése localStorage-ból CSAK ha korábban valaki felhasználó módosította
    function detectLanguage() {
        // CSAK a localStorage-ból vesszük a nyelvet (ha korábban felhasználó módosította)
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }
        
        // Alapértelmezett: MINDIG angol
        return 'en';
    }

    // Összes szöveg frissítése
    function updateTexts() {
        const t = translations[currentLang];
        const lang = currentLang; // 'hu' vagy 'en'
        
        // Update HTML lang attribute
        const htmlElement = document.documentElement;
        htmlElement.lang = currentLang === 'hu' ? 'hu' : 'en';
        
        // Meta tag-ek frissítése
        document.title = t.pageTitle;
        document.querySelector('meta[name="description"]').setAttribute('content', t.pageDescription);
        
        // Announce language change to screen readers
        const srAnnouncements = document.getElementById('sr-announcements');
        if (srAnnouncements) {
            srAnnouncements.textContent = currentLang === 'hu' 
                ? 'Nyelv megváltva: Magyar' 
                : 'Language changed: English';
        }
        
        // Összes data-en/data-hu attributummal rendelkező elem frissítése
        document.querySelectorAll('[data-en][data-hu]').forEach(element => {
            const text = lang === 'hu' ? element.getAttribute('data-hu') : element.getAttribute('data-en');
            if (text) {
                element.textContent = text;
            }
        });
        
        // Placeholder frissítése data-en-placeholder/data-hu-placeholder alapján
        document.querySelectorAll('[data-en-placeholder][data-hu-placeholder]').forEach(element => {
            const placeholder = lang === 'hu' ? element.getAttribute('data-hu-placeholder') : element.getAttribute('data-en-placeholder');
            if (placeholder) {
                element.placeholder = placeholder;
            }
        });
        
        // Select opciók frissítése
        const projectSelect = document.getElementById('project');
        if (projectSelect) {
            const options = projectSelect.querySelectorAll('option[data-en][data-hu]');
            options.forEach(option => {
                const text = lang === 'hu' ? option.getAttribute('data-hu') : option.getAttribute('data-en');
                if (text) {
                    option.textContent = text;
                }
            });
        }
        
        // Nyelvváltó gombok státuszának frissítése
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.toLowerCase() === currentLang) {
                btn.classList.add('active');
            }
        });
    }

    // Egyetlen elem szövegének frissítése
    function updateText(selector, text) {
        const element = document.querySelector(selector);
        if (element && text) {
            element.textContent = text;
        }
    }

    // Placeholder frissítése
    function updatePlaceholder(selector, text) {
        const element = document.querySelector(selector);
        if (element && text) {
            element.placeholder = text;
        }
    }

    // Nyelv beállítása és mentése
    function setLanguage(lang) {
        if (!translations[lang]) return;
        
        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        window.location.hash = lang;
        updateTexts();
        // Update footer/mobile language switch displays as well
        try { updateLanguageSwitchDisplays(); } catch (e) { /* ignore if not ready */ }
        
        // Visszajelzés a konzolra
        console.log(`Nyelv beállítva: ${lang === 'hu' ? 'Magyar' : 'English'}`);
    }

    /* ========================================
       MOBILE MENU TOGGLE (EREDETI KÓD)
       ======================================== */
    
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Update aria-expanded attribute
            const isExpanded = this.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
            
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Keyboard support - Escape to close menu
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                menuToggle.focus();
            }
        });
        
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
        
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    /* ========================================
       SMOOTH SCROLLING (EREDETI KÓD)
       ======================================== */
    
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const header = document.getElementById('header');
                const headerHeight = header ? header.offsetHeight : 0;
                
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ========================================
       HEADER SCROLL EFFECT (EREDETI KÓD)
       ======================================== */
    
    const header = document.getElementById('header');
    
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    if (header) {
        window.addEventListener('scroll', handleHeaderScroll);
        handleHeaderScroll();
    }

    /* ========================================
       FADE-IN ANIMATION (EREDETI KÓD)
       ======================================== */
    
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    fadeElements.forEach(function(element) {
        observer.observe(element);
    });

    /* ========================================
       EMAILJS CONFIG
       ======================================== */

    const EMAILJS_PUBLIC_KEY = "cuE-J3-CtljI_thl6";
    const EMAILJS_SERVICE_ID = "service_ztbj0ts";
    const EMAILJS_TEMPLATE_ID = "template_xmguabk";
    const PUBLIC_CONTACT_EMAIL = "info.codenest.hu@gmail.com";
    const INTERNAL_CONTACT_EMAIL = PUBLIC_CONTACT_EMAIL;

    // EmailJS indítása
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
            publicKey: EMAILJS_PUBLIC_KEY
        });
    }

/* ========================================
   FORM HANDLER (EGYETLEN SUBMIT HANDLER)
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    // Initialize language from saved preference (ensure currentLang is set)
    currentLang = detectLanguage() || currentLang;
    updateTexts();
    try { updateLanguageSwitchDisplays(); } catch (e) { /* ignore */ }

    const submitBtn = contactForm.querySelector('button[type="submit"]');

    // Ha nincs külön státusz elem, létrehozzuk
    let statusEl = document.getElementById("status");
    if (!statusEl) {
        statusEl = document.createElement("div");
        statusEl.id = "status";
        statusEl.style.marginTop = "10px";
        contactForm.parentNode.appendChild(statusEl);
    }

    contactForm.addEventListener("legacy-submit-disabled", function (e) {
        e.preventDefault();

        // Gomb tiltása küldés közben
        if (submitBtn) submitBtn.disabled = true;

        // Validation check
        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const projectSelect = contactForm.querySelector('select[name="project"]');

        let isValid = true;
        const errors = [];

        // Validate name
        if (!nameInput.value.trim()) {
            isValid = false;
            errors.push("Name is required");
            nameInput.setAttribute('aria-invalid', 'true');
        } else {
            nameInput.removeAttribute('aria-invalid');
        }

        // Validate email
        if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
            isValid = false;
            errors.push("Valid email is required");
            emailInput.setAttribute('aria-invalid', 'true');
        } else {
            emailInput.removeAttribute('aria-invalid');
        }

        // Validate project
        if (!projectSelect.value) {
            isValid = false;
            errors.push("Project type is required");
            projectSelect.setAttribute('aria-invalid', 'true');
        } else {
            projectSelect.removeAttribute('aria-invalid');
        }

        if (!isValid) {
            // Prepare bilingual error lists
            // Build language-specific error message
            const lang = currentLang === 'hu' ? 'hu' : 'en';
            let msg = '';

            if (lang === 'hu') {
                const errsHu = errors.map(err => {
                    if (err === 'Name is required') return 'A név megadása kötelező';
                    if (err === 'Valid email is required') return 'Érvényes e-mail megadása kötelező';
                    if (err === 'Project type is required') return 'A projekt típusának kiválasztása kötelező';
                    return err;
                });
                statusEl.style.color = '#b91c1c';
                msg = `<div class="status-messages"><div class="status-hu"><strong>Hibák:</strong> ${errsHu.join(', ')}</div></div>`;
                // Announce HU
                const srAnnouncements = document.getElementById('sr-announcements');
                if (srAnnouncements) srAnnouncements.textContent = 'Hibák: ' + errsHu.join('. ');
            } else {
                const errsEn = errors.map(err => {
                    if (err === 'Name is required') return 'Name is required';
                    if (err === 'Valid email is required') return 'Valid email is required';
                    if (err === 'Project type is required') return 'Project type is required';
                    return err;
                });
                statusEl.style.color = '#b91c1c';
                msg = `<div class="status-messages"><div class="status-en"><strong>Errors:</strong> ${errsEn.join(', ')}</div></div>`;
                // Announce EN
                const srAnnouncements = document.getElementById('sr-announcements');
                if (srAnnouncements) srAnnouncements.textContent = 'Form validation errors: ' + errsEn.join('. ');
            }

            statusEl.innerHTML = msg;

            if (submitBtn) submitBtn.disabled = false;
            return;
        }

        // Sending - show single-language small message
        statusEl.style.color = "";
        if (currentLang === 'hu') {
            statusEl.innerHTML = `<div class="status-messages"><div class="status-hu">Küldés folyamatban... Kérjük várj.</div></div>`;
            const srAnnouncements = document.getElementById('sr-announcements');
            if (srAnnouncements) srAnnouncements.textContent = 'Küldés folyamatban. Kérjük várj.';
        } else {
            statusEl.innerHTML = `<div class="status-messages"><div class="status-en">Sending... Please wait.</div></div>`;
            const srAnnouncements = document.getElementById('sr-announcements');
            if (srAnnouncements) srAnnouncements.textContent = 'Form is being submitted. Please wait.';
        }

        // EmailJS form küldés az adminisztrátoroknak
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
            .then(() => {
                // Köszönő email küldése a felhasználónak
                const userEmail = contactForm.querySelector('input[name="email"]').value;
                const userName = contactForm.querySelector('input[name="name"]').value;
                
                // Köszönő email küldése
                emailjs.send(
                    EMAILJS_SERVICE_ID, 
                    "template_auto_response", 
                    {
                        to_email: userEmail,
                        to_name: userName,
                        from_name: "CodeNest",
                        subject_hu: "Köszönjük a jelentkezésed! | Thank you for your inquiry!",
                        message_hu: `Szia ${userName}!\n\nKöszönjük, hogy kitöltötted az üzenetformunkat! Az információdat sikeresen megkaptuk és hamarosan felvesszük veled a kapcsolatot.\n\n🎯 RÓLUNK:\nA CodeNest egy modern webes ügynökség, amely innovatív és funkcionalitással gazdag weboldalakat és digitális megoldásokat készít.\n\n✨ SPECIALITÁSUNK:\n• E-commerce platformok\n• Vállalati weboldalak\n• Egyedi alkalmazások\n• Digitális transzformáció\n\n📞 KAPCSOLAT:\nHa bármilyen kérdésed van, ne habozz felvenni velünk a kapcsolatot!\n\nÜdvözlettel,\nA CodeNest csapata`,
                    }
                )
                .then(() => {
                    statusEl.style.color = "green";
                    if (currentLang === 'hu') {
                        statusEl.innerHTML = `<div class="status-messages"><div class="status-hu"><strong>Siker:</strong> Sikeresen elküldve! Köszönjük. Egy megerősítő email érkezik hamarosan.</div></div>`;
                        const srAnnouncements = document.getElementById('sr-announcements');
                        if (srAnnouncements) srAnnouncements.textContent = 'Sikeresen elküldve. Köszönjük.';
                    } else {
                        statusEl.innerHTML = `<div class="status-messages"><div class="status-en"><strong>Success:</strong> Sent successfully! Thank you. A confirmation email will arrive soon.</div></div>`;
                        const srAnnouncements = document.getElementById('sr-announcements');
                        if (srAnnouncements) srAnnouncements.textContent = 'Form submitted successfully. Thank you.';
                    }

                    contactForm.reset();
                    setTimeout(() => {
                        if (submitBtn) submitBtn.disabled = false;
                    }, 800);
                })
                .catch((autoResponseError) => {
                    console.warn("Auto-response email failed, but main form was sent:", autoResponseError);
                    statusEl.style.color = "green";
                    if (currentLang === 'hu') {
                        statusEl.innerHTML = `<div class="status-messages"><div class="status-hu">Sikeresen elküldve! Köszönjük.</div></div>`;
                        const srAnnouncements = document.getElementById('sr-announcements');
                        if (srAnnouncements) srAnnouncements.textContent = 'Sikeresen elküldve.';
                    } else {
                        statusEl.innerHTML = `<div class="status-messages"><div class="status-en">Sent successfully! Thank you.</div></div>`;
                        const srAnnouncements = document.getElementById('sr-announcements');
                        if (srAnnouncements) srAnnouncements.textContent = 'Form submitted successfully.';
                    }

                    contactForm.reset();
                    setTimeout(() => {
                        if (submitBtn) submitBtn.disabled = false;
                    }, 800);
                });
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                statusEl.style.color = "#b91c1c";
                if (currentLang === 'hu') {
                    statusEl.innerHTML = `<div class="status-messages"><div class="status-hu"><strong>Hiba:</strong> Hiba történt a küldés során. Próbáld újra.</div></div>`;
                    const srAnnouncements = document.getElementById('sr-announcements');
                    if (srAnnouncements) srAnnouncements.textContent = 'Hiba történt a küldés során. Próbáld újra.';
                } else {
                    statusEl.innerHTML = `<div class="status-messages"><div class="status-en"><strong>Error:</strong> An error occurred while sending. Please try again.</div></div>`;
                    const srAnnouncements = document.getElementById('sr-announcements');
                    if (srAnnouncements) srAnnouncements.textContent = 'An error occurred while sending the form. Please try again.';
                }

                if (submitBtn) submitBtn.disabled = false;
            });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#contact-form");
    if (!contactForm) return;

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const submitBtnLabel = submitBtn ? submitBtn.querySelector("span") : null;
    const statusEl = document.getElementById("status") || document.createElement("div");
    let isSending = false;

    statusEl.id = "status";
    statusEl.setAttribute("role", "status");
    statusEl.setAttribute("aria-live", "polite");
    if (!statusEl.parentNode) {
        statusEl.style.marginTop = "10px";
        contactForm.parentNode.appendChild(statusEl);
    }

    const restoreSubmitButton = () => {
        isSending = false;
        if (submitBtn) submitBtn.disabled = false;
        if (submitBtnLabel) {
            submitBtnLabel.textContent = currentLang === "hu" ? "Ajánlatot kérek" : "Request a Quote";
        }
    };

    const announce = (message) => {
        const srAnnouncements = document.getElementById("sr-announcements");
        if (srAnnouncements) srAnnouncements.textContent = message;
    };

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (isSending) return;

        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const projectInput = contactForm.querySelector('select[name="project"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');
        const fields = [nameInput, emailInput, projectInput, messageInput];
        fields.forEach((field) => field.removeAttribute("aria-invalid"));

        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
        const invalidFields = fields.filter((field) => !field.value.trim());
        if (!isEmailValid && !invalidFields.includes(emailInput)) invalidFields.push(emailInput);

        if (invalidFields.length) {
            invalidFields.forEach((field) => field.setAttribute("aria-invalid", "true"));
            const validationMessage = currentLang === "hu"
                ? "Kérlek, töltsd ki a nevet, az érvényes e-mail címet, a projekt típusát és az üzenetet."
                : "Please enter your name, a valid email, the project type, and a message.";
            statusEl.style.color = "#b91c1c";
            statusEl.textContent = validationMessage;
            announce(validationMessage);
            invalidFields[0].focus();
            return;
        }

        const templateParams = {
            from_name: nameInput.value.trim(),
            from_email: emailInput.value.trim(),
            reply_to: emailInput.value.trim(),
            project_type: projectInput.value,
            project_label: projectInput.options[projectInput.selectedIndex].textContent.trim(),
            message: messageInput.value.trim(),
            to_email: INTERNAL_CONTACT_EMAIL,
            contact_email: PUBLIC_CONTACT_EMAIL,
            // Compatibility aliases for the existing template.
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            project: projectInput.value
        };

        isSending = true;
        if (submitBtn) submitBtn.disabled = true;
        if (submitBtnLabel) {
            submitBtnLabel.textContent = currentLang === "hu" ? "Küldés folyamatban…" : "Sending…";
        }
        const loadingMessage = currentLang === "hu" ? "Küldés folyamatban…" : "Sending…";
        statusEl.style.color = "";
        statusEl.textContent = loadingMessage;
        announce(loadingMessage);

        console.info("EmailJS send started", {
            serviceId: EMAILJS_SERVICE_ID,
            templateId: EMAILJS_TEMPLATE_ID,
            fieldNames: Object.keys(templateParams)
        });

        const handleSendError = (error) => {
            console.error("EmailJS send failed", {
                serviceId: EMAILJS_SERVICE_ID,
                templateId: EMAILJS_TEMPLATE_ID,
                status: error && error.status,
                text: error && error.text
            });

            const subject = encodeURIComponent("CodeNest kapcsolatfelvétel");
            const body = encodeURIComponent(
                `Név: ${templateParams.from_name}\nEmail: ${templateParams.from_email}\nProjekt: ${templateParams.project_type}\n\n${templateParams.message}`
            );
            const isEmailServiceAuthError = error && error.status === 412;
            const intro = isEmailServiceAuthError
                ? (currentLang === "hu"
                    ? "Az e-mail szolgáltatás átmenetileg nem elérhető. Kérlek, írj közvetlenül az "
                    : "The email service is temporarily unavailable. Please email us directly at ")
                : (currentLang === "hu"
                    ? "Valami nem sikerült az üzenet küldése közben. Kérlek, írj közvetlenül az "
                    : "Something went wrong while sending. Please email us directly at ");
            statusEl.style.color = "#b91c1c";
            statusEl.textContent = intro;
            const fallbackLink = document.createElement("a");
            fallbackLink.href = `mailto:${PUBLIC_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
            fallbackLink.textContent = PUBLIC_CONTACT_EMAIL;
            statusEl.appendChild(fallbackLink);
            statusEl.appendChild(document.createTextNode(currentLang === "hu" ? " címre." : "."));
            announce(`${intro}${PUBLIC_CONTACT_EMAIL}`);
            restoreSubmitButton();
        };

        if (typeof emailjs === "undefined") {
            handleSendError({ status: 0, text: "EmailJS SDK is unavailable" });
            return;
        }

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then((response) => {
                console.info("EmailJS send succeeded", {
                    status: response && response.status,
                    text: response && response.text
                });
                const successMessage = currentLang === "hu"
                    ? "Köszönjük, megkaptuk az üzeneted. Hamarosan válaszolunk."
                    : "Thank you, we received your message. We will reply soon.";
                statusEl.style.color = "green";
                statusEl.textContent = successMessage;
                announce(successMessage);
                contactForm.reset();
                restoreSubmitButton();
            })
            .catch(handleSendError);
    });
});


    /* ========================================
       LANGUAGE SWITCHER
       ======================================== */

    const langButtons = document.querySelectorAll('.lang-btn');

    // Helper: map common button text to language code
    function inferLangFromText(text) {
        if (!text) return null;
        const s = text.trim().toLowerCase();
        if (s === 'en' || s === 'english') return 'en';
        if (s === 'hu' || s === 'magyar') return 'hu';
        // fallback: if starts with 'e' -> en, 'm' or 'h' -> hu
        if (s.startsWith('e')) return 'en';
        if (s.startsWith('m') || s.startsWith('h')) return 'hu';
        return null;
    }

    langButtons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();

            // Prefer explicit data-lang attribute if present
            let lang = btn.getAttribute('data-lang') || btn.dataset.lang || null;

            // Fallback to inferring from button text/content
            if (!lang) lang = inferLangFromText(btn.textContent);

            if (lang) setLanguage(lang);
        });
    });

    // Update footer and mobile switcher to show the target language (the one user will switch TO)
    function updateLanguageSwitchDisplays() {
        const opposite = currentLang === 'en' ? 'hu' : 'en';

        // Determine label text: when site is EN show 'Magyarra váltás', when HU show 'Switch to English'
        const label = opposite === 'hu' ? 'Magyarra váltás' : 'Switch to English';

        // Footer switcher
        const footerLang = document.querySelector('.footer-lang');
        if (footerLang) {
            footerLang.innerHTML = `
                <a href="#" class="lang-switch-footer lang-btn" data-lang="${opposite}" aria-label="Switch language">${label}</a>
            `;
            const fbtn = footerLang.querySelector('.lang-switch-footer');
            if (fbtn) {
                fbtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    setLanguage(this.getAttribute('data-lang'));
                });
            }
        }

        // Mobile menu switcher (we inserted .mobile-language-switch container)
        const mobileSwitch = document.querySelector('.mobile-language-switch');
        if (mobileSwitch) {
            mobileSwitch.innerHTML = `
                <div class="language-switch" aria-label="Language switcher (mobile)">
                  <a href="#" class="mobile-switch-btn lang-btn" data-lang="${opposite}" role="button" aria-pressed="false">${label}</a>
                </div>
            `;
            const mbtn = mobileSwitch.querySelector('.mobile-switch-btn');
            if (mbtn) {
                mbtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    setLanguage(this.getAttribute('data-lang'));
                });
            }
        }

        // Also update any other explicit footer link variants (defensive)
        document.querySelectorAll('.footer-lang .lang-btn, .mobile-language-switch .lang-btn').forEach(btn => {
            btn.setAttribute('data-lang', opposite);
        });
    }

    // Ensure displays update after texts change
    const originalUpdateTexts = updateTexts;
    // We will call updateLanguageSwitchDisplays at end of updateTexts by wrapping calls where updateTexts is called.

    /* ========================================
       ACTIVE NAVIGATION LINK HIGHLIGHT (EREDETI KÓD)
       ======================================== */
    
    function highlightActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY + 100;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveNavLink);

    /* ========================================
       STATS COUNTER ANIMATION (EREDETI KÓD)
       ======================================== */
    
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                element.textContent = target + (element.textContent.includes('+') ? '+' : '') + 
                                     (element.textContent.includes('%') ? '%' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '') +
                                     (element.textContent.includes('%') ? '%' : '');
            }
        }, 16);
    }
    
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                
                statNumbers.forEach(function(stat) {
                    const text = stat.textContent;
                    const value = parseInt(text.replace(/\D/g, ''));
                    
                    if (!isNaN(value)) {
                        stat.setAttribute('data-target', value);
                        animateCounter(stat, value);
                    }
                });
            }
        });
    }, { threshold: 0.5 });
    
    if (statNumbers.length > 0) {
        statsObserver.observe(statNumbers[0].closest('.hero-stats') || statNumbers[0].closest('.stats-banner'));
    }

    /* ========================================
       KEYBOARD ACCESSIBILITY (EREDETI KÓD)
       ======================================== */
    
    if (menuToggle) {
        menuToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
    
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length === 0) return;
        
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
            
            if (e.key === 'Escape') {
                menuToggle.click();
            }
        });
    }
    
    if (navMenu) {
        trapFocus(navMenu);
    }

    /* ========================================
       INITIALIZATION
       ======================================== */
    
    function init() {
        console.log('%c👋 Welcome to CodeNest!', 'color: #3B82F6; font-size: 20px; font-weight: bold;');
        console.log('%cInterested in working with us? Get in touch!', 'color: #6B7280; font-size: 14px;');
        console.log('%cinfo.codenest.hu@gmail.com', 'color: #3B82F6; font-size: 14px;');
        
        // Nyelv detektálása és beállítása
        currentLang = detectLanguage();
        updateTexts();

        // Initialize FAQ behaviors after texts are set
        initFAQ();
        
        // Nyelvváltó gombok aktív státuszának beállítása
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.toLowerCase() === currentLang) {
                btn.classList.add('active');
            }
        });
    }
    
    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    /* ========================================
       FAQ COLLAPSIBLE - STATE MANAGEMENT
       ======================================== */

    function initFAQ() {
        const faqContainer = document.getElementById('faq');
        if (!faqContainer) return;

        // Attach handlers to each question button
        const questions = faqContainer.querySelectorAll('.faq-question');

        questions.forEach(btn => {
            // Ensure text content is set from data attributes by updateTexts()
            // Add click handler
            btn.addEventListener('click', function (e) {
                toggleFAQ(this);
            });

            // Keyboard support already works for button, but ensure Enter/Space toggles
            btn.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ(this);
                }
            });
        });
    }

    function toggleFAQ(btn) {
        const card = btn.closest('.faq-card');
        const answer = card.querySelector('.faq-answer');
        const isOpen = btn.getAttribute('aria-expanded') === 'true';

        // If the container has data-accordion="true" then close others
        const container = card.closest('#faq');
        const accordion = container && container.getAttribute('data-accordion') === 'true';
        if (accordion && !isOpen) {
            // close siblings
            const openCards = container.querySelectorAll('.faq-card.open');
            openCards.forEach(c => {
                if (c !== card) {
                    const otherBtn = c.querySelector('.faq-question');
                    const otherAnswer = c.querySelector('.faq-answer');
                    otherBtn.setAttribute('aria-expanded', 'false');
                    c.classList.remove('open');
                    otherAnswer.style.maxHeight = null;
                }
            });
        }

        if (isOpen) {
            btn.setAttribute('aria-expanded', 'false');
            card.classList.remove('open');
            answer.style.maxHeight = null;
        } else {
            btn.setAttribute('aria-expanded', 'true');
            card.classList.add('open');
            // Set maxHeight to enable smooth transition
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    }

})();

// Language management
const LANGUAGES = {
    EN: 'en',
    HU: 'hu'
  };
  
  let currentLang = LANGUAGES.EN;
  
  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-en][data-hu]').forEach(element => {
      const text = element.getAttribute(`data-${lang}`);
      if (text) {
        element.textContent = text;
      }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-en-placeholder][data-hu-placeholder]').forEach(element => {
      const placeholder = element.getAttribute(`data-${lang}-placeholder`);
      if (placeholder) {
        element.placeholder = placeholder;
      }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
    });
  }
  
  // Language switcher event listeners
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = e.target.textContent.toLowerCase();
      setLanguage(lang);
    });
  });
  
  // Initialize
  setLanguage(currentLang);
