import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase/config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const Settings = () => {
    const { currentUser } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            if (currentUser) {
                try {
                    const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setName(userData.name || currentUser.displayName || '');
                        setEmail(userData.email || currentUser.email || '');
                        setPhotoURL(userData.photoURL || currentUser.photoURL || '');
                    } else {
                        // If user document doesn't exist, use auth data
                        setName(currentUser.displayName || '');
                        setEmail(currentUser.email || '');
                        setPhotoURL(currentUser.photoURL || '');
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    setEmail(currentUser.email || '');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchUserData();
    }, [currentUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!currentUser) return;

        try {
            setSaving(true);
            setMessage('');
            
            // Update Firestore user document
            await updateDoc(doc(db, 'users', currentUser.uid), {
                name: name,
                email: email,
                photoURL: photoURL || currentUser.photoURL || '',
                updatedAt: new Date()
            });

            setMessage('Settings updated successfully!');
        } catch (error) {
            console.error('Error updating settings:', error);
            setMessage('Failed to update settings. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div>
                <h1 style={{ color: '#333', marginBottom: '2rem' }}>Settings</h1>
                <div style={cardStyle}>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1 style={{ color: '#333', marginBottom: '2rem' }}>Settings</h1>
            <div style={cardStyle}>
                <h2 style={cardTitleStyle}>Account Information</h2>
                {message && (
                    <div style={{
                        padding: '0.75rem',
                        borderRadius: '8px',
                        marginBottom: '1rem',
                        background: message.includes('success') ? '#d4edda' : '#f8d7da',
                        color: message.includes('success') ? '#155724' : '#721c24',
                        fontSize: '0.9rem'
                    }}>
                        {message}
                    </div>
                )}
                {photoURL && (
                    <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                        <img 
                            src={photoURL} 
                            alt="Profile" 
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '3px solid #1890ff'
                            }}
                        />
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <label style={labelStyle}>Name</label>
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={inputStyle} 
                    />
                    <label style={labelStyle}>Email</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={inputStyle} 
                    />
                    <button 
                        type="submit" 
                        disabled={saving}
                        style={{...buttonStyle, opacity: saving ? 0.7 : 1}}
                    >
                        {saving ? 'Updating...' : 'Update Settings'}
                    </button>
                </form>
            </div>
        </div>
    );
};

const cardStyle = {
    background: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
};

const cardTitleStyle = {
    marginTop: 0,
    color: '#333'
};

const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#555'
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
    width: 'auto',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    border: 'none',
    background: '#1890ff',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer'
};

export default Settings;
