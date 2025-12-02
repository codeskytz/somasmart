import React from 'react';

const Courses = () => {
    return (
        <div>
            <h1 style={{ color: '#333', marginBottom: '2rem' }}>Your Courses</h1>
            <div style={cardStyle}>
                <h2 style={cardTitleStyle}>Enrolled Courses</h2>
                <p>You are not yet enrolled in any courses.</p>
                 <button style={{
                    marginTop: '1rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#1890ff',
                    color: 'white',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>Browse Courses</button>
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

export default Courses;
