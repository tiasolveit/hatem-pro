const translations = {
    en: {
        nav: {
            home: "Home",
            portfolio: "Portfolio",
            services: "Services",
            process: "Process",
            about: "About Us",
            contact: "Contact",
            getConcept: "Request a Concept"
        },

        hero: {
            tagline: "Professional 3D Facade Engineering",
            title: "Precision",
            highlight: "3D Design",
            subtitle: "for Flawless Fabrication",
            description:
                "We transform architectural concepts into precise, fabrication-ready 3D facade solutions.",
            benefits: [
                "High-precision, CNC-ready designs",
                "Up to 30% material optimization",
                "Detailed fabrication drawings",
                "Accurate 3D visualization before production"
            ],
            cta: "Start Your Project",
            portfolioBtn: "View Portfolio"
        },

        portfolio: {
            title: "Portfolio",
            description:
                "Fabrication-ready 3D facade projects optimized for material efficiency and CNC accuracy.",
            filter: "Filter Projects",
            projects: "Projects",
            categories: ["All", "Retail", "Office", "Hospitality", "Residential"],
            materials: [
                "Aluminum",
                "Steel",
                "Stainless Steel",
                "Copper",
                "Brass",
                "Glass",
                "Acrylic",
                "Composite Materials",
                "Wood",
                "MDF / Plywood",
                "Stone / Marble",
                "Concrete Panels",
                "PVC / High-Density Foam"
            ],
            viewDetails: "View Details",
            view3D: "3D Preview",
            stats: {
                area: "Surface Area",
                wasteSaved: "Material Saved",
                cncReady: "CNC Ready"
            }
        },

        order: {
            title: "Request a 3D Concept",
            description:
                "Receive a fully optimized, fabrication-ready 3D facade design with CNC-compatible files.",
            steps: [
                { id: 1, name: "Project Details" },
                { id: 2, name: "Materials & Specifications" },
                { id: 3, name: "Contact & Quotation" }
            ],
            projectInfo: "Project Information",
            buildingType: "Building Type",
            buildingTypes: [
                "Retail Shopfront",
                "Office Building",
                "Hotel / Restaurant",
                "Residential Building"
            ],
            timeline: "Project Timeline",
            timelines: [
                "Urgent (3–5 days)",
                "Standard (1–2 weeks)",
                "Flexible (Up to 1 month)"
            ],
            back: "Back",
            continue: "Continue",
            customPackage: "Custom (Contact for quote)",
            getQuote: "Submit Order",
            stats: {
                materialSaved: "Material Optimization",
                cncReady: "CNC Compatible",
                avgDelivery: "Average Delivery Time"
            },
            materials: {
                title: "Materials & Specifications",
                label: "Preferred Materials *",
                maxSelection: "Select up to 3 materials",
                maxError: "Maximum 3 materials selected",
                requiredError: "Please select at least one material",
                materialsList: ["Aluminum Composite", "Stainless Steel", "Glass", "Perforated Metal", "Wood", "Other"],
                requirements: "Special Requirements",
                requirementsPlaceholder: "Finishes, lighting integration, insulation requirements, structural notes...",
                upload: "Upload Reference Images (Optional)",
                uploadDescription: "Upload photos, drawings, or inspiration images",
                uploadNote: "Supports JPG, PNG, PDF (max 10MB each)",
                chooseFiles: "Choose Files",
                selectedFiles: "Selected files:",
                maxFilesError: "Maximum 5 files allowed"
            },
            contact: {
                title: "Contact & Project Details",
                fullName: "Full Name *",
                email: "Email *",
                phone: "Phone *",
                company: "Company",
                projectDescription: "Project Description *",
                projectPlaceholder: "Describe your facade project, dimensions, materials, etc.",
                successTitle: "Request Submitted!",
                successMessage: "Thank you for your order. We'll contact you within 24 hours to discuss your project.",
                anotherRequest: "Submit Another Request"
            }
        },

        services: {
            title: "Services",
            description:
                "End-to-end 3D facade design and engineering services focused on precision and manufacturability.",
            items: [
                {
                    title: "3D Design & Modeling",
                    description:
                        "Accurate, fabrication-ready 3D models with exact dimensions and material specifications."
                },
                {
                    title: "CNC Optimization",
                    description:
                        "Optimized CNC cutting layouts designed to reduce waste and improve production efficiency."
                },
                {
                    title: "Material Analysis",
                    description:
                        "Precise material calculations with cost-effective and performance-driven alternatives."
                },
                {
                    title: "Production Drawings",
                    description:
                        "Comprehensive technical drawings ensuring smooth and error-free fabrication."
                }
            ]
        },

        about: {
            title: "About Us",
            description:
                "We specialize in precision 3D facade design and engineering, bridging the gap between architectural vision and accurate fabrication.",
            stats: [
                { label: "Completed Projects" },
                { label: "Satisfied Clients" },
                { label: "Years of Experience" },
                { label: "CNC Precision" }
            ],
            missionTitle: "Our Mission",
            missionTexts: [
                "To empower architects and fabricators with highly precise 3D designs that ensure perfect CNC execution and minimal material waste.",
                "By combining engineering expertise with advanced 3D modeling, we deliver fabrication-ready solutions that save time, reduce costs, and elevate build quality."
            ]
        },

        contact: {
            title: "Contact Us",
            description: "Get in touch to discuss your facade project or request a quote.",
            info: {
                email: "Email",
                phone: "Phone",
                location: "Location"
            },
            social: {
                title: "Connect With Us",
                whatsapp: "Chat on WhatsApp",
                quickResponse: "Quick Response",
                responseText: "For fastest response, message us on WhatsApp or call during business hours."
            }
        },
        process: {
            title: "Our Process",
            description: "A streamlined workflow from concept to fabrication-ready designs.",
            steps: [
                {
                    title: "Consultation & Analysis",
                    description: "We discuss your project requirements, analyze the site or building, and understand your vision and constraints."
                },
                {
                    title: "3D Concept Design",
                    description: "Create initial 3D models with material suggestions and basic structural considerations."
                },
                {
                    title: "Material Optimization",
                    description: "Calculate exact material requirements, optimize cutting patterns, and minimize waste."
                },
                {
                    title: "CNC-Ready Files",
                    description: "Generate fabrication-ready technical drawings and CNC machine-compatible files."
                },
                {
                    title: "Review & Revisions",
                    description: "Present the design for feedback and make necessary revisions until perfect."
                },
                {
                    title: "Final Delivery",
                    description: "Deliver all files including 3D models, technical drawings, and material cut lists."
                }
            ],
            cta: {
                title: "Ready to Start Your Project?",
                description: "Follow our proven process to get fabrication-ready 3D designs that save time and reduce material costs."
            }
        },
        pricing: {
            title: "Pricing Packages",
            description: "Choose the package that fits your project needs.",
            packages: [
                {
                    name: "BRONZE CONCEPT",
                    price: "10.000 DZD",
                    features: [
                        "3 exterior angles",
                        "2 material options",
                        "Basic dimensions",
                        "3-day delivery"
                    ]
                },
                {
                    name: "SILVER CONCEPT",
                    price: "20.000 DZD",
                    features: [
                        "All 4 sides + perspective",
                        "4 material options",
                        "Technical annotations",
                        "5-day delivery",
                        "2 revisions"
                    ]
                },
                {
                    name: "GOLD CONCEPT",
                    price: "50.000 DZD",
                    features: [
                        "Full 360° visualization",
                        "Unlimited materials",
                        "Sun/shadow studies",
                        "Fabrication-ready DXF",
                        "7-day delivery",
                        "5 revisions"
                    ]
                }
            ],
            select: "Select Package",
            popular: "Most Popular"
        }
    },

    ar: {
        nav: {
            home: "الرئيسية",
            portfolio: "أعمالنا",
            services: "الخدمات",
            process: "آلية العمل",
            about: "من نحن",
            contact: "تواصل معنا",
            getConcept: "طلب تصميم"
        },

        hero: {
            tagline: "هندسة واجهات ثلاثية الأبعاد باحترافية عالية",
            title: "دقة متناهية",
            highlight: "تصميم ثلاثي الأبعاد",
            subtitle: "لتنفيذٍ خالٍ من الأخطاء",
            description:
                "نحوّل الرؤى المعمارية إلى تصاميم واجهات ثلاثية الأبعاد دقيقة وجاهزة للتصنيع.",
            benefits: [
                "تصاميم عالية الدقة وجاهزة للتشغيل على آلات CNC",
                "تقليل استهلاك المواد حتى 30٪",
                "مخططات تصنيع تفصيلية",
                "عرض ثلاثي الأبعاد متقن و واقعي قبل التصنيع"
            ],
            cta: "ابدأ مشروعك",
            portfolioBtn: "عرض أعمالنا السابقة"
        },

        portfolio: {
            title: "أعمالنا",
            description:
                "مشاريع واجهات ثلاثية الأبعاد جاهزة للتصنيع، مع تقليل استهلاك المواد وضمان دقة CNC",
            filter: "تصفية المشاريع",
            projects: "المشاريع",
            categories: ["الكل", "تجاري", "مقار الشركات", "فنادق ومطاعم", "سكني"],
            materials: [
                "ألمنيوم",
                "فولاذ",
                "فولاذ مقاوم للصدأ",
                "نحاس",
                "برونز",
                "زجاج",
                "أكريليك",
                "مواد مركبة",
                "خشب",
                "MDF / خشب رقائقي",
                "حجر / رخام",
                "ألواح خرسانية",
                "PVC / رغوة عالية الكثافة"
            ],
            viewDetails: "عرض التفاصيل",
            view3D: "عرض ثلاثي الأبعاد",
            stats: {
                area: "المساحة",
                wasteSaved: "توفير المواد",
                cncReady: "جاهز لـ CNC"
            }
        },

        order: {
            title: "طلب تصميم ثلاثي الأبعاد",
            description:
                "احصل على تصميم واجهة ثلاثي الأبعاد جاهز للتصنيع ومحسّن للاستخدام مع آلات CNC.",
            steps: [
                { id: 1, name: "تفاصيل المشروع" },
                { id: 2, name: "المواد والمواصفات" },
                { id: 3, name: "التواصل وعرض السعر" }
            ],
            projectInfo: "معلومات المشروع",
            buildingType: "نوع المبنى",
            buildingTypes: [
                "واجهة متجر تجاري",
                "مبنى شركة",
                "فندق / مطعم",
                "مبنى سكني"
            ],
            timeline: "المدة الزمنية",
            timelines: [
                "عاجل (3–5 أيام)",
                "قياسي (1–2 أسبوع)",
                "مرن (حتى شهر)"
            ],
            back: "رجوع",
            continue: "متابعة",
            customPackage: "مخصص (تواصل لطلب عرض سعر)",
            submitOrder: "إرسال الطلب",
            stats: {
                materialSaved: "تقليل استهلاك المواد",
                cncReady: "جاهز لـ CNC",
                avgDelivery: "متوسط مدة التسليم"
            },
            materials: {
                title: "المواد والمواصفات",
                label: "المواد المفضلة *",
                maxSelection: "اختر حتى 3 مواد",
                maxError: "تم اختيار الحد الأقصى من 3 مواد",
                requiredError: "يرجى اختيار مادة واحدة على الأقل",
                materialsList: ["ألمنيوم مركب", "فولاذ مقاوم للصدأ", "زجاج", "معادن مثقبة", "خشب", "أخرى"],
                requirements: "متطلبات خاصة",
                requirementsPlaceholder: "الدهانات، دمج الإضاءة، متطلبات العزل، ملاحظات هيكلية...",
                upload: "رفع صور مرجعية (اختياري)",
                uploadDescription: "ارفع صور، رسومات، أو صور إلهام",
                uploadNote: "يدعم JPG، PNG، PDF (حد أقصى 10MB لكل ملف)",
                chooseFiles: "اختر الملفات",
                selectedFiles: "الملفات المختارة:",
                maxFilesError: "الحد الأقصى المسموح به هو 5 ملفات"
            },

            contact: {
                title: "التواصل وتفاصيل المشروع",
                fullName: "الاسم الكامل *",
                email: "البريد الإلكتروني *",
                phone: "الهاتف *",
                company: "الشركة",
                projectDescription: "وصف المشروع *",
                projectPlaceholder: "صف مشروع الواجهة الخاص بك، الأبعاد، المواد، إلخ.",
                successTitle: "تم إرسال الطلب!",
                successMessage: "شكرًا على طلبك. سنتواصل معك خلال 24 ساعة لمناقشة مشروعك.",
                anotherRequest: "إرسال طلب آخر"
            }

        },

        services: {
            title: "خدماتنا",
            description:
                "نقدم حلولًا متكاملة لتصميم وهندسة الواجهات ثلاثية الأبعاد بدقة عالية وجاهزية تامة للتصنيع.",
            items: [
                {
                    title: "التصميم والنمذجة ثلاثية الأبعاد",
                    description:
                        "نماذج ثلاثية الأبعاد دقيقة وجاهزة للتصنيع مع أبعاد ومواصفات مواد متقنة."
                },
                {
                    title: "تحسين مسارات CNC",
                    description:
                        "تحسين مسارات القطع لتقليل الهدر ورفع كفاءة عمليات التصنيع."
                },
                {
                    title: "تحليل المواد",
                    description:
                        "حساب كميات المواد بدقة واقتراح بدائل فعّالة من حيث التكلفة."
                },
                {
                    title: "مخططات الإنتاج",
                    description:
                        "مخططات فنية تفصيلية تضمن تنفيذًا سلسًا وخاليًا من الأخطاء."
                }
            ]
        },

        about: {
            title: "من نحن",
            description:
                "نحن متخصصون في تصميم وهندسة الواجهات ثلاثية الأبعاد بدقة عالية، ونربط بين الفكرة المعمارية والتنفيذ المثالي.",
            stats: [
                { label: "مشروع منجز" },
                { label: "عملاء راضون" },
                { label: "سنوات خبرة" },
                { label: "دقة CNC" }
            ],
            missionTitle: "مهمتنا",
            missionTexts: [
                "تمكين المعماريين والمصنعين من خلال تصاميم ثلاثية الأبعاد دقيقة تضمن تنفيذ CNC مثالي وتقلل هدر المواد.",
                "نجمع بين الخبرة الهندسية والنمذجة المتقدمة لتقديم حلول جاهزة للتصنيع توفر الوقت، وتخفض التكاليف، وترتقي بجودة التنفيذ."
            ]
        },

        contact: {
            title: "تواصل معنا",
            description: "ناقش مشروعك معنا أو احصل على عرض سعر بسهولة.",
            info: {
                email: "البريد الإلكتروني",
                phone: "الهاتف",
                location: "الموقع"
            },
            social: {
                title: "تواصل سريع معنا",
                whatsapp: "الدردشة عبر واتساب",
                quickResponse: "رد سريع",
                responseText: "لأسرع استجابة، راسلنا عبر واتساب أو اتصل خلال ساعات العمل."
            }
        },
        process: {
            title: "آلية العمل",
            description: "سير عمل متكامل من الفكرة إلى التصاميم الجاهزة للتصنيع.",
            steps: [
                {
                    title: "الاستشارة والتحليل",
                    description: "نناقش متطلبات مشروعك، نقوم بتحليل الموقع أو المبنى، ونفهم رؤيتك والقيود المتاحة."
                },
                {
                    title: "تصميم الفكرة ثلاثية الأبعاد",
                    description: "إنشاء النماذج الأولية ثلاثية الأبعاد مع اقتراحات المواد والاعتبارات الهيكلية الأساسية."
                },
                {
                    title: "تحسين استخدام المواد",
                    description: "حساب متطلبات المواد بدقة، تحسين مسارات القطع، وتقليل الهدر إلى الحد الأدنى."
                },
                {
                    title: "ملفات جاهزة لـ CNC",
                    description: "توليد الرسومات الفنية الجاهزة للتصنيع وملفات متوافقة مع آلات CNC."
                },
                {
                    title: "المراجعة والتعديلات",
                    description: "عرض التصميم للحصول على الملاحظات وإجراء التعديلات اللازمة حتى الوصول للكمال."
                },
                {
                    title: "التسليم النهائي",
                    description: "تسليم جميع الملفات بما في ذلك النماذج ثلاثية الأبعاد، الرسومات الفنية، وقوائم قطع المواد."
                }
            ],
            cta: {
                title: "ابدأ مشروعك الآن",
                description: "اتبع سير عملنا المثبت للحصول على تصاميم ثلاثية الأبعاد جاهزة للتصنيع توفر الوقت وتقلل من تكلفة المواد."
            }

        },
        pricing: {
            title: "الباقات السعرية",
            description: "اختر الباقة التي تناسب احتياجات مشروعك.",
            packages: [
                {
                    name: "باقة البرونز",
                    price: "10.000 دج",
                    features: [
                        "3 زوايا خارجية",
                        "خياران للمواد",
                        "أبعاد أساسية",
                        "تسليم خلال 3 أيام"
                    ]
                },
                {
                    name: "باقة الفضة",
                    price: "20.000 دج",
                    features: [
                        "جميع الجوانب الأربعة + منظور",
                        "4 خيارات للمواد",
                        "تعليقات فنية",
                        "تسليم خلال 5 أيام",
                        "مراجعتان"
                    ]
                },
                {
                    name: "باقة الذهب",
                    price: "50.000 دج",
                    features: [
                        "تصور 360° كامل",
                        "مواد غير محدودة",
                        "دراسات الشمس/الظل",
                        "ملفات DXF جاهزة للتشغيل",
                        "تسليم خلال 7 أيام",
                        "5 مراجعات"
                    ]
                }
            ],
            select: "اختر الباقة",
            popular: "الأكثر شعبية"
        }

    }
}

export const getTranslations = (lang: "en" | "ar") => translations[lang]
