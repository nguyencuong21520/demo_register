import React from 'react';
import { Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Home = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <Card className="auth-card" title="Home" headStyle={{ textAlign: 'center', backgroundColor: '#f0f2f5' }}>
            <h1> {`Welcome Home! ${user.username}`}</h1>
            <Button type="primary" onClick={logout} block>
                Logout
            </Button>
        </Card>
    );
};

export default Home;