import React from 'react'
import '../../App.css'
import image from '../images/notes\ logo.jpg'
import {startUserRegister} from '../actions/user'
import { connect } from 'react-redux'

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:''
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        console.log(formData)
        this.props.dispatch(startUserRegister(formData,this.props))
    }

    render(){
        return (<div className='bgcolor'>
        <div  className='row loginheight' >
            <div className='col-md-3 offset-3'><img src={image}/><h4 className='leftt'>Notes-App</h4></div>
            <div className='col-md-3'   >
                <h3>Register Page</h3>
                <form onSubmit={this.handleSubmit}>
                <div className='form-group textLogin'>
                    <input className='form-control' placeholder='username' type='text' value={this.state.name} onChange={this.handleChange} name="username" required/>
                </div>
                <div className='form-group textLogin'>
                    <input className='form-control' placeholder='email' type='email' value={this.state.email} onChange={this.handleChange} name="email" required/>
                </div>
                <div className='form-group textLogin'>
                    <input className='form-control' placeholder='password' type='password'value={this.state.password} onChange={this.handleChange}  name="password" required/>
                </div>
                <div className='col-md-4 offset-2'>
                <input type='submit' className='btn btn-warning'/></div>
                </form>
            </div>
            </div>
            </div>
        )
    }
}

export default connect()(Register)