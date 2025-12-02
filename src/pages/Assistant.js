import React from 'react';

const Assistant = () => {
    return (
        <div>
            <h1 style={{ color: '#333', marginBottom: '2rem' }}>AI Study Assistant</h1>
            <div style={cardStyle}>
                <h2 style={cardTitleStyle}>How can I help you today?</h2>
                <textarea
                    placeholder="Ask a question, get help with a concept, or practice a topic..."
                    style={{
                        width: '100%',
                        minHeight: '150px',
                        padding: '1rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        boxSizing: 'border-box',
                        resize: 'vertical'
                    }}
                />
                 <button style={{
                    marginTop: '1rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#1890ff',
                    color: 'white',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>Ask Assistant</button>
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

export default Assistant;
