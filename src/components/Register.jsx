import React from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some((user) => user.username === values.username);
        if (userExists) {
            message.error('Username already exists');
        } else {
            users.push(values);
            localStorage.setItem('users', JSON.stringify(users));
            message.success('Registration successful');
            navigate('/login');
        }
    };

    const goToLogin = () => {
        navigate('/login');
    };

    return (
        <Card className="auth-card" title="Register" headStyle={{ textAlign: 'center', backgroundColor: '#f0f2f5' }}>
            <Form form={form} name="register" onFinish={onFinish}>
                <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input placeholder="Username" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Register
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="link" onClick={goToLogin} block>
                        Already have an account? Login now
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default Register;