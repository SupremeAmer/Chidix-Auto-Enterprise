<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chidex Auto Enterprise | Premium Auto Solutions - Sales, Repairs & Parts</title>
    <meta name="description" content="Chidex Auto Enterprise: Your trusted partner for car sales, repairs, spare parts, and diagnostics. Premium vehicles from top brands.">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #dc2626;
            --primary-dark: #b91c1c;
            --dark: #111827;
            --dark-light: #1f2937;
            --gray: #6b7280;
            --light: #f3f4f6;
        }
        
        [data-theme="light"] {
            --dark: #f3f4f6;
            --dark-light: #e5e7eb;
            --light: #111827;
        }
        
        body {
            font-family: 'Roboto', sans-serif;
            background-color: var(--dark);
            color: var(--light);
            scroll-behavior: smooth;
            transition: background-color 0.3s, color 0.3s;
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Montserrat', sans-serif;
        }
        
        .hero-bg {
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                        url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }
        
        .contact-bg {
            background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                        url('https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
            background-size: cover;
            background-position: center;
        }
        
        .brands-bg {
            background: linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), 
                        url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
            background-size: cover;
            background-position: center;
        }
        
        .service-card, .car-card, .testimonial-card {
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background-color: var(--dark-light);
        }
        
        .service-card:hover, .car-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 25px rgba(220, 38, 38, 0.2);
            border-color: var(--primary);
        }
        
        .gallery-item {
            overflow: hidden;
            position: relative;
        }
        
        .gallery-item img {
            transition: transform 0.5s ease;
        }
        
        .gallery-item:hover img {
            transform: scale(1.1);
        }
        
        .gallery-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
            padding: 20px;
            transform: translateY(100%);
            transition: transform 0.3s ease;
        }
        
        .gallery-item:hover .gallery-overlay {
            transform: translateY(0);
        }
        
        .brand-logo {
            filter: grayscale(100%);
            opacity: 0.7;
            transition: all 0.3s ease;
            background-color: var(--dark-light);
        }
        
        .brand-logo:hover {
            filter: grayscale(0);
            opacity: 1;
            transform: scale(1.1);
        }
        
        .car-feature {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
        
        .car-feature i {
            color: var(--primary);
            margin-right: 10px;
            width: 20px;
        }
        
        .nav-link {
            position: relative;
        }
        
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: var(--primary);
            transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
            width: 100%;
        }
        
        .btn-primary {
            background: var(--primary);
            transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(220, 38, 38, 0.3);
        }
        
        .section-title {
            position: relative;
            display: inline-block;
            margin-bottom: 50px;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            width: 50%;
            height: 3px;
            background: var(--primary);
            bottom: -10px;
            left: 25%;
        }
        
        .stats-counter {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary);
        }
        
        .floating-whatsapp {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #25D366;
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            transition: all 0.3s ease;
        }
        
        .floating-whatsapp:hover {
            transform: scale(1.1);
        }
        
        .feature-highlight {
            position: relative;
            overflow: hidden;
        }
        
        .feature-highlight::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.2), transparent);
            transition: left 0.7s ease;
        }
        
        .feature-highlight:hover::before {
            left: 100%;
        }
        
        .theme-toggle {
            background: transparent;
            border: none;
            color: var(--light);
            cursor: pointer;
            font-size: 1.2rem;
            margin-left: 15px;
        }
        
        .share-buttons {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }
        
        .share-btn {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }
        
        .share-btn:hover {
            transform: scale(1.1);
        }
        
        .share-whatsapp {
            background: #25D366;
        }
        
        .share-facebook {
            background: #3b5998;
        }
        
        .share-twitter {
            background: #1da1f2;
        }
        
        .map-container {
            height: 300px;
            width: 100%;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .direction-btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 10px;
            transition: background 0.3s;
        }
        
        .direction-btn:hover {
            background: var(--primary-dark);
        }
        
        nav {
            background-color: var(--dark);
            transition: background-color 0.3s;
        }
        
        footer {
            background-color: var(--dark);
            transition: background-color 0.3s;
        }
        
        .bg-gray-800 {
            background-color: var(--dark-light) !important;
        }
        
        .bg-gray-900 {
            background-color: var(--dark) !important;
        }
        
        .text-gray-300, .text-gray-400 {
            color: var(--light) !important;
            opacity: 0.7;
        }
        
        .border-gray-700 {
            border-color: var(--dark-light) !important;
        }
    </style>
