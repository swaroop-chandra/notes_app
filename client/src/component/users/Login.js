import React from 'react'
import {connect} from 'react-redux'
import {startUserLogin} from '../actions/user'
import image from '../images/notes\ logo.jpg'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
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
            email:this.state.email,
            password:this.state.password
        }
        console.log(formData)
        this.props.dispatch(startUserLogin(formData,this.props))
    }

    render(){
        return (<div className='bgcolor'>
        <div  className='row loginheight' >
            <div className='col-md-3 offset-3'><img src={image}/><h4 className='leftt'>Notes-App</h4></div>
            <div className='col-md-3'>
                <h2>Login Page</h2>
                <form onSubmit={this.handleSubmit}>
                <div className='form-group textLogin'>
                    <input className='form-control' placeholder='email' type='text' value={this.state.email} onChange={this.handleChange} name="email" required/>
                </div>
                <div className='form-group textLogin'>
                    <input className='form-control' placeholder='password' type='password'value={this.state.password} onChange={this.handleChange}  name="password" required/>
                </div>
                <div className='col-md-4 offset-2'>
                <input type='submit' className='btn btn-warning'/>
                </div>
                </form>
            </div>
            </div></div>
        )
    }
}

export default connect()(Login)