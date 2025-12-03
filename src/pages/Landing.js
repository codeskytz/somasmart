import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaBrain, FaBolt, FaBullseye } from 'react-icons/fa';
import './Landing.css';

const Landing = () => {
    const { currentUser } = useAuth();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    if (currentUser) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <div className="landing-container">
            <div className={`landing-content ${isVisible ? 'fade-in' : ''}`}>
                {/* Logo Section */}
                <div className="logo-container">
                    <img 
                        src="/somasmart.png" 
                        alt="SomaSmart Logo" 
                        className="logo-image"
                    />
                </div>

                {/* Main Heading */}
                <h1 className="landing-title">
                    <span className="title-word title-word-1">Soma</span>
                    <span className="title-word title-word-2">Smart</span>
                </h1>

                {/* Tagline */}
                <p className="landing-tagline">
                    #empower your education
                </p>

                {/* Description */}
                <p className="landing-description">
                    Your personal AI-powered study partner. Enhance your learning, 
                    get instant help, and achieve your academic goals.
                </p>

                {/* CTA Buttons */}
                <div className="cta-buttons">
                    <Link 
                        to="/auth/login" 
                        className="cta-button cta-primary"
                    >
                        <span>Get Started</span>
                    </Link>
                    <Link 
                        to="/auth/signup" 
                        className="cta-button cta-secondary"
                    >
                        <span>Sign Up</span>
                    </Link>
                </div>

                {/* Features Grid */}
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <FaBrain />
                        </div>
                        <h3 className="feature-title">AI-Powered</h3>
                        <p className="feature-text">Smart learning assistance</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <FaBolt />
                        </div>
                        <h3 className="feature-title">Instant Help</h3>
                        <p className="feature-text">Get answers quickly</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <FaBullseye />
                        </div>
                        <h3 className="feature-title">Goal Focused</h3>
                        <p className="feature-text">Achieve your targets</p>
                    </div>
                </div>
            </div>

            {/* Animated Background Elements */}
            <div className="bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </div>
    );
};

export default Landing;