</head>
<body class="bg-gray-900 text-white">
    <!-- Floating WhatsApp -->
    <a href="https://wa.me/2347063758013" class="floating-whatsapp" target="_blank">
        <i class="fab fa-whatsapp"></i>
    </a>

    <!-- Navigation -->
    <nav class="bg-gray-900 sticky top-0 z-50 shadow-lg">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <div class="flex items-center">
                    <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-3">
                        <i class="fas fa-car text-white text-xl"></i>
                    </div>
                    <div>
                        <span class="text-xl font-bold">Chidex Auto</span>
                        <p class="text-xs text-gray-400">Enterprise</p>
                    </div>
                </div>
                
                <div class="hidden lg:flex space-x-8 items-center">
                    <a href="#home" class="nav-link hover:text-red-500 transition">Home</a>
                    <a href="#about" class="nav-link hover:text-red-500 transition">About</a>
                    <a href="#brands" class="nav-link hover:text-red-500 transition">Brands</a>
                    <a href="#services" class="nav-link hover:text-red-500 transition">Services</a>
                    <a href="#gallery" class="nav-link hover:text-red-500 transition">Gallery</a>
                    <a href="#testimonials" class="nav-link hover:text-red-500 transition">Testimonials</a>
                    <a href="#contact" class="nav-link hover:text-red-500 transition">Contact</a>
                    <button id="theme-toggle" class="theme-toggle">
                        <i class="fas fa-moon"></i>
                    </button>
                </div>
                
                <div class="lg:hidden flex items-center">
                    <button id="theme-toggle-mobile" class="theme-toggle mr-4">
                        <i class="fas fa-moon"></i>
                    </button>
                    <button id="menu-toggle" class="text-white focus:outline-none">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden lg:hidden py-4 border-t border-gray-700">
                <a href="#home" class="block py-2 hover:text-red-500 transition">Home</a>
                <a href="#about" class="block py-2 hover:text-red-500 transition">About</a>
                <a href="#brands" class="block py-2 hover:text-red-500 transition">Brands</a>
                <a href="#services" class="block py-2 hover:text-red-500 transition">Services</a>
                <a href="#gallery" class="block py-2 hover:text-red-500 transition">Gallery</a>
                <a href="#testimonials" class="block py-2 hover:text-red-500 transition">Testimonials</a>
                <a href="#contact" class="block py-2 hover:text-red-500 transition">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-bg min-h-screen flex items-center">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-4">Chidex Auto Enterprise</h1>
            <p class="text-xl md:text-2xl mb-8 text-gray-300">Your Trusted Partner in Auto Solutions</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#gallery" class="btn-primary text-white font-bold py-3 px-8 rounded-lg inline-block transition">
                    Explore Vehicles
                </a>
                <a href="#contact" class="bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg inline-block transition">
                    Contact Us
                </a>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="py-12 bg-gray-800">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div class="feature-highlight p-4 rounded-lg">
                    <div class="stats-counter" data-count="500">0</div>
                    <p class="text-gray-400">Vehicles Sold</p>
                </div>
                <div class="feature-highlight p-4 rounded-lg">
                    <div class="stats-counter" data-count="1200">0</div>
                    <p class="text-gray-400">Happy Customers</p>
                </div>
                <div class="feature-highlight p-4 rounded-lg">
                    <div class="stats-counter" data-count="15">0</div>
                    <p class="text-gray-400">Years Experience</p>
                </div>
                <div class="feature-highlight p-4 rounded-lg">
                    <div class="stats-counter" data-count="50">0</div>
                    <p class="text-gray-400">Brands Available</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 bg-gray-900">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 section-title">About Us</h2>
            
            <div class="flex flex-col lg:flex-row items-center">
                <div class="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                    <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                         alt="Chidex Auto Enterprise" class="rounded-lg shadow-lg">
                </div>
                
                <div class="lg:w-1/2">
                    <h3 class="text-2xl font-bold mb-4">Our Story</h3>
                    <p class="mb-4 text-gray-300">
                        Founded in 2008, Chidex Auto Enterprise has grown to become a trusted name in the automotive industry. 
                        We specialize in providing comprehensive automotive solutions including car sales, repairs, 
                        spare parts, and advanced vehicle diagnostics.
                    </p>
                    
                    <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
                    <p class="mb-4 text-gray-300">
                        To deliver exceptional automotive services with integrity, expertise, and customer-centric 
                        approach, ensuring every client receives the highest quality solutions for their vehicles.
                    </p>
                    
                    <h3 class="text-2xl font-bold mb-4">Why Choose Us?</h3>
                    <ul class="text-gray-300">
                        <li class="mb-2 flex items-start">
                            <i class="fas fa-check text-red-500 mr-2 mt-1"></i>
                            <span>15+ years of industry experience</span>
                        </li>
                        <li class="mb-2 flex items-start">
                            <i class="fas fa-check text-red-500 mr-2 mt-1"></i>
                            <span>Certified technicians and mechanics</span>
                        </li>
                        <li class="mb-2 flex items-start">
                            <i class="fas fa-check text-red-500 mr-2 mt-1"></i>
                            <span>Wide selection of premium vehicles</span>
                        </li>
                        <li class="mb-2 flex items-start">
                            <i class="fas fa-check text-red-500 mr-2 mt-1"></i>
                            <span>Genuine spare parts with warranty</span>
                        </li>
                        <li class="mb-2 flex items-start">
                            <i class="fas fa-check text-red-500 mr-2 mt-1"></i>
                            <span>Competitive pricing and financing options</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Brands Section -->
    <section id="brands" class="py-16 brands-bg">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 section-title">Our Brands</h2>
            <p class="text-center text-gray-300 max-w-2xl mx-auto mb-12">
                We work with the world's most reputable automotive brands to bring you quality vehicles and parts
            </p>
            
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
                <!-- Brand 1 -->
                <div class="flex justify-center items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg brand-logo">
                    <img src="https://logos-download.com/wp-content/uploads/2016/02/Mercedes_Benz_Logo_2011.png" alt="Mercedes-Benz" class="h-12">
                </div>
                
                <!-- Brand 2 -->
                <div class="flex justify-center items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg brand-logo">
                    <img src="https://logos-download.com/wp-content/uploads/2016/02/BMW_logo_black_background.png" alt="BMW" class="h-12">
                </div>
                
                <!-- Brand 3 -->
                <div class="flex justify-center items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg brand-logo">
                    <img src="https://logos-download.com/wp-content/uploads/2016/02/Audi_Logo_2016.png" alt="Audi" class="h-12">
                </div>
                
                <!-- Brand 4 -->
                <div class="flex justify-center items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg brand-logo">
                    <img src="https://logos-download.com/wp-content/uploads/2016/02/Toyota_logo_red.png" alt="Toyota" class="h-12">
                </div>
                
                <!-- Brand 5 -->
                <div class="flex justify-center items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg brand-logo">
                    <img src="https://logos-download.com/wp-content/uploads/2016/02/Honda_Logo_2014.png" alt="Honda" class="h-12">
                </div>
                
                <!-- Brand 6 -->
                <div class="flex justify-center items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg brand-logo">
                    <img src="https://logos-download.com/wp-content/uploads/2016/02/Ford_logo_2003.png" alt="Ford" class="h-12">
                </div>
                
                <!-- Brand 7 -->
                <div class="flex justify-center items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg brand-logo">
                    <img src="https://logos-download.com/wp-content/uploads/2016/02/Volkswagen_Logo_2019.png" alt="Volkswagen" class="h-12">
                </div>
                
                <!-- Brand 8 -->
                <div class="flex justify-center items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg brand-logo">
                    <img src="https://logos-download.com/wp-content/uploads/2016/02/Nissan_Logo_2020.png" alt="Nissan" class="h-12">
                </div>
                
                <!-- Brand 9 -->
                <div class="flex justify-center items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg brand-logo">
                    <img src="https://logos-download.com/wp-content/uploads/2016/02/Hyundai_Logo_2011.png" alt="Hyundai" class="h-12">
                </div>
                
                <!-- Brand 10 -->
                <div class="flex justify-center items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg brand-logo">
                    <img src="https://logos-download.com/wp-content/uploads/2016/02/Kia_logo.png" alt="Kia" class="h-12">
                </div>
                
                <!-- Brand 11 -->
                <div class="flex justify-center items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg brand-logo">
                    <img src="https://logos-download.com/wp-content/uploads/2016/02/Lexus_logo_2014.png" alt="Lexus" class="h-12">
                </div>
                
                <!-- Brand 12 -->
                <div class="flex justify-center items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg brand-logo">
                    <img src="https://logos-download.com/wp-content/uploads/2016/02/Chevrolet_Logo_2014.png" alt="Chevrolet" class="h-12">
                </div>
            </div>
            
            <div class="text-center">
                <a href="#contact" class="btn-primary text-white font-bold py-3 px-8 rounded-lg inline-block transition">
                    Inquire About a Brand
                </a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 bg-gray-900">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 section-title">Our Services</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Service 1 -->
                <div class="service-card bg-gray-800 rounded-lg p-6 shadow-lg">
                    <div class="text-red-500 text-center mb-4">
                        <i class="fas fa-car text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-center">Car Sales</h3>
                    <p class="text-gray-300 text-center mb-4">
                        We offer a wide selection of quality pre-owned and new vehicles from top brands to suit every budget and preference.
                    </p>
                    <ul class="text-gray-400 text-sm">
                        <li class="mb-1 flex items-center">
                            <i class="fas fa-check text-red-500 mr-2"></i>
                            New & Pre-owned Vehicles
                        </li>
                        <li class="mb-1 flex items-center">
                            <i class="fas fa-check text-red-500 mr-2"></i>
                            Financing Options Available
                        </li>
                        <li class="mb-1 flex items-center">
                            <i class="fas fa-check text-red-500 mr-2"></i>
                            Vehicle History Reports
                        </li>
                    </ul>
                </div>
                
                <!-- Service 2 -->
                <div class="service-card bg-gray-800 rounded-lg p-6 shadow-lg">
                    <div class="text-red-500 text-center mb-4">
                        <i class="fas fa-tools text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-center">Auto Repairs</h3>
                    <p class="text-gray-300 text-center mb-4">
                        Comprehensive repair services from minor fixes to major overhauls using state-of-the-art equipment.
                    </p>
                    <ul class="text-gray-400 text-sm">
                        <li class="mb-1 flex items-center">
                            <i class="fas fa-check text-red-500 mr-2"></i>
                            Engine & Transmission
                        </li>
                        <li class="mb-1 flex items-center">
                            <i class="fas fa-check text-red-500 mr-2"></i>
                            Brake & Suspension
                        </li>
                        <li class="mb-1 flex items-center">
                            <i class="fas fa-check text-red-500 mr-2"></i>
                            Electrical Systems
                        </li>
                    </ul>
                </div>
                
                <!-- Service 3 -->
                <div class="service-card bg-gray-800 rounded-lg p-6 shadow-lg">
                    <div class="text-red-500 text-center mb-4">
                        <i class="fas fa-cog text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-center">Spare Parts</h3>
                    <p class="text-gray-300 text-center mb-4">
                        Genuine and high-quality spare parts for all vehicle makes and models at competitive prices.
                    </p>
                    <ul class="text-gray-400 text-sm">
                        <li class="mb-1 flex items-center">
                            <i class="fas fa-check text-red-500 mr-2"></i>
                            OEM & Aftermarket Parts
                        </li>
                        <li class="mb-1 flex items-center">
                            <i class="fas fa-check text-red-500 mr-2"></i>
                            Fast Delivery
                        </li>
                        <li class="mb-1 flex items-center">
                            <i class="fas fa-check text-red-500 mr-2"></i>
                            Warranty Included
                        </li>
                    </ul>
                </div>
                
                <!-- Service 4 -->
                <div class="service-card bg-gray-800 rounded-lg p-6 shadow-lg">
                    <div class="text-red-500 text-center mb-4">
                        <i class="fas fa-search text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-center">Vehicle Diagnostics</h3>
                    <p class="text-gray-300 text-center mb-4">
                        Advanced diagnostic services to accurately identify and resolve complex vehicle issues.
                    </p>
                    <ul class="text-gray-400 text-sm">
                        <li class="mb-1 flex items-center">
                            <i class="fas fa-check text-red-500 mr-2"></i>
                            Computerized Diagnostics
                        </li>
                        <li class="mb-1 flex items-center">
                            <i class="fas fa-check text-red-500 mr-2"></i>
                            Performance Tuning
                        </li>
                        <li class="mb-1 flex items-center">
                            <i class="fas fa-check text-red-500 mr-2"></i>
                            Emission Testing
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-16 bg-gray-800">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 section-title">Featured Vehicles</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Vehicle 1 -->
                <div class="car-card bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                             alt="Mercedes-Benz S-Class" class="w-full h-56 object-cover">
                        <div class="gallery-overlay">
                            <h3 class="text-lg font-bold">Mercedes-Benz S-Class</h3>
                            <p class="text-gray-400">2023 Model • Luxury Sedan</p>
                            <p class="text-red-500 font-bold mt-2">₦32,500,000</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-center mb-3">
                            <span class="bg-red-500 text-white text-xs px-2 py-1 rounded">Premium</span>
                            <span class="text-gray-400 text-sm">5,200 miles</span>
                        </div>
                        <div class="car-features">
                            <div class="car-feature">
                                <i class="fas fa-tachometer-alt"></i>
                                <span>3.0L V6 Turbo</span>
                            </div>
                            <div class="car-feature">
                                <i class="fas fa-cogs"></i>
                                <span>Automatic Transmission</span>
                            </div>
                            <div class="car-feature">
                                <i class="fas fa-gas-pump"></i>
                                <span>Hybrid (28 mpg)</span>
                            </div>
                        </div>
                        <button class="w-full mt-4 bg-gray-700 hover:bg-red-500 text-white py-2 rounded transition view-details" 
                                data-vehicle="Mercedes-Benz S-Class" data-price="₦32,500,000">
                            View Details
                        </button>
                        <div class="share-buttons">
                            <button class="share-btn share-whatsapp" data-vehicle="Mercedes-Benz S-Class" data-price="₦32,500,000">
                                <i class="fab fa-whatsapp"></i>
                            </button>
                            <button class="share-btn share-facebook" data-vehicle="Mercedes-Benz S-Class" data-price="₦32,500,000">
                                <i class="fab fa-facebook-f"></i>
                            </button>
                            <button class="share-btn share-twitter" data-vehicle="Mercedes-Benz S-Class" data-price="₦32,500,000">
                                <i class="fab fa-twitter"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Vehicle 2 -->
                <div class="car-card bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                             alt="BMW X5" class="w-full h-56 object-cover">
                        <div class="gallery-overlay">
                            <h3 class="text-lg font-bold">BMW X5</h3>
                            <p class="text-gray-400">2022 Model • Luxury SUV</p>
                            <p class="text-red-500 font-bold mt-2">₦26,800,000</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-center mb-3">
                            <span class="bg-red-500 text-white text-xs px-2 py-1 rounded">AWD</span>
                            <span class="text-gray-400 text-sm">18,400 miles</span>
                        </div>
                        <div class="car-features">
                            <div class="car-feature">
                                <i class="fas fa-tachometer-alt"></i>
                                <span>3.0L I6 Turbo</span>
                            </div>
                            <div class="car-feature">
                                <i class="fas fa-cogs"></i>
                                <span>8-Speed Automatic</span>
                            </div>
                            <div class="car-feature">
                                <i class="fas fa-gas-pump"></i>
                                <span>Premium (22 mpg)</span>
                            </div>
                        </div>
                        <button class="w-full mt-4 bg-gray-700 hover:bg-red-500 text-white py-2 rounded transition view-details" 
                                data-vehicle="BMW X5" data-price="₦26,800,000">
                            View Details
                        </button>
                        <div class="share-buttons">
                            <button class="share-btn share-whatsapp" data-vehicle="BMW X5" data-price="₦26,800,000">
                                <i class="fab fa-whatsapp"></i>
                            </button>
                            <button class="share-btn share-facebook" data-vehicle="BMW X5" data-price="₦26,800,000">
                                <i class="fab fa-facebook-f"></i>
                            </button>
                            <button class="share-btn share-twitter" data-vehicle="BMW X5" data-price="₦26,800,000">
                                <i class="fab fa-twitter"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Vehicle 3 -->
                <div class="car-card bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                             alt="Audi R8" class="w-full h-56 object-cover">
                        <div class="gallery-overlay">
                            <h3 class="text-lg font-bold">Audi R8</h3>
                            <p class="text-gray-400">2021 Model • Sports Car</p>
                            <p class="text-red-500 font-bold mt-2">₦52,000,000</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-center mb-3">
                            <span class="bg-red-500 text-white text-xs px-2 py-1 rounded">Performance</span>
                            <span class="text-gray-400 text-sm">7,800 miles</span>
                        </div>
                        <div class="car-features">
                            <div class="car-feature">
                                <i class="fas fa-tachometer-alt"></i>
                                <span>5.2L V10</span>
                            </div>
                            <div class="car-feature">
                                <i class="fas fa-cogs"></i>
                                <span>7-Speed Automatic</span>
                            </div>
                            <div class="car-feature">
                                <i class="fas fa-gas-pump"></i>
                                <span>Premium (15 mpg)</span>
                            </div>
                        </div>
                        <button class="w-full mt-4 bg-gray-700 hover:bg-red-500 text-white py-2 rounded transition view-details" 
                                data-vehicle="Audi R8" data-price="₦52,000,000">
                            View Details
                        </button>
                        <div class="share-buttons">
                            <button class="share-btn share-whatsapp" data-vehicle="Audi R8" data-price="₦52,000,000">
                                <i class="fab fa-whatsapp"></i>
                            </button>
                            <button class="share-btn share-facebook" data-vehicle="Audi R8" data-price="₦52,000,000">
                                <i class="fab fa-facebook-f"></i>
                            </button>
                            <button class="share-btn share-twitter" data-vehicle="Audi R8" data-price="₦52,000,000">
                                <i class="fab fa-twitter"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Vehicle 4 -->
                <div class="car-card bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                             alt="Toyota Camry" class="w-full h-56 object-cover">
                        <div class="gallery-overlay">
                            <h3 class="text-lg font-bold">Toyota Camry</h3>
                            <p class="text-gray-400">2023 Model • Sedan</p>
                            <p class="text-red-500 font-bold mt-2">₦10,500,000</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-center mb-3">
                            <span class="bg-green-500 text-white text-xs px-2 py-1 rounded">Fuel Efficient</span>
                            <span class="text-gray-400 text-sm">2,100 miles</span>
                        </div>
                        <div class="car-features">
                            <div class="car-feature">
                                <i class="fas fa-tachometer-alt"></i>
                                <span>2.5L I4</span>
                            </div>
                            <div class="car-feature">
                                <i class="fas fa-cogs"></i>
                                <span>CVT Transmission</span>
                            </div>
                            <div class="car-feature">
                                <i class="fas fa-gas-pump"></i>
                                <span>Regular (32 mpg)</span>
                            </div>
                        </div>
                        <button class="w-full mt-4 bg-gray-700 hover:bg-red-500 text-white py-2 rounded transition view-details" 
                                data-vehicle="Toyota Camry" data-price="₦10,500,000">
                            View Details
                        </button>
                        <div class="share-buttons">
                            <button class="share-btn share-whatsapp" data-vehicle="Toyota Camry" data-price="₦10,500,000">
                                <i class="fab fa-whatsapp"></i>
                            </button>
                            <button class="share-btn share-facebook" data-vehicle="Toyota Camry" data-price="₦10,500,000">
                                <i class="fab fa-facebook-f"></i>
                            </button>
                            <button class="share-btn share-twitter" data-vehicle="Toyota Camry" data-price="₦10,500,000">
                                <i class="fab fa-twitter"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Vehicle 5 -->
                <div class="car-card bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                             alt="Honda CR-V" class="w-full h-56 object-cover">
                        <div class="gallery-overlay">
                            <h3 class="text-lg font-bold">Honda CR-V</h3>
                            <p class="text-gray-400">2022 Model • Compact SUV</p>
                            <p class="text-red-500 font-bold mt-2">₦11,200,000</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-center mb-3">
                            <span class="bg-blue-500 text-white text-xs px-2 py-1 rounded">Family</span>
                            <span class="text-gray-400 text-sm">14,500 miles</span>
                        </div>
                        <div class="car-features">
                            <div class="car-feature">
                                <i class="fas fa-tachometer-alt"></i>
                                <span>1.5L Turbo I4</span>
                            </div>
                            <div class="car-feature">
                                <i class="fas fa-cogs"></i>
                                <span>CVT Transmission</span>
                            </div>
                            <div class="car-feature">
                                <i class="fas fa-gas-pump"></i>
                                <span>Regular (30 mpg)</span>
                            </div>
                        </div>
                        <button class="w-full mt-4 bg-gray-700 hover:bg-red-500 text-white py-2 rounded transition view-details" 
                                data-vehicle="Honda CR-V" data-price="₦11,200,000">
                            View Details
                        </button>
                        <div class="share-buttons">
                            <button class="share-btn share-whatsapp" data-vehicle="Honda CR-V" data-price="₦11,200,000">
                                <i class="fab fa-whatsapp"></i>
                            </button>
                            <button class="share-btn share-facebook" data-vehicle="Honda CR-V" data-price="₦11,200,000">
                                <i class="fab fa-facebook-f"></i>
                            </button>
                            <button class="share-btn share-twitter" data-vehicle="Honda CR-V" data-price="₦11,200,000">
                                <i class="fab fa-twitter"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Vehicle 6 -->
                <div class="car-card bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1563720223485-884b06dc2226?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                             alt="Ford Mustang" class="w-full h-56 object-cover">
                        <div class="gallery-overlay">
                            <h3 class="text-lg font-bold">Ford Mustang</h3>
                            <p class="text-gray-400">2023 Model • Sports Car</p>
                            <p class="text-red-500 font-bold mt-2">₦16,800,000</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-center mb-3">
                            <span class="bg-red-500 text-white text-xs px-2 py-1 rounded">Muscle Car</span>
                            <span class="text-gray-400 text-sm">3,200 miles</span>
                        </div>
                        <div class="car-features">
                            <div class="car-feature">
                                <i class="fas fa-tachometer-alt"></i>
                                <span>5.0L V8</span>
                            </div>
                            <div class="car-feature">
                                <i class="fas fa-cogs"></i>
                                <span>10-Speed Automatic</span>
                            </div>
                            <div class="car-feature">
                                <i class="fas fa-gas-pump"></i>
                                <span>Premium (19 mpg)</span>
                            </div>
                        </div>
                        <button class="w-full mt-4 bg-gray-700 hover:bg-red-500 text-white py-2 rounded transition view-details" 
                                data-vehicle="Ford Mustang" data-price="₦16,800,000">
                            View Details
                        </button>
                        <div class="share-buttons">
                            <button class="share-btn share-whatsapp" data-vehicle="Ford Mustang" data-price="₦16,800,000">
                                <i class="fab fa-whatsapp"></i>
                            </button>
                            <button class="share-btn share-facebook" data-vehicle="Ford Mustang" data-price="₦16,800,000">
                                <i class="fab fa-facebook-f"></i>
                            </button>
                            <button class="share-btn share-twitter" data-vehicle="Ford Mustang" data-price="₦16,800,000">
                                <i class="fab fa-twitter"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <a href="#contact" class="btn-primary text-white font-bold py-3 px-8 rounded-lg inline-block transition">
                    View All Vehicles
                </a>
            </div>
        </div>
    </section>

    <!-- Testimonials Section (Hidden on homepage, accessible via navigation) -->
    <section id="testimonials" class="py-16 bg-gray-900" style="display: none;">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 section-title">Customer Testimonials</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="testimonial-card bg-gray-800 rounded-lg p-6 shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            JD
                        </div>
                        <div>
                            <h3 class="font-bold">John Doe</h3>
                            <div class="text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-300">
                        "Chidex Auto provided excellent service when I needed repairs for my SUV. 
                        They were professional, transparent with pricing, and completed the work ahead of schedule."
                    </p>
                    <div class="mt-4 text-sm text-gray-400">
                        <i class="fas fa-car mr-2"></i>BMW X5 Owner
                    </div>
                </div>
                
                <!-- Testimonial 2 -->
                <div class="testimonial-card bg-gray-800 rounded-lg p-6 shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            SJ
                        </div>
                        <div>
                            <h3 class="font-bold">Sarah Johnson</h3>
                            <div class="text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-300">
                        "I purchased my dream car from Chidex Auto Enterprise. The sales process was smooth, 
                        and the vehicle was in perfect condition. Highly recommended!"
                    </p>
                    <div class="mt-4 text-sm text-gray-400">
                        <i class="fas fa-car mr-2"></i>Mercedes-Benz Owner
                    </div>
                </div>
                
                <!-- Testimonial 3 -->
                <div class="testimonial-card bg-gray-800 rounded-lg p-6 shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            MR
                        </div>
                        <div>
                            <h3 class="font-bold">Michael Roberts</h3>
                            <div class="text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-300">
                        "Their spare parts department has everything I need for my car maintenance. 
                        Quality parts at reasonable prices with excellent customer service."
                    </p>
                    <div class="mt-4 text-sm text-gray-400">
                        <i class="fas fa-car mr-2"></i>Toyota Camry Owner
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-bg py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 section-title">Contact Us</h2>
            
            <div class="flex flex-col lg:flex-row">
                <!-- Contact Form -->
                <div class="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                    <form id="contact-form" class="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
                        <div class="mb-4">
                            <label class="block text-gray-300 mb-2" for="name">Full Name</label>
                            <input type="text" id="name" class="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required>
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-300 mb-2" for="email">Email Address</label>
                            <input type="email" id="email" class="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required>
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-300 mb-2" for="phone">Phone Number</label>
                            <input type="tel" id="phone" class="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required>
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-300 mb-2" for="interest">Interest</label>
                            <select id="interest" class="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required>
                                <option value="">Select an option</option>
                                <option value="car-sales">Car Sales</option>
                                <option value="repairs">Auto Repairs</option>
                                <option value="parts">Spare Parts</option>
                                <option value="diagnostics">Vehicle Diagnostics</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-300 mb-2" for="message">Message</label>
                            <textarea id="message" rows="5" class="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required></textarea>
                        </div>
                        
                        <button type="submit" class="btn-primary text-white font-bold py-3 px-6 rounded-lg w-full transition">
                            Send Message via WhatsApp
                        </button>
                    </form>
                </div>
                
                <!-- Contact Info & Map -->
                <div class="lg:w-1/2">
                    <div class="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg mb-6">
                        <h3 class="text-xl font-bold mb-4">Contact Information</h3>
                        
                        <div class="flex items-center mb-3">
                            <i class="fas fa-map-marker-alt text-red-500 mr-3"></i>
                            <p>Utakpo, Abuja, Nigeria</p>
                        </div>
                        
                        <div class="flex items-center mb-3">
                            <i class="fas fa-phone text-red-500 mr-3"></i>
                            <p>+234 706 375 8013</p>
                        </div>
                        
                        <div class="flex items-center mb-3">
                            <i class="fab fa-whatsapp text-red-500 mr-3"></i>
                            <p>+234 706 375 8013</p>
                        </div>
                        
                        <div class="flex items-center mb-3">
                            <i class="fas fa-envelope text-red-500 mr-3"></i>
                            <p>info@chidexauto.com</p>
                        </div>
                        
                        <div class="mt-6">
                            <h4 class="font-bold mb-2">Business Hours</h4>
                            <div class="text-gray-300 text-sm">
                                <p class="flex justify-between"><span>Monday - Friday:</span> <span>8:00 AM - 6:00 PM</span></p>
                                <p class="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 4:00 PM</span></p>
                                <p class="flex justify-between"><span>Sunday:</span> <span>Closed</span></p>
                            </div>
                        </div>
                        
                        <button id="show-map" class="direction-btn mt-4">
                            <i class="fas fa-map-marker-alt mr-2"></i>Show Directions
                        </button>
                        
                        <div class="flex space-x-4 mt-6">
                            <a href="#" class="text-gray-300 hover:text-red-500 transition">
                                <i class="fab fa-facebook-f text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-300 hover:text-red-500 transition">
                                <i class="fab fa-instagram text-xl"></i>
                            </a>
                            <a href="https://wa.me/2347063758013" class="text-gray-300 hover:text-red-500 transition">
                                <i class="fab fa-whatsapp text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-300 hover:text-red-500 transition">
                                <i class="fab fa-twitter text-xl"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Map Container -->
                    <div id="map-container" class="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg h-64 flex items-center justify-center" style="display: none;">
                        <div class="text-center">
                            <i class="fas fa-map-marked-alt text-4xl mb-3 text-red-500"></i>
                            <p class="text-gray-400">Location: Utakpo, Abuja, Nigeria</p>
                            <a href="https://www.google.com/maps/dir//Utakpo+Abuja+Nigeria" target="_blank" class="direction-btn inline-block mt-4">
                                <i class="fas fa-directions mr-2"></i>Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <div class="flex items-center">
                        <div class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-2">
                            <i class="fas fa-car text-white"></i>
                        </div>
                        <span class="text-xl font-bold">Chidex Auto Enterprise</span>
                    </div>
                    <p class="text-gray-400 text-sm mt-2">Your Trusted Partner in Auto Solutions</p>
                </div>
                
                <div class="flex space-x-6">
                    <a href="#" class="text-gray-300 hover:text-red-500 transition">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="text-gray-300 hover:text-red-500 transition">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/2347063758013" class="text-gray-300 hover:text-red-500 transition">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="#" class="text-gray-300 hover:text-red-500 transition">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
            
            <div class="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
                <p>Copyright © 2025 Chidex Auto Enterprise | All Rights Reserved</p>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        // Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        const themeToggleMobile = document.getElementById('theme-toggle-mobile');
        const currentTheme = localStorage.getItem('theme') || 'dark';
        
        // Set initial theme
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme);
        
        function updateThemeIcon(theme) {
            const icon = theme === 'dark' ? 'fa-moon' : 'fa-sun';
            themeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
            themeToggleMobile.innerHTML = `<i class="fas ${icon}"></i>`;
        }
        
        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        }
        
        themeToggle.addEventListener('click', toggleTheme);
        themeToggleMobile.addEventListener('click', toggleTheme);

        // Stats counter animation
        function animateCounters() {
            const counters = document.querySelectorAll('.stats-counter');
            const speed = 200;
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-count');
                const count = +counter.innerText;
                const increment = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(animateCounters, 1);
                } else {
                    counter.innerText = target;
                }
            });
        }

        // Initialize counters when section is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        });

        const statsSection = document.querySelector('.feature-highlight');
        if (statsSection) {
            observer.observe(statsSection);
        }

        // WhatsApp form submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const interest = document.getElementById('interest').value;
            const message = document.getElementById('message').value;
            
            const whatsappMessage = `Hello Chidex Auto Enterprise!%0A%0A*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Interest:* ${interest}%0A*Message:* ${message}`;
            
            const whatsappURL = `https://wa.me/2347063758013?text=${whatsappMessage}`;
            
            window.open(whatsappURL, '_blank');
        });

        // Show testimonials when navigation link is clicked
        document.querySelectorAll('a[href="#testimonials"]').forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('testimonials').style.display = 'block';
            });
        });

        // Show map when direction button is clicked
        document.getElementById('show-map').addEventListener('click', function() {
            const mapContainer = document.getElementById('map-container');
            if (mapContainer.style.display === 'none') {
                mapContainer.style.display = 'flex';
                this.innerHTML = '<i class="fas fa-times mr-2"></i>Hide Map';
            } else {
                mapContainer.style.display = 'none';
                this.innerHTML = '<i class="fas fa-map-marker-alt mr-2"></i>Show Directions';
            }
        });

        // Vehicle sharing functionality
        document.querySelectorAll('.share-btn').forEach(button => {
            button.addEventListener('click', function() {
                const vehicle = this.getAttribute('data-vehicle');
                const price = this.getAttribute('data-price');
                const pageURL = window.location.href.split('#')[0] + '#gallery';
                
                let shareURL = '';
                let shareText = `Check out this ${vehicle} at Chidex Auto Enterprise for ${price}!`;
                
                if (this.classList.contains('share-whatsapp')) {
                    shareURL = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + pageURL)}`;
                } else if (this.classList.contains('share-facebook')) {
                    shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageURL)}&quote=${encodeURIComponent(shareText)}`;
                } else if (this.classList.contains('share-twitter')) {
                    shareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageURL)}`;
                }
                
                if (shareURL) {
                    window.open(shareURL, '_blank', 'width=600,height=400');
                }
            });
        });

        // View details button functionality
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', function() {
                const vehicle = this.getAttribute('data-vehicle');
                const price = this.getAttribute('data-price');
                
                const message = `Hello Chidex Auto Enterprise! I'm interested in the ${vehicle} priced at ${price}. Can you provide more details?`;
                const whatsappURL = `https://wa.me/2347063758013?text=${encodeURIComponent(message)}`;
                
                window.open(whatsappURL, '_blank');
            });
        });
    </script>
</body>
</html>mm