import React, {createContext, useState, useContext} from 'react';

// Oturum durumu için bir context oluşturun
const AuthContext = createContext();

// Context içinde kullanılacak bir özel hook
export const useAuth = () => useContext(AuthContext);

// AuthProvider bileşeni, tüm uygulama içinde oturum durumu sağlar
export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({})

    // Giriş yapma işlemi
    const login = (token = null, userData = {}) => {
        setIsLoggedIn(true);
        // Oturum durumunu yerel depolamada saklayabilirsiniz
        localStorage.setItem('token', token)
        setUser(userData)
    };

    // Çıkış yapma işlemi
    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};