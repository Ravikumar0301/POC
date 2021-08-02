import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Register.scss';

export class Register extends React.Component <any,any>{
    constructor(props:any){
        super(props)
            this.state = {
                fullname: '', age: '',email: '',username:'', pswd:'',confirm_pswd:'',api_err_msg:'',
                fullname_valid:false,age_valid:false,email_valid:false,username_valid:false,pswd_valid:false,
                cnfrm_pswd_valid:false,confirm_pswd_errmsg:''
            }
            this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(){
        if(this.state.fullname === ""){
              this.setState({fullname_valid:true})  
        }
        if(this.state.age === ""){
            this.setState({age_valid:true})  
        }
        if(this.state.email === ""){
            this.setState({email_valid:true})  
        }
        if(this.state.username === ""){
            this.setState({username_valid:true})  
        }
        if(this.state.pswd === ""){
            this.setState({pswd_valid:true})  
        }
        if(this.state.confirm_pswd === ""){
            this.setState({cnfrm_pswd_valid:true,confirm_pswd_errmsg: "Please enter the confirm password...!"})  
        } else if(this.state.confirm_pswd !== this.state.pswd) {
            this.setState({cnfrm_pswd_valid:true,confirm_pswd_errmsg: "Cofirm password does not matched with original password...!"})  
        }

    }

    render(){
        return(
            <div className="register-container">
                <Row>
                    <Col>
                        <label>Full Name<span className="mandotry">*</span>:</label>
                    </Col>
                    <Col>
                        <input value = {this.state.fullname} type= "text"  onChange={(e)=>{
								this.setState({fullname:e.target.value})}}
                        onFocus = {() => {this.setState({fullname_valid:false})}}
                        >                      
                        </input>
                    </Col>
                </Row>
                <Row>
                    <Col className="error-msg">{this.state.fullname_valid ? "Please enter the fullname..!":""}</Col>
                </Row>
                <Row>
                    <Col>
                        <label>Age<span className="mandotry">*</span> :</label>
                    </Col>
                    <Col>
                        <input value = {this.state.age} type= "text"  onChange={(e)=>{
								this.setState({age:e.target.value})}}
                                onFocus = {() => {this.setState({age_valid:false})}}
                        >                      
                        </input>
                    </Col>
                </Row>
                <Row>
                    <Col className="error-msg">{this.state.age_valid ? "Please enter the age..!":""}</Col>
                </Row>    
                <Row>
                    <Col>
                        <label>E-mail<span className="mandotry">*</span> :</label>
                    </Col>
                    <Col>
                        <input value = {this.state.email} type= "text"  onChange={(e)=>{
								this.setState({email:e.target.value})
                        }} onFocus = {() => {this.setState({email_valid:false})}}>                      
                        </input>
                    </Col>
                </Row>   
                <Row>
                    <Col className="error-msg">{this.state.email_valid ? "Please enter the e-mail..!":""}</Col>
                </Row>  
                <Row>
                    <Col>
                        <label>Username<span className="mandotry">*</span> :</label>
                    </Col>
                    <Col>
                        <input value = {this.state.username} type= "text"  onChange={(e)=>{
								this.setState({username:e.target.value})}}
                                onFocus = {() => {this.setState({username_valid:false})}}
                                >                      
                        </input>
                    </Col>
                </Row>  
                <Row>
                    <Col className="error-msg">{this.state.username_valid ? "Please enter the username..!":""}</Col>
                </Row>
                <Row>
                    <Col>
                        <label>Password<span className="mandotry">*</span> :</label>
                    </Col>
                    <Col>
                        <input value = {this.state.pswd} type= "text"  onChange={(e)=>{
								this.setState({pswd:e.target.value})}}
                                onFocus = {() => {this.setState({pswd_valid:false})}} 
                        >                      
                        </input>
                    </Col>
                </Row>  
                <Row>
                    <Col className="error-msg">{this.state.pswd_valid ? "Please enter the password..!":""}</Col>
                </Row>
                <Row>
                    <Col>
                        <label>Confirm Password<span className="mandotry">*</span> :</label>
                    </Col>
                    <Col>
                        <input value = {this.state.confirm_pswd} type= "text"  onChange={(e)=>{
								this.setState({confirm_pswd:e.target.value})}}
                                onFocus = {() => {this.setState({cnfrm_pswd_valid:false})}}        
                        >                      
                        </input>
                    </Col>
                </Row>   
                <Row>
                    <Col className="error-msg">{this.state.cnfrm_pswd_valid ? this.state.confirm_pswd_errmsg:""}</Col>
                </Row>
                <Row>
                    <Col><button onClick={this.onSubmit}>Submit</button></Col>
                </Row>
            </div>
        )
    }
}