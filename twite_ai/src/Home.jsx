import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hover, animate } from 'motion';
import './App.css';
const twiteLogo = "/schola.png";

const pricingCardsData = [
    {
        id: 0,
        title: "Bronze",
        price: "₹20",
        goal: "Digitization + Trust + Parent Visibility",
        features: [
            "✔ Student Management",
            "✔ Board Compatibility",
            "✔ Parent Module",
            "✔ Staff Management",
            "✔ Manual Attendance",
            "✔ Fees Management",
            "✔ Basic Reports"
        ],
        content: [
            {
                title: "📚 Student Management",
                items: [
                    "Student Admission & Registration",
                    "Basic Student Profile (Personal + Academic)",
                    "Class & Section Allocation",
                    "Student ID Generation"
                ]
            },
            {
                title: "🏫 Board Compatibility",
                items: [
                    "Support for State Board / CBSE / ICSE / IGSE",
                    "Flexible Academic Structure Setup"
                ]
            },
            {
                title: "👨👩👧 Parent Module",
                items: [
                    "Parent Login Access",
                    "View Student Profile",
                    "Attendance View",
                    "Fee Status View"
                ]
            },
            {
                title: "👩🏫 Staff Management",
                items: [
                    "Staff Profile Management",
                    "Basic Role Assignment"
                ]
            },
            {
                title: "🗓️ Attendance",
                items: [
                    "Manual Student Attendance",
                    "Daily Attendance Reports"
                ]
            },
            {
                title: "💰 Fees Management",
                items: [
                    "Fee Structure Setup",
                    "Fee Collection Entry (Manual)",
                    "Basic Fee Reports"
                ]
            },
            {
                title: "📊 Reports",
                items: [
                    "Student List Reports",
                    "Attendance Summary",
                    "Fee Collection Summary"
                ]
            },
            {
                title: "🔐 Data & Security",
                items: [
                    "Data Backup & Recovery System",
                    "Basic Data Security"
                ]
            },
            {
                title: "📢 Communication",
                items: [
                    "Basic SMS Notifications (Manual Trigger)"
                ]
            }
        ],
        isPopular: false
    },
    {
        id: 1,
        title: "Silver",
        price: "₹35",
        goal: "Automation + Engagement",
        features: [
            "✔ All Bronze Features +",
            "✔ Document Uploads",
            "✔ Online Fee Payment",
            "✔ Exam Scheduling",
            "✔ Report Card Generation",
            "✔ Bulk Notifications"
        ],
        content: [
            {
                title: "📚 Student Management",
                items: [
                    "All Bronze Features +",
                    "Document Uploads (TC, Certificates)",
                    "Student Promotion / Transfer"
                ]
            },
            {
                title: "👨👩👧 Parent Module",
                items: [
                    "All Bronze Features +",
                    "Notifications (Attendance / Fees / Exams)",
                    "Event & Holiday Updates"
                ]
            },
            {
                title: "👩🏫 Staff Management",
                items: [
                    "Staff Attendance",
                    "Leave Management"
                ]
            },
            {
                title: "🗓️ Attendance",
                items: [
                    "Bulk Attendance Entry",
                    "Attendance Analytics (Monthly Trends)"
                ]
            },
            {
                title: "💰 Fees Management",
                items: [
                    "Online Fee Payment Integration",
                    "Automated Fee Reminders",
                    "Pending Fee Tracking"
                ]
            },
            {
                title: "📝 Academics",
                items: [
                    "Exam Creation & Scheduling",
                    "Marks Entry & Report Card Generation",
                    "Grade System Setup"
                ]
            },
            {
                title: "🏆 Additional Modules",
                items: [
                    "Certificate Management",
                    "Extra-Curricular Activities Tracking"
                ]
            },
            {
                title: "📢 Communication",
                items: [
                    "Bulk SMS & Email Notifications",
                    "Event / Holiday Notifications"
                ]
            },
            {
                title: "📊 Reports & Dashboard",
                items: [
                    "Role-based Dashboard",
                    "Financial Reports (Detailed)"
                ]
            }
        ],
        isPopular: true
    },
    {
        id: 2,
        title: "Gold",
        price: "₹50",
        goal: "Smart Automation + Complete Digital Ecosystem",
        features: [
            "✔ All Silver Features +",
            "✔ AI-Based Attendance",
            "✔ WhatsApp Integration",
            "✔ Transport & GPS",
            "✔ Library & Hostel",
            "✔ Multi-Campus Control"
        ],
        content: [
            {
                title: "📚 Student Management",
                items: [
                    "All Silver Features +",
                    "Student Portal Access",
                    "Alumni Management System"
                ]
            },
            {
                title: "🏫 Multi-Branch Control",
                items: [
                    "Multi-Campus Management",
                    "Centralized Dashboard",
                    "Inter-branch Student Transfer"
                ]
            },
            {
                title: "👨👩👧 Parent Module",
                items: [
                    "All Silver Features +",
                    "Real-time Alerts (Attendance / Fees / Transport)",
                    "Two-way Communication with School"
                ]
            },
            {
                title: "👩🏫 Staff Management",
                items: [
                    "Payroll Management",
                    "Performance Tracking"
                ]
            },
            {
                title: "🗓️ Attendance (Advanced)",
                items: [
                    "AI-Based Attendance (Face Recognition / Smart Tracking)",
                    "Real-time Alerts to Parents"
                ]
            },
            {
                title: "💰 Fees Management",
                items: [
                    "Multi-Payment Gateway",
                    "Auto Reconciliation",
                    "Invoice & Receipt Automation"
                ]
            },
            {
                title: "📝 Academics",
                items: [
                    "Advanced Report Cards",
                    "Homework / Assignment Management",
                    "Timetable Automation",
                    "E-Learning / LMS Integration"
                ]
            },
            {
                title: "📢 Communication",
                items: [
                    "WhatsApp Integration",
                    "Two-way Communication"
                ]
            },
            {
                title: "📊 Advanced Analytics",
                items: [
                    "AI-based Insights",
                    "Predictive Reports"
                ]
            },
            {
                title: "🚌 Transport Management",
                items: [
                    "Route Planning",
                    "GPS Tracking",
                    "Pickup/Drop Alerts"
                ]
            },
            {
                title: "📚 Library Management (Gold)",
                items: [
                    "Book Catalog & Search (ISBN/Category)",
                    "Issue / Return / Renewal Tracking",
                    "Fine Calculation & Overdue Alerts",
                    "Barcode / QR Integration"
                ]
            },
            {
                title: "🏫 Hostel Management (Gold)",
                items: [
                    "Room & Bed Allocation",
                    "Hostel Fees & Mess Management",
                    "Entry/Exit Tracking & Gate Pass",
                    "Complaints & Maintenance Tracking"
                ]
            },
            {
                title: "📦 Inventory & Assets",
                items: [
                    "Inventory Management",
                    "Asset Tracking"
                ]
            },
            {
                title: "🔐 Security & Control",
                items: [
                    "Advanced Role-Based Access",
                    "Enhanced Data Security & Compliance"
                ]
            }
        ],
        isPopular: false
    }
];



function Home() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isInteracting, setIsInteracting] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isSuburban, setIsSuburban] = useState(true);
    const videoRef = useRef(null);

    const toggleVideo = (e) => {
        if (e) e.preventDefault();
        if (videoRef.current) {
            videoRef.current.play();
            document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDragEnd = (event, info) => {
        const swipeThreshold = 50;
        if (info.offset.x < -swipeThreshold) {
            setActiveIndex((prev) => (prev + 1) % pricingCardsData.length);
        } else if (info.offset.x > swipeThreshold) {
            setActiveIndex((prev) => (prev - 1 + pricingCardsData.length) % pricingCardsData.length);
        }
    };

    useEffect(() => {
        if (isInteracting) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % pricingCardsData.length);
        }, 2500); // Rotate every 2.5 seconds (quicker)
        return () => clearInterval(interval);
    }, [isInteracting]);

    useEffect(() => {
        const cards = document.querySelectorAll('.headache-card');
        if (cards.length > 0) {
            // Apply initial grayscale
            cards.forEach(card => {
                const img = card.querySelector('img');
                if (img) img.style.filter = 'grayscale(100%)';
            });

            const cancelHover = hover(cards, (element) => {
                animate(element, { y: -8, scale: 1.02, filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.2))' }, { duration: 0.3 });

                const img = element.querySelector('img');
                if (img) animate(img, { filter: 'grayscale(0%)' }, { duration: 0.3 });

                return () => {
                    animate(element, { y: 0, scale: 1, filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }, { duration: 0.3 });
                    if (img) animate(img, { filter: 'grayscale(100%)' }, { duration: 0.3 });
                };
            });
            return () => cancelHover();
        }
    }, []);

    useEffect(() => {
        const handleRipple = (event) => {
            const button = event.target.closest("button, .btn-primary, .btn-secondary-white, .book-demo-btn, .cta-btn");
            if (!button) return;

            button.classList.add("ripple-button");

            const circle = document.createElement("span");
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;

            const rect = button.getBoundingClientRect();
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${event.clientX - rect.left - radius}px`;
            circle.style.top = `${event.clientY - rect.top - radius}px`;
            circle.classList.add("ripple");

            button.appendChild(circle);

            setTimeout(() => {
                circle.remove();
            }, 600);
        };

        document.addEventListener("mousedown", handleRipple);
        return () => document.removeEventListener("mousedown", handleRipple);
    }, []);

    return (
        <div className="scholarly-container">
            {/* NAVIGATIONBAR */}
            <nav className="navbar">
                <div className="logo">
                    <img src={twiteLogo} alt="Twite Logo" style={{ height: '180px' }} />
                </div>

                <div className="nav-links">
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#comparison">Comparison</a>
                    <a href="#contact">Contact Us</a>
                </div>
            </nav>

            {/* HERO SECTION (REMOVED) */}
            {false && (
                <section className="hero-section scholarly-hero">
                    <div className="trust-badge">
                        <span className="sparkle">✨</span> Trusted by 1,200+ schools across India
                    </div>
                    <h1>Run Your Entire School on <br />One Simple <span className="gradient-text">Platform</span></h1>
                    <p className="hero-description">
                        Manage attendance, fees, academics, and communication — all in one place.
                    </p>
                    <div className="price-info">
                        Starts at just ₹20 <strong>per Student/Month</strong>
                    </div>
                    <div className="hero-btns">
                        <a href="#contact" className="btn-primary">Talk to sales</a>
                    </div>
                </section>
            )}

            {/* EXACT IMAGE RECREATION HERO */}
            <section className="recreated-hero">
                <div className="hero-container">
                    <div className="hero-flex">
                        <div className="hero-content">
                            <div className="hero-badge">ALL-IN-ONE EDUCATION ERP</div>
                            <h1 className="hero-main-title">
                                Empowering <span className="highlight-blue">Institutions.</span><br />
                                Enriching <span className="highlight-blue">Education.</span>
                            </h1>

                            <p className="hero-description">
                                TwiteSchola is a smarter way to manage your institution. Simplify operations, engage stakeholders, and drive better outcomes.
                            </p>

                            <div className="hero-feature-grid" id="features">
                                {[
                                    { title: "Cost Advantage", desc: "Transparent pricing — no hidden charges / add-ons. Lower Total Cost of Ownership (TCO) compared to competitors.", icon: "💰" },
                                    { title: "Zero Complexity Approach", desc: "No feature overload — only what schools actually use. Reduces training time & confusion.", icon: "🎯" },
                                    { title: "AI-Driven & Automation First", desc: "AI attendance, smart insights, predictive alerts. Saves admin time by 30–50%.", icon: "🤖" },
                                    { title: "White-Labeled Platform (All Plans)", desc: "School’s own branding (App, Portal, Reports). Builds institutional credibility.", icon: "🏷️" },
                                    { title: "Strong Parent Engagement", desc: "Real-time updates (attendance, fees, communication). Improves parent satisfaction & retention.", icon: "👨‍👩‍👧" },
                                    { title: "Data Security & Reliability", desc: "Secure cloud architecture. Automated backups + recovery.", icon: "🔐" },
                                    { title: "Easy Migration Support", desc: "Free / assisted data migration from existing systems. Zero data loss transition.", icon: "🔄" },
                                    { title: "Dedicated Support Team", desc: "WhatsApp / Call support. Fast issue resolution (no long ticket delays).", icon: "🧑‍🏫" },
                                    { title: "Scalable for Growth", desc: "Start small → upgrade anytime. Supports single school/Colleges to multi-campus chains.", icon: "📈" },
                                    { title: "Fast Implementation", desc: "Once Developed, Go-live in 3–7 days. Minimal setup, quick onboarding.", icon: "⚡" },
                                    { title: "Universal Compatibility", desc: "Supports all boards + schools & colleges. One ERP for entire institution ecosystem.", icon: "🎓" },
                                    { title: "Client Retention Advantage", desc: "10% loyalty discount from 2nd year. Long-term cost savings.", icon: "🎁" }
                                ].map((feat, index) => (
                                    <motion.div
                                        key={index}
                                        className="grid-feat-card"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                        style={{ animationDelay: `${index * 0.2}s` }}
                                    >
                                        <div className="feat-card-header">
                                            <div className="feat-card-icon-circle">{feat.icon}</div>
                                            <h4>{feat.title}</h4>
                                        </div>
                                        <p>{feat.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>



                    <div className="hero-stats-capsule">
                        <div className="stats-left-text">
                            <h3>A Perfect Fit for Every Institution</h3>
                            <p>From small schools to the largest organizations.</p>
                        </div>

                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-card-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM23 21v-2a4 4 0 0 0-3-3.87" /></svg>
                                </div>
                                <div className="stat-card-text">
                                    <span className="stat-num">500+</span>
                                    <span className="stat-label">Institutions <br />Trust Us</span>
                                </div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-card">
                                <div className="stat-card-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                                </div>
                                <div className="stat-card-text">
                                    <span className="stat-num">100K+</span>
                                    <span className="stat-label">Students <br />Managed</span>
                                </div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-card">
                                <div className="stat-card-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4" /><path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" /></svg>
                                </div>
                                <div className="stat-card-text">
                                    <span className="stat-num">10K+</span>
                                    <span className="stat-label">Teachers <br />Empowered</span>
                                </div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-card">
                                <div className="stat-card-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                                </div>
                                <div className="stat-card-text">
                                    <span className="stat-num">99.9%</span>
                                    <span className="stat-label">System <br />Uptime</span>
                                </div>
                            </div>
                        </div>

                        <div className="stats-right-action">
                            <a href="#video-section" className="stats-demo-btn">
                                <div className="btn-icon">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                </div>
                                <div className="btn-content">
                                    <strong>Click for a Video</strong>
                                    <span>Watch how TwiteSchola works</span>
                                </div>
                                <div className="btn-arrow">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* STILL MANAGING MANUALLY SECTION */}
            <section className="manual-headaches-section" id="video">
                <div className="section-header">
                    <h2>See Twite ERP in Action</h2>
                    <p>Discover how one powerful platform simplifies school management from admissions to analytics.</p>
                </div>

                <div className="manual-video-wrap">
                    <video
                        ref={videoRef}
                        className="manual-video"
                        playsInline
                        controls
                        preload="metadata"
                    >
                        <source src="/Twite%20schola%203.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="hero-btns" style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
                    <a href="#contact" className="btn-primary" style={{ textDecoration: "none" }}>Talk To Sales</a>
                </div>
            </section>


            <section className="pricing-section" id="pricing">
                <h2>Simple, Transparent Pricing</h2>
                <p>Choose a plan that fits your school/college size</p>

                <div
                    className="pricing-carousel-container"
                    style={{ position: 'relative', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1200px', overflow: 'hidden', width: '100%', maxWidth: '1000px', margin: '0 auto' }}
                    onMouseEnter={() => setIsInteracting(true)}
                    onMouseLeave={() => setIsInteracting(false)}
                    onTouchStart={() => setIsInteracting(true)}
                    onTouchEnd={() => setIsInteracting(false)}
                >
                    <AnimatePresence initial={false}>
                        {pricingCardsData.map((card, index) => {
                            let position = "right";
                            if (index === activeIndex) position = "center";
                            else if (index === (activeIndex - 1 + 3) % 3) position = "left";

                            const variants = {
                                center: { x: "0%", scale: 1, rotateY: 0, zIndex: 10, opacity: 1 },
                                left: { x: "-55%", scale: 0.85, rotateY: 25, zIndex: 5, opacity: 0.6 },
                                right: { x: "55%", scale: 0.85, rotateY: -25, zIndex: 5, opacity: 0.6 }
                            };

                            return (
                                <motion.div
                                    key={card.id}
                                    className={`pricing-card ${card.isPopular ? 'popular' : ''} ${card.title.toLowerCase()}-tier`}
                                    style={{ position: 'absolute', cursor: 'grab' }}
                                    initial={false}
                                    animate={position}
                                    variants={variants}
                                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveIndex(index);
                                    }}
                                    onMouseEnter={() => {
                                        setIsInteracting(true);
                                    }}
                                    onMouseLeave={() => {
                                        setIsInteracting(false);
                                    }}
                                    whileHover={{ scale: position === "center" ? 1.05 : 0.9 }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.2}
                                    onDragEnd={handleDragEnd}
                                >
                                    {card.isPopular && <div className="tag">Most Popular</div>}
                                    <h3>
                                        {card.title === 'Bronze' && '\uD83E\uDD49 '}
                                        {card.title === 'Silver' && '\uD83E\uDD48 '}
                                        {card.title === 'Gold' && '\uD83E\uDD47 '}
                                        {false && (
                                            <>
                                                {card.title === 'Bronze' && '🥉 '}
                                                {card.title === 'Silver' && '🥈 '}
                                                {card.title === 'Gold' && '🥇 '}
                                            </>
                                        )}
                                        {card.title} Plan
                                    </h3>
                                    <h1>{isSuburban ? card.price : card.title === 'Bronze' ? '₹40' : card.title === 'Silver' ? '₹65' : '₹80'}<span style={{ fontWeight: '900' }}><strong><b>/User/Month</b></strong></span></h1>
                                    <b><p className="pricing-card-goal" style={{
                                        fontSize: '0.85rem',
                                        color: card.title === 'Bronze' ? '#9c4221' : card.title === 'Silver' ? '#475569' : '#b45309',
                                        marginBottom: '15px',
                                        backgroundColor: card.title === 'Bronze' ? '#fffcf0' : card.title === 'Silver' ? '#f8fafc' : '#fffdf2',
                                        padding: '5px 12px',
                                        borderRadius: '20px',
                                        display: 'inline-block',
                                        marginTop: '5px',
                                        border: `1px solid ${card.title === 'Bronze' ? '#fbd38d' : card.title === 'Silver' ? '#cbd5e1' : '#fef3c7'}`
                                    }}>
                                        👉 <strong style={{ fontWeight: '800' }}>Goal:</strong> <span style={{ fontWeight: '500' }}>{card.goal}</span>
                                    </p></b>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {card.features.map((f, i) => (
                                            <motion.li
                                                key={i}
                                                whileHover={{
                                                    textShadow: "0px 0px 10px rgba(0, 136, 255, 0.7)",
                                                    scale: 1.05,
                                                    x: 5,
                                                    color: "#0056b3"
                                                }}
                                                transition={{ duration: 0.2 }}
                                                style={{ cursor: 'pointer', originX: 0 }}
                                            >
                                                {f}
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedPlan(card);
                                            setIsModalOpen(true);
                                        }}
                                    >
                                        View More
                                    </button>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </section>

            {/* FEATURE COMPARISON TABLE */}
            <section className="comparison-section" id="comparison">
                <div className="comparison-header">
                    <h2>What's Included in <span>Each Plan</span></h2>
                    <p>See exactly what you get — no surprises.</p>
                </div>

                <div className="location-toggle-container">
                    <span className={`toggle-label ${isSuburban ? 'active' : ''}`}>Suburban</span>
                    <div
                        className={`framer-toggle ${isSuburban ? 'left' : 'right'}`}
                        onClick={() => setIsSuburban(!isSuburban)}
                        style={{
                            background: isSuburban
                                ? "linear-gradient(135deg, #1e40af, #3b82f6)"   // Left = Dark Blue
                                : "linear-gradient(135deg, #f8fafc, #cbd5e1)"   // Right = White Chromatic
                        }}
                    >
                        <motion.div
                            className="toggle-handle"
                            layout
                            initial={false}
                            animate={{
                                x: isSuburban ? 0 : 32
                            }}
                            transition={{ type: "spring", stiffness: 700, damping: 30 }}
                        />
                    </div>
                    <span className={`toggle-label ${!isSuburban ? 'active' : ''}`}>Urban</span>
                </div>

                <div className="comparison-wrapper">
                    {/* Sticky column headers */}
                    <div className="comparison-table">
                        <div className="comp-head-row">
                            <div className="comp-feature-label comp-logo-cell">
                                <img
                                    src={twiteLogo}
                                    alt="Twite Logo"
                                    className="comp-logo-img"
                                />
                            </div>
                            <div className="comp-tier comp-bronze">
                                <span className="comp-tier-icon">🥉</span>
                                <span className="comp-tier-name">Bronze</span>
                                <span className="comp-tier-price">{isSuburban ? '₹20' : '₹40'}<small>/User/Month</small></span>
                            </div>
                            <div className="comp-tier comp-silver popular-tier">
                                <div className="comp-popular-badge">Most Popular</div>
                                <span className="comp-tier-icon">🥈</span>
                                <span className="comp-tier-name">Silver</span>
                                <span className="comp-tier-price">{isSuburban ? '₹35' : '₹65'}<small>/User/Month</small></span>
                            </div>
                            <div className="comp-tier comp-gold">
                                <span className="comp-tier-icon">🥇</span>
                                <span className="comp-tier-name">Gold</span>
                                <span className="comp-tier-price">{isSuburban ? '₹50' : '₹80'}<small>User/Month</small></span>
                            </div>
                        </div>

                        {/* Category: Core */}
                        <div className="comp-category-row"><span>Core Management</span></div>
                        {[
                            ["Student Management", "Basic", "Advanced", "Advanced + App"],
                            ["Board Support (State/CBSE/ICSE/IGSE)", true, true, true],
                            ["Parent Module", "Basic View", "Notifications", "2-Way Comms"],
                            ["Staff Management", "Basic", "Attendance & Leave", "Payroll & Performance"],
                        ].map(([feat, b, s, g]) => (
                            <div className="comp-row" key={feat}>
                                <div className="comp-feature-label">{feat}</div>
                                <div className="comp-cell comp-cell-bronze">{b === true ? <span className="check">✓</span> : b === false ? <span className="cross">✕</span> : <span className="check-text">{b}</span>}</div>
                                <div className="comp-cell comp-cell-popular">{s === true ? <span className="check">✓</span> : s === false ? <span className="cross">✕</span> : <span className="check-text">{s}</span>}</div>
                                <div className="comp-cell comp-cell-gold">{g === true ? <span className="check">✓</span> : g === false ? <span className="cross">✕</span> : <span className="check-text">{g}</span>}</div>
                            </div>
                        ))}

                        {/* Category: Academics & Finance */}
                        <div className="comp-category-row"><span>Academics & Finance</span></div>
                        {[
                            ["Attendance", "Manual", "Bulk + Analytics", "AI / Biometric / Alerts"],
                            ["Fees Management", "Manual", "Online + Reminders", "Auto + Multi-Gateway"],
                            ["Academics (Exams/Marks)", false, true, "Advanced"],
                            ["Certificates & Activities", false, true, true],
                        ].map(([feat, b, s, g]) => (
                            <div className="comp-row" key={feat}>
                                <div className="comp-feature-label">{feat}</div>
                                <div className="comp-cell comp-cell-bronze">{b === true ? <span className="check">✓</span> : b === false ? <span className="cross">✕</span> : <span className="check-text">{b}</span>}</div>
                                <div className="comp-cell comp-cell-popular">{s === true ? <span className="check">✓</span> : s === false ? <span className="cross">✕</span> : <span className="check-text">{s}</span>}</div>
                                <div className="comp-cell comp-cell-gold">{g === true ? <span className="check">✓</span> : g === false ? <span className="cross">✕</span> : <span className="check-text">{g}</span>}</div>
                            </div>
                        ))}

                        {/* Category: Communication & Analytics */}
                        <div className="comp-category-row">
                            <span style={{ flexWrap: 'wrap', gap: '8px', height: 'auto', padding: '12px 24px' }}>
                                Communication & Analytics
                                <small style={{
                                    fontSize: '11px',
                                    textTransform: 'none',
                                    fontWeight: '700',
                                    color: '#ef4444',
                                    letterSpacing: '0',
                                    display: 'inline-block',
                                    lineHeight: '1.2'
                                }}>
                                    *Note: Extra charges applicable for third-party apps
                                </small>
                            </span>
                        </div>
                        {[
                            ["Communication", "SMS (Manual)", "Bulk SMS/Email", "WhatsApp"],
                            ["Reports & Dashboard", "Basic", "Detailed", "AI Insights"],
                            ["Data Backup & Security", "Basic", true, "Advanced"],
                        ].map(([feat, b, s, g]) => (
                            <div className="comp-row" key={feat}>
                                <div className="comp-feature-label">{feat}</div>
                                <div className="comp-cell comp-cell-bronze">{b === true ? <span className="check">✓</span> : b === false ? <span className="cross">✕</span> : <span className="check-text">{b}</span>}</div>
                                <div className="comp-cell comp-cell-popular">{s === true ? <span className="check">✓</span> : s === false ? <span className="cross">✕</span> : <span className="check-text">{s}</span>}</div>
                                <div className="comp-cell comp-cell-gold">{g === true ? <span className="check">✓</span> : g === false ? <span className="cross">✕</span> : <span className="check-text">{g}</span>}</div>
                            </div>
                        ))}

                        {/* Category: Advanced / Gold-only */}
                        <div className="comp-category-row"><span>Advanced Features</span></div>
                        {[
                            ["E-Learning / LMS", false, false, true],
                            ["AI Attendance", false, false, true],
                            ["Multi-Campus Management", false, false, true],
                            ["Alumni Management", false, false, true],
                            ["Transport Management", false, false, true],
                            ["Library Management", false, false, true],
                            ["Hostel Management", false, false, true],
                            ["Inventory & Assets", false, false, true],
                        ].map(([feat, b, s, g]) => (
                            <div className="comp-row" key={feat}>
                                <div className="comp-feature-label">{feat}</div>
                                <div className="comp-cell comp-cell-bronze">{b === true ? <span className="check">✓</span> : b === false ? <span className="cross">✕</span> : <span className="check-text">{b}</span>}</div>
                                <div className="comp-cell comp-cell-popular">{s === true ? <span className="check">✓</span> : s === false ? <span className="cross">✕</span> : <span className="check-text">{s}</span>}</div>
                                <div className="comp-cell comp-cell-gold">{g === true ? <span className="check">✓</span> : g === false ? <span className="cross">✕</span> : <span className="check-text">{g}</span>}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-overlay">
                    <h2>Ready to Digitize Your School/College?</h2>
                    <p>Join hundreds of schools/colleges simplifying their operations with Twite ERP.</p>

                    <a href="https://twite.ai/" target="_blank" rel="noopener noreferrer" className="cta-btn">Book a Demo</a>
                </div>
            </section>


            {/* FOOTER */}
            <footer className="footer" id="contact">
                <div className="footer-content">
                    <div className="footer-left">
                        <h2 className="footer-heading">Contact Us</h2>
                        <div className="contact-item">
                            <span className="contact-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                            </span>
                            <div className="contact-details">
                                <strong>Phone</strong>
                                <p>+91 97888 99948</p>
                                <p>+91 98842 98443</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                            </span>
                            <div className="contact-details">
                                <strong>Email</strong>
                                <p>info@twite.ai</p>
                                <p>sales@twite.ai</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                            </span>
                            <div className="contact-details">
                                <strong>Address</strong>
                                <p>Chennai</p>
                                <p>Bangalore</p>
                                <p>Srilanka</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="social-links">
                            <a href="#" className="social-item">
                                <span className="social-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                </span>
                                Twitter
                            </a>
                            <a href="#" className="social-item">
                                <span className="social-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                </span>
                                Instagram
                            </a>
                            <a href="#" className="social-item">
                                <span className="social-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </span>
                                Linkedin
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © 2025 - 2026 Twite AI Technologies | Powered by <span style={{ color: '#0088ff', fontWeight: 600 }}>Twite AI</span></p>
                </div>
            </footer>

            {/* PRICING DETAILS MODAL */}
            <AnimatePresence>
                {isModalOpen && selectedPlan && (
                    <motion.div
                        key="pricing-modal"
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            className={`modal-content ${selectedPlan?.title?.toLowerCase()}-modal`}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="modal-close-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsModalOpen(false);
                                    }}
                                >
                                    ✕
                                </button>
                                <h2>
                                    {selectedPlan?.title === "Bronze" && "🥉 "}
                                    {selectedPlan?.title === "Silver" && "🥈 "}
                                    {selectedPlan?.title === "Gold" && "🥇 "}
                                    {selectedPlan?.title} Plan
                                </h2>

                                <span>
                                    {selectedPlan?.title === "Bronze" && "(Basic – Starter for All Schools/Colleges)"}
                                    {selectedPlan?.title === "Silver" && "(Standard – Growing Schools/Colleges)"}
                                    {selectedPlan?.title === "Gold" && "(Advanced – Premium Schools / Chains)"}
                                </span>
                            </div>

                            <div className="modal-body">
                                <p className="modal-goal">
                                    👉 <strong>Goal:</strong> {selectedPlan?.goal}
                                </p>

                                {selectedPlan?.content?.map((section, i) => (
                                    <div key={i} className="modal-feature-group">
                                        <h4>{section.title}</h4>
                                        <ul>
                                            {section.items.map((item, j) => (
                                                <li key={j}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="modal-footer">
                                <a href="https://twite.ai/" target="_blank" rel="noopener noreferrer" className="btn-primary modal-get-started-btn" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>Get Started</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}

export default Home;
