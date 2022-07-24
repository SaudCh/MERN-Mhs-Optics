import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = (user) => {
        setUser(user)
        setIsLoggedIn(true)
    }

    const logout = () => {
        setUser(null)
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const { user, login, logout, isLoggedIn } = useContext(AuthContext)

    return {
        user,
        login,
        logout,
        isLoggedIn
    }
}

export { AuthProvider, useAuth }