import React from 'react';
import {Row, Col } from 'react-bootstrap';
import './Login.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Login extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        sessionStorage.clear()
        this.state ={
            username: "",
            password: "",
            message:"",
            username_valid: false,
            pswd_valid: false
        }
        this.onlogin = this.onlogin.bind(this);
        this.onclear = this.onclear.bind(this);
    }

    onlogin(){
        console.log('username: ' + this.state.username + 'password: ' + this.state.password )
        if(this.state.username === ""){
            this.setState({
                username_valid: true
            })
        }

        if(this.state.password === ""){
            this.setState({
                pswd_valid: true
            })
        }

        if(this.state.username != "" && this.state.password != "" ){
            axios.get("http://localhost:3000/user_details/1",{
            }).then((res:any)=>{
                // console.log(res.data.data);
                if(res.status ===200){
                    sessionStorage.setItem("userinfo",JSON.stringify(res.data))
                    this.props.history.push('/home')
                }
            })
        }   
       
    }

    onclear(){
        this.setState({pswd_valid: false,
                       username_valid: false,
                       username: "",
                       password: ""
        })
    }

    render(){
        return(
            <div className="login-container">
                <Row>
                    <Col>
                        <label>Username<span className="mandotry">*</span> :</label> 
                    </Col>
                    <Col>
                        <input value={this.state.username} onChange={(e)=>{
								this.setState({username:e.target.value})
                        }}></input>
                    </Col>
                </Row>
                <Row>
                    <Col className="error-msg">{this.state.username_valid ? "Please enter the username...!":""}</Col>
                </Row>
                <Row>
                    <Col>
                        <label>Password<span className="mandotry">*</span> :</label> 
                    </Col>
                    <Col>
                      <input type="password" value={this.state.password} onChange={(e)=>{
                            this.setState({password:e.target.value})
                        }}></input>
                    </Col>
                </Row>
                <Row>
                    <Col className="error-msg">{this.state.pswd_valid  ? "Please enter the password...!":""}</Col>
                </Row>
                <Row>
                    <div>
                        <button onClick={this.onclear}>Clear</button>
                        <button onClick={this.onlogin}>Login</button>
                    </div>
                </Row>
                <Col className="error-msg">
                    {this.state.message}
                </Col>
                <Row>
                    <Col>
                        <Link to="/register">Create new user!</Link>
                    </Col>
                </Row>
            </div>
        )
    }
}