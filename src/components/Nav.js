import React from 'react'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
    }
    const goToHome = () => {
        navigate('/')
    }
    return (
        <nav style={{ background: "mediumblue", width: "100%", padding: '3rem', position: "fixed", top: 0 }}>
            <a style={{ textDecoration: "none", color: "white", fontSize: "xx-large", cursor: "pointer" }} onClick={goToHome}>Home</a>
            <a style={{ textDecoration: "none", color: "white", float: "right", fontSize: "xx-large", cursor: "pointer" }} onClick={goToLogin}>Login</a>
        </nav>
    )
}

export default Nav