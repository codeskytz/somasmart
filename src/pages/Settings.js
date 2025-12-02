import React from 'react';

const Settings = () => {
    return (
        <div>
            <h1 style={{ color: '#333', marginBottom: '2rem' }}>Settings</h1>
            <div style={cardStyle}>
                <h2 style={cardTitleStyle}>Account Information</h2>
                <form>
                     <label style={labelStyle}>Name</label>
                    <input type="text" defaultValue="John Doe" style={inputStyle} />
                     <label style={labelStyle}>Email</label>
                    <input type="email" defaultValue="john.doe@example.com" style={inputStyle} />
                     <button type="submit" style={buttonStyle}>Update Settings</button>
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
