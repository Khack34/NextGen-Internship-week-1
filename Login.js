import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            if (email === 'test@example.com' && password === 'password123') {
                localStorage.setItem('user', JSON.stringify({ username: 'Test User', token: 'fake-jwt-token' }));
                navigate('/dashboard');
            } else {
                setError('Invalid email or password.');
            }
            setLoading(false);
        }, 1500);
    };

    const isEmailValid = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {!isEmailValid(email) && email && (
                        <small className="text-danger">Please enter a valid email address.</small>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {password.length < 6 && password && (
                        <small className="text-danger">Password should be at least 6 characters long.</small>
                    )}
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            {error && <p className="text-danger mt-3">{error}</p>}
            <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
    );
};

export default Login;
