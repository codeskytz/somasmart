import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1 style={{ color: '#333', marginBottom: '2rem' }}>Your Dashboard</h1>
            <div style={cardStyle}>
                <h2 style={cardTitleStyle}>Welcome Back!</h2>
                <p>Here you can see an overview of your recent activity and progress.</p>
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

export default Dashboard;
