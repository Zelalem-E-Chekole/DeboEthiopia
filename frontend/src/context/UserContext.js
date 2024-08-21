import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (username, password) => {
        const response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token); // Store JWT token in local storage
            setUser(data.user); // Set user data after successful login
        } else {
            throw new Error('Login failed');
        }
    };

    const logout = () => {
        localStorage.removeItem('token'); // Clear token on logout
        setUser(null);
    };

    useEffect(() => {
        const checkUser = async () => {
            const token = localStorage.getItem('token'); // Retrieve the token
            if (!token) {
                setLoading(false);
                return;
            }

            const response = await fetch('http://localhost:8080/api/auth/user', {
                headers: {
                    'Authorization': `Bearer ${token}`, // Attach the token
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data);
            }
            setLoading(false); // Finish loading regardless of the request outcome
        };

        checkUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

const useUserContext = () => {
    return useContext(UserContext);
};

export { UserProvider, useUserContext };