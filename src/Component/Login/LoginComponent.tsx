import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Login.scss'

export class Login extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state ={
            username: "",
            password: "",
            err_message: ""
        }
        this.onLogin= this.onLogin.bind(this);
    }

    onLogin(){
        console.log('username: ' + this.state.username + 'password: ' + this.state.password )
    }

    render(){
        return(
            <div className= "login_container">
                <Row>
                    <Col>
                        <label>Username</label>
                    </Col>
                    <Col>
                        <input type="text" name="username" value= {this.state.username} onChange={(e) => {
                            this.setState({username: e.target.value})
                        }}></input>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <label>Password</label>
                    </Col>
                    <Col>
                        <input type="Password" name="pwd" value= {this.state.password} onChange={(e)=> {
                            this.setState({password: e.target.value})
                        }}></input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={this.onLogin}>Login</button>
                    </Col>
                </Row>
            </div>
        )
    }
        
}