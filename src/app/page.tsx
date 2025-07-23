 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Campus Food Security Initiative - Fighting Hunger in Higher Education</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --primary: #2c3e50;
            --secondary: #e74c3c;
            --accent: #f39c12;
            --text: #333;
            --light-bg: #f8f9fa;
            --card-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: var(--text);
            overflow-x: hidden;
        }
        
        /* Header */
        header {
            background: linear-gradient(135deg, var(--primary) 0%, #34495e 100%);
            color: white;
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        nav {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
        }
        
        .nav-links a:hover {
            color: var(--accent);
        }
        
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--accent);
            transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
            width: 100%;
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.8)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23f8f9fa" width="1200" height="600"/><path fill="%23e8e9ea" d="M0 300L50 325L100 300L150 275L200 300L250 325L300 300L350 275L400 300L450 325L500 300L550 275L600 300L650 325L700 300L750 275L800 300L850 325L900 300L950 275L1000 300L1050 325L1100 300L1150 275L1200 300V600H0V300Z"/></svg>');
            background-size: cover;
            background-position: center;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            margin-top: 60px;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(243, 156, 18, 0.1) 0%, transparent 70%);
            animation: pulse 4s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.3; }
        }
        
        .hero-content {
            max-width: 800px;
            padding: 0 2rem;
            position: relative;
            z-index: 1;
            animation: fadeInUp 1s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .hero p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .stat-number {
            font-size: 3rem;
            font-weight: bold;
            color: var(--accent);
            display: block;
            margin-bottom: 0.5rem;
            animation: countUp 2s ease-out;
        }
        
        @keyframes countUp {
            from { opacity: 0; transform: scale(0.5); }
            to { opacity: 1; transform: scale(1); }
        }
        
        /* Buttons */
        .btn {
            display: inline-block;
            padding: 1rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            cursor: pointer;
            border: none;
            font-size: 1rem;
            position: relative;
            overflow: hidden;
        }
        
        .btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }
        
        .btn:hover::before {
            width: 300px;
            height: 300px;
        }
        
        .btn-primary {
            background: var(--accent);
            color: white;
            margin-right: 1rem;
        }
        
        .btn-primary:hover {
            background: #e67e22;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(230, 126, 34, 0.3);
        }
        
        .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
        }
        
        .btn-secondary:hover {
            background: white;
            color: var(--primary);
            transform: translateY(-2px);
        }
        
        /* Sections */
        section {
            padding: 5rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: var(--primary);
            position: relative;
            padding-bottom: 1rem;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--accent);
            border-radius: 2px;
        }
        
        /* Problem Section */
        .problem-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .problem-card {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: var(--card-shadow);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .problem-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, var(--secondary), var(--accent));
            transform: translateX(-100%);
            transition: transform 0.3s ease;
        }
        
        .problem-card:hover::before {
            transform: translateX(0);
        }
        
        .problem-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        
        .problem-card h3 {
            color: var(--secondary);
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }
        
        .problem-card .icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            opacity: 0.8;
        }
        
        /* Resources Section */
        .resources {
            background: var(--light-bg);
            border-radius: 20px;
            padding: 3rem;
            margin: 2rem 0;
        }
        
        .resource-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .resource-item {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
        }
        
        .resource-item::after {
            content: '→';
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
            transition: all 0.3s ease;
            font-size: 1.5rem;
            color: var(--accent);
        }
        
        .resource-item:hover::after {
            opacity: 1;
            right: 10px;
        }
        
        .resource-item:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .resource-item .icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: var(--accent);
        }
        
        /* Solutions Section */
        .solutions-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
            margin-top: 3rem;
        }
        
        .solution-content h3 {
            color: var(--primary);
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
        
        .solution-content ul {
            list-style: none;
            padding: 0;
        }
        
        .solution-content li {
            padding: 0.8rem 0;
            padding-left: 2rem;
            position: relative;
            transition: all 0.3s ease;
        }
        
        .solution-content li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--accent);
            font-weight: bold;
            font-size: 1.2rem;
        }
        
        .solution-content li:hover {
            padding-left: 2.5rem;
            color: var(--accent);
        }
        
        .solution-visual {
            background: linear-gradient(135deg, var(--accent), #e67e22);
            padding: 3rem;
            border-radius: 20px;
            color: white;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .solution-visual::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: rotate 10s linear infinite;
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        /* Get Involved Section */
        .involvement-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .involvement-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: var(--card-shadow);
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .involvement-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
        
        .card-header {
            background: linear-gradient(135deg, var(--primary), #34495e);
            color: white;
            padding: 2rem;
            text-align: center;
            position: relative;
        }
        
        .card-header h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }
        
        .card-body {
            padding: 2rem;
        }
        
        .card-body ul {
            list-style: none;
            padding: 0;
        }
        
        .card-body li {
            padding: 0.5rem 0;
            border-bottom: 1px solid #eee;
            transition: all 0.3s ease;
        }
        
        .card-body li:hover {
            padding-left: 1rem;
            color: var(--accent);
        }
        
        /* Footer */
        footer {
            background: var(--primary);
            color: white;
            text-align: center;
            padding: 3rem 2rem;
            margin-top: 5rem;
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .social-links a {
            color: white;
            font-size: 1.5rem;
            transition: all 0.3s ease;
        }
        
        .social-links a:hover {
            color: var(--accent);
            transform: translateY(-3px);
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .nav-links {
                display: none;
            }
            
            .solutions-container {
                grid-template-columns: 1fr;
            }
            
            .btn {
                display: block;
                margin: 0.5rem 0;
            }
        }
        
        /* Scroll animations */
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <header>
        <nav>
            <div class="logo">
                🍎 Campus Food Security
            </div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#problem">The Problem</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#get-involved">Get Involved</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>No Student Should Go Hungry</h1>
            <p>Fighting food insecurity on college campuses, one meal at a time</p>
            <div style="margin: 2rem 0;">
                <span class="stat-number">10,000+</span>
                <span>UMass students face food insecurity annually</span>
            </div>
            <div style="margin-top: 2rem;">
                <a href="#resources" class="btn btn-primary">Find Resources</a>
                <a href="#get-involved" class="btn btn-secondary">Get Involved</a>
            </div>
        </div>
    </section>

    <!-- Problem Section -->
    <section id="problem" class="fade-in">
        <h2 class="section-title">Understanding the Crisis</h2>
        <p style="text-align: center; font-size: 1.2rem; max-width: 800px; margin: 0 auto 3rem;">
            Food insecurity among college students is a hidden epidemic affecting academic success, 
            mental health, and future opportunities.
        </p>
        
        <div class="problem-grid">
            <div class="problem-card">
                <div class="icon">📚</div>
                <h3>Academic Impact</h3>
                <p>Students experiencing food insecurity are more likely to miss classes, 
                lose focus, and see declining grades. This can lead to dropping out and 
                lost career opportunities.</p>
            </div>
            
            <div class="problem-card">
                <div class="icon">🧠</div>
                <h3>Mental Health</h3>
                <p>Chronic hunger increases stress, anxiety, and depression. Students 
                worry about their next meal instead of focusing on their education and 
                personal growth.</p>
            </div>
            
            <div class="problem-card">
                <div class="icon">💰</div>
                <h3>Economic Consequences</h3>
                <p>Without proper nutrition, students struggle to complete their degrees, 
                limiting job prospects and perpetuating cycles of poverty that can affect 
                entire communities.</p>
            </div>
        </div>
        
        <div style="margin-top: 3rem; padding: 2rem; background: #fff3cd; border-radius: 10px; border-left: 5px solid var(--accent);">
            <h3 style="color: var(--primary); margin-bottom: 1rem;">Who's Most Affected?</h3>
            <ul style="list-style: none; padding: 0;">
                <li style="padding: 0.5rem 0;">• First-generation college students lacking knowledge of campus resources</li>
                <li style="padding: 0.5rem 0;">• Low-income students whose families earn slightly too much for full aid</li>
                <li style="padding: 0.5rem 0;">• Undocumented students with limited access to support programs</li>
                <li style="padding: 0.5rem 0;">• Community college students often overlooked by traditional aid systems</li>
            </ul>
        </div>
    </section>

    <!-- Resources Section -->
    <section id="resources" class="fade-in">
        <h2 class="section-title">Resources Available Now</h2>
        
        <div class="resources">
            <h3 style="text-align: center; color: var(--primary); margin-bottom: 2rem;">
                Immediate Help Available
            </h3>
            
            <div class="resource-grid">
                <div class="resource-item">
                    <div class="icon">🏪</div>
                    <h4>Campus Food Pantries</h4>
                    <p>Free groceries and essentials available weekly. No questions asked.</p>
                </div>
                
                <div class="resource-item">
                    <div class="icon">🎫</div>
                    <h4>Meal Swipe Programs</h4>
                    <p>Guest meal swipes donated by fellow students for those in need.</p>
                </div>
                
                <div class="resource-item">
                    <div class="icon">💳</div>
                    <h4>SNAP Benefits</h4>
                    <p>Many students qualify for government food assistance programs.</p>
                </div>
                
                <div class="resource-item">
                    <div class="icon">🍲</div>
                    <h4>Community Kitchens</h4>
                    <p>Free cooking facilities and ingredients for preparing meals.</p>
                </div>
                
                <div class="resource-item">
                    <div class="icon">📱</div>
                    <h4>Food Recovery Apps</h4>
                    <p>Connect with local restaurants donating surplus food daily.</p>
                </div>
                
                <div class="resource-item">
                    <div class="icon">🤝</div>
                    <h4>Peer Support Groups</h4>
                    <p>Connect with others facing similar challenges and share resources.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Solutions Section -->
    <section id="solutions" class="fade-in">
        <h2 class="section-title">Creating Lasting Solutions</h2>
        
        <div class="solutions-container">
            <div class="solution-content">
                <h3>Short-Term Actions</h3>
                <ul>
                    <li>Expand campus food pantry hours and locations</li>
                    <li>Create anonymous meal request systems</li>
                    <li>Establish emergency food funds</li>
                    <li>Partner with local restaurants for surplus food</li>
                    <li>Implement cooking and nutrition workshops</li>
                </ul>
                
                <h3 style="margin-top: 2rem;">Long-Term Changes</h3>
                <ul>
                    <li>Advocate for living wages for student workers</li>
                    <li>Reform financial aid to cover realistic food costs</li>
                    <li>Create sustainable campus gardens</li>
                    <li>Establish permanent funding for food programs</li>
                    <li>Integrate food security into orientation programs</li>
                </ul>
            </div>
            
            <div class="solution-visual">
                <h3 style="font-size: 2rem; margin-bottom: 1rem;">Our Vision</h3>
                <p style="font-size: 1.2rem; line-height: 1.8;">
                    A campus where every student has reliable access to nutritious food, 
                    enabling them to focus on their education and reach their full potential.
                </p>
                <div style="margin-top: 2rem;">
                    <div class="stat-number" style="color: white;">100%</div>
                    <span>Food Security by 2030</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Get Involved Section -->
    <section id="get-involved" class="fade-in">
        <h2 class="section-title">How You Can Help</h2>
        
        <div class="involvement-cards">
            <div class="involvement-card">
                <div class="card-header">
                    <h3>For Students</h3>
                    <p>Your voice and actions matter</p>
                </div>
                <div class="card-body">
                    <ul>
                        <li>Join or start a food security advocacy group</li>
                        <li>Donate unused meal swipes</li>
                        <li>Volunteer at campus food pantries</li>
                        <li>Share resources with peers</li>
                        <li>Participate in awareness campaigns</li>
                    </ul>
                </div>
            </div>
            
            <div class="involvement-card">
                <div class="card-header">
                    <h3>For Faculty & Staff</h3>
                    <p>Support your students' success</p>
                </div>
                <div class="card-body">
                    <ul>
                        <li>Include food resource info in syllabi</li>
                        <li>Advocate for policy changes</li>
                        <li>Create judgment-free environments</li>
                        <li>Connect students with resources</li>
                        <li>Support food security research</li>
                    </ul>
                </div>
            </div>
            
            <div class="involvement-card">
                <div class="card-header">
                    <h3>For Community Members</h3>
                    <p>Invest in student success</p>
                </div>
                <div class="card-body">
                    <ul>
                        <li>Donate to campus food programs</li>
                        <li>Offer internships with meal stipends</li>
                        <li>Partner with campus initiatives</li>
                        <li>Hire food-secure graduates</li>
                        <li>Advocate for systemic change</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 3rem;">
            <h3 style="color: var(--primary); margin-bottom: 1rem;">Ready to Make a Difference?</h3>
            <p style="font-size: 1.2rem; margin-bottom: 2rem;">
                Every action, no matter how small, helps build a food-secure campus community.
            </p>
            <a href="#" class="btn btn-primary">Start Today</a>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <h3>Campus Food Security Initiative</h3>
            <p>Working together to ensure no student goes hungry</p>
            <div class="social-links">
                <a href="#">📧</a>
                <a href="#">📘</a>
                <a href="#">🐦</a>
                <a href="#">📷</a>
            </div>
            <p style="margin-top: 2rem; font-size: 0.9rem; opacity: 0.8;">
                Based on research by Dhalavai Nathan, July 2025<br>
                © 2025 Campus Food Security Initiative. All rights reserved.
            </p>
        </div>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Fade-in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Animated counter for statistics
        function animateCounter(element, target) {
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current).toLocaleString() + '+';
            }, 20);
        }

        // Trigger counter animation when visible
        const statObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.animated) {
                    entry.target.animated = true;
                    animateCounter(entry.target, 10000);
                }
            });
        });

        document.querySelectorAll('.stat-number').forEach(el => {
            if (el.textContent.includes('10,000')) {
                statObserver.observe(el);
            }
        });

        // Interactive resource cards
        document.querySelectorAll('.resource-item, .involvement-card').forEach(card => {
            card.addEventListener('click', function() {
                // In a real implementation, this would navigate to detailed resource pages
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 100);
            });
        });

        // Header scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            const header = document.querySelector('header');
            
            if (currentScroll > 100) {
                header.style.background = 'rgba(44, 62, 80, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = '';
                header.style.backdropFilter = '';
            }
            
            lastScroll = currentScroll;
        });
    </script>
</body>
</html>
