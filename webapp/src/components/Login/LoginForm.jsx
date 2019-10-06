import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-bootstrap'
//app imports
import TextFieldGroup from '../TextFieldGroup/TextFieldGroup';
import validateInput from '../../validations/login';
import { loginJWT } from '../users/api/actions';
import { routes } from '../../setup/routes';

import logo2 from "../../assets/img/default-avatar.png";

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            identifier:'',
            password: '',
            errors:{},
            isLoading: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    componentWillMount(){
        const { isAuthenticated } = this.props.auth;
        if (isAuthenticated){
            this.context.router.history.push(routes.dashboard);
        }
    }

    isValid(){
        const{errors, isValid}=validateInput(this.state);
        if(!isValid){
            this.setState({errors});   
        }
        
        return isValid;
    }

    onSubmit(event){
        event.preventDefault();

        if (this.isValid()){
            console.log(`this state: ${this.state.identifier} password: ${this.state.password}`);
            
            this.setState({errors: {}, isLoading: true});
            this.props.loginJWT(this.state)
            .then(
                (res) => {
                    this.context.router.history.push(routes.dashboard)
                },
                (err) => {                    
                    this.setState({errors: err.response.data.errors, isLoading: false})
                }
            );
        }
    }

    onChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    render(){

        const imgStyle = {
            width: '50%',
            marginLeft: '25%'
        }

        const {errors, identifier, password, isLoading}=this.state;
        return(
            <div className="content">
                <Grid>
                    <Row>
                        <Col md={6}>
                            <div className="jumbotron jumbotron-fluid">
                                <div className="jumbotron">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="logo-img">
                                            <img style={imgStyle} src={logo2} alt="logo_image" />
                                        </div>
                                        <h1 align="center" className="display-4">Login</h1>

                                        {errors.form && <div className="alert alert-danger">{errors.form}</div>}

                                        <TextFieldGroup
                                            field="identifier"
                                            label="Email"
                                            value={identifier}
                                            error={errors.identifier}
                                            onChange={this.onChange}
                                        />

                                        <TextFieldGroup
                                            field="password"
                                            label="Password"
                                            value={password}
                                            error={errors.password}
                                            type="password"
                                            onChange={this.onChange}
                                        />

                                        <div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

LoginForm.propTypes = {
    auth: PropTypes.object.isRequired,
    loginJWT: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { loginJWT }) (LoginForm);