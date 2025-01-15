import React, { createContext, useContext, useState } from 'react';
import { useAuth } from '../hooks/AuthContext';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        const credentials = btoa(`${username}:${password}`); // Кодируем учетные данные в Base64
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST', // Или 'POST', в зависимости от вашего API
                headers: {
                    'Authorization': `Basic ${credentials}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
                // Здесь можно добавить логику для сохранения токена и т.д.
            } else {
                // Обработка ошибок
                console.error('Ошибка входа:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка сети:', error);
        }
    };

    const logout = () => {
        setUser(null);
        // Здесь можно добавить логику для удаления токена и т.д.
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};