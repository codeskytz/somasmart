import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: '#f0f2f5'
        }}>
            <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                width: '100%',
                maxWidth: '400px',
                textAlign: 'center'
            }}>
                <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>Create your SomaSmartAI Account</h2>
                <form>
                    <input type="text" placeholder="Full Name" style={inputStyle} />
                    <input type="email" placeholder="Email" style={inputStyle} />
                    <input type="password" placeholder="Password" style={inputStyle} />
                    <button type="submit" style={buttonStyle}>Sign Up</button>
                </form>
                <p style={{ marginTop: '1rem', color: '#555' }}>
                    Already have an account? <Link to="/auth/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    boxSizing: 'border-box'
};

const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '8px',
    border: 'none',
    background: '#1890ff',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer'
};

export default Signup;
