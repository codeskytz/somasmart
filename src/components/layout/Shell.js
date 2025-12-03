import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Shell = ({ children }) => {
    const location = useLocation();
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const navLinks = [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/assistant', label: 'AI Assistant' },
        { path: '/courses', label: 'Courses' },
        { path: '/settings', label: 'Settings' },
    ];

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error('Failed to log out:', error);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f0f2f5' }}>
            <header style={{ background: 'white', padding: '0 2rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' }}>
                    <Link to="/dashboard" style={{ textDecoration: 'none', color: '#333', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        SomaSmartAI
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
                            {navLinks.map(link => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            textDecoration: 'none',
                                            color: location.pathname === link.path ? '#1890ff' : '#333',
                                            fontWeight: location.pathname === link.path ? 'bold' : 'normal',
                                            padding: '0.5rem 0',
                                            borderBottom: location.pathname === link.path ? '2px solid #1890ff' : 'none'
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            {currentUser && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    {currentUser.photoURL && (
                                        <img 
                                            src={currentUser.photoURL} 
                                            alt="Profile" 
                                            style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '50%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    )}
                                    <span style={{ color: '#666', fontSize: '0.9rem' }}>
                                        {currentUser.displayName || currentUser.email}
                                    </span>
                                </div>
                            )}
                            <button
                                onClick={handleLogout}
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '6px',
                                    border: 'none',
                                    background: '#ff4d4f',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem'
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            <main style={{ flex: 1, padding: '2rem' }}>
                {children}
            </main>
        </div>
    );
};

export default Shell;
