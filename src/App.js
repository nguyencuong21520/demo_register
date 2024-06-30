import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import "./App.css";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));

  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo">MyApp</div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "50px 50px", marginTop: 64 }}>
          <div className="site-layout-content">
            <Routes>
              <Route
                path="/login"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route path="/register" element={<Register />} />
              <Route
                path="/home"
                element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
              />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          MyApp ©2024 Created by MyTeam
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
