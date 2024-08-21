import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [isForgotPasswordMode, setIsForgotPasswordMode] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const BASE_URL = 'http://localhost:8080/api/auth'; // Update this with your backend URL

    // Function to handle form submissions for login/signup
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent the form from submitting the default way
        setError(null);      // Reset any previous error messages
        setSuccessMessage(null); // Reset any previous success messages

        const endpoint = isLoginMode ? `${BASE_URL}/login` : `${BASE_URL}/register`;

        try {
            // Prepare the payload
            const payload = { username, password };

            // Make the POST request to either login or register
            const response = await axios.post(endpoint, payload);

            if (isLoginMode) {
                localStorage.setItem('token', response.data.token);
                setSuccessMessage('Logged in successfully!');
            } else {
                setSuccessMessage('Signed up successfully! You can now log in.');
            }
        } catch (error) {
            // Handle any errors from the backend
            const errorMessage = error.response 
                ? error.response.data.message || error.response.data  // Extract error message if present
                : 'An error occurred. Please try again';
            setError(errorMessage);
        }
    };

    // Function to handle forgot password submission
    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        try {
            const response = await axios.post(`${BASE_URL}/forgot-password`, {
                email,
            });
            setSuccessMessage('Check your email for a password reset link.');
            setIsForgotPasswordMode(false);
        } catch (error) {
            const errorMessage = error.response 
                ? error.response.data.message || error.response.data 
                : 'An error occurred. Please try again.';
            setError(errorMessage);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>{isLoginMode ? 'Log In' : 'Sign Up'}</h2>
            {isForgotPasswordMode ? (
                <form onSubmit={handleForgotPassword}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Send Reset Link</button>
                    <p>
                        Remembered your password?
                        <span 
                            style={{ cursor: 'pointer', color: 'blue', marginLeft: '5px' }}
                            onClick={() => {
                                setIsForgotPasswordMode(false);
                                setError(null);
                                setSuccessMessage(null);
                            }}
                        >
                            Back to {isLoginMode ? 'Log In' : 'Sign Up'}
                        </span>
                    </p>
                </form>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">{isLoginMode ? 'Log In' : 'Sign Up'}</button>
                    <p>
                        {isLoginMode ? 'Need an account?' : 'Already have an account?'}
                        <span
                            style={{ cursor: 'pointer', color: 'blue', marginLeft: '5px' }}
                            onClick={() => setIsLoginMode(!isLoginMode)}
                        >
                            {isLoginMode ? 'Sign Up' : 'Log In'}
                        </span>
                    </p>
                    <p>
                        <span
                            style={{ cursor: 'pointer', color: 'blue' }}
                            onClick={() => setIsForgotPasswordMode(true)}
                        >
                            Forgot Password?
                        </span>
                    </p>
                </form>
            )}
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        </div>
    );
};

export default Signup;