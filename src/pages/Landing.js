import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'linear-gradient(to bottom, #ffffff, #f0f2f5)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{ fontSize: '3.5rem', color: '#333', marginBottom: '1rem' }}>SomaSmartAI</h1>
            <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '2rem', maxWidth: '600px' }}>
                Your personal AI-powered study partner. Enhance your learning, get instant help, and achieve your academic goals.
            </p>
            <div>
                <Link to="/auth/login" style={{
                    textDecoration: 'none',
                    background: '#1890ff',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    margin: '0 0.5rem',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    Login
                </Link>
                <Link to="/auth/signup" style={{
                    textDecoration: 'none',
                    background: 'white',
                    color: '#1890ff',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    margin: '0 0.5rem',
                    fontWeight: 'bold',
                    border: '1px solid #1890ff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default Landing;
