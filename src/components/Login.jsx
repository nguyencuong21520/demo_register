import React from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = ({ setIsLoggedIn }) => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(
            (user) => user.username === values.username && user.password === values.password
        );
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            setIsLoggedIn(true);
            navigate('/home');
        } else {
            message.error('Invalid username or password');
        }
    };

    const goToRegister = () => {
        navigate('/register');
    };

    return (
        <Card className="auth-card" title="Login" headStyle={{ textAlign: 'center', backgroundColor: '#f0f2f5' }}>
            <Form form={form} name="login" onFinish={onFinish}>
                <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input placeholder="Username" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Login
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="link" onClick={goToRegister} block>
                        Don't have an account? Register now
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default Login;