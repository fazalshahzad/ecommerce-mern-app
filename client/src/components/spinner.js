import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Spinner = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => prevValue - 1);
        }, 1000);

        if (count === 0) {
            navigate('/');
        }

        return () => clearInterval(interval);
    }, [count, navigate]);

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <h1 className="text-center">
                Login First Redirecting in {count} seconds
            </h1>
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    );
};

export default Spinner;
