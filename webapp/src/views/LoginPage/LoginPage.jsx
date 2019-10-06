import React, { Component } from 'react';
import LoginForm from '../../components/Login/LoginForm.jsx';
import Footer from "../../components/Footer/Footer";

class LoginPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <br/>
                    <LoginForm />
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default LoginPage; 