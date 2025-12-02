import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Shell = ({ children }) => {
    const location = useLocation();

    const navLinks = [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/assistant', label: 'AI Assistant' },
        { path: '/courses', label: 'Courses' },
        { path: '/settings', label: 'Settings' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f0f2f5' }}>
            <header style={{ background: 'white', padding: '0 2rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' }}>
                    <Link to="/dashboard" style={{ textDecoration: 'none', color: '#333', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        SomaSmartAI
                    </Link>
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
                </nav>
            </header>
            <main style={{ flex: 1, padding: '2rem' }}>
                {children}
            </main>
        </div>
    );
};

export default Shell;
