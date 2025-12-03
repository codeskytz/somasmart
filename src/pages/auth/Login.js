import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const { login, signInWithGoogle, currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    if (currentUser) {
        return <Navigate to="/dashboard" replace />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError(err.message || 'Failed to log in');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            setError('');
            setGoogleLoading(true);
            await signInWithGoogle();
            navigate('/dashboard');
        } catch (err) {
            setError(err.message || 'Failed to sign in with Google');
        } finally {
            setGoogleLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className={`auth-content ${isVisible ? 'fade-in' : ''}`}>
                <div className="auth-card">
                    {/* Logo */}
                    <div className="auth-logo-container">
                        <img 
                            src="/somasmart.png" 
                            alt="SomaSmart Logo" 
                            className="auth-logo"
                        />
                    </div>

                    {/* Title */}
                    <h2 className="auth-title">
                        Login to <span className="title-highlight">SomaSmart</span>
                    </h2>

                    {/* Error Message */}
                    {error && (
                        <div className="auth-error">
                            {error}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="auth-form">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="auth-input"
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="auth-input"
                        />
                        <button 
                            type="submit" 
                            disabled={loading || googleLoading}
                            className="auth-button auth-button-primary"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="auth-divider">
                        <div className="auth-divider-line"></div>
                        <span className="auth-divider-text">OR</span>
                        <div className="auth-divider-line"></div>
                    </div>

                    {/* Google Sign In */}
                    <button 
                        onClick={handleGoogleSignIn}
                        disabled={loading || googleLoading}
                        className="auth-button auth-button-google"
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                                <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                                <path d="M9 18c2.43 0 4.467-.806 5.965-2.18l-2.908-2.258c-.806.54-1.837.86-3.057.86-2.35 0-4.34-1.587-5.053-3.72H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
                                <path d="M3.947 10.702c-.18-.54-.282-1.117-.282-1.702s.102-1.162.282-1.702V4.968H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.032l2.99-2.33z" fill="#FBBC05"/>
                                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.968L3.947 7.3C4.66 5.163 6.65 3.58 9 3.58z" fill="#EA4335"/>
                            </g>
                        </svg>
                        {googleLoading ? 'Signing in...' : 'Continue with Google'}
                    </button>

                    {/* Link to Signup */}
                    <p className="auth-link">
                        Don't have an account? <Link to="/auth/signup">Sign Up</Link>
                    </p>
                </div>
            </div>

            {/* Animated Background Elements */}
            <div className="auth-bg-shapes">
                <div className="auth-shape auth-shape-1"></div>
                <div className="auth-shape auth-shape-2"></div>
                <div className="auth-shape auth-shape-3"></div>
            </div>
        </div>
    );
};

export default Login;
