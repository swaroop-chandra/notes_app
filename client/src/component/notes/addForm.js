import React from 'react'
import Form from './Form'
import {startAddNotes} from '../actions/notes'
import { connect } from 'react-redux'
import {Card} from 'react-bootstrap'
import image from '../images/add.jpg'

class AddForm extends React.Component{
    submitHandle=(formData)=>{
        this.props.dispatch(startAddNotes(formData,this.props))
    }
    render(){
        return (
            <div className='bgcolor' >
            <div className='row loginheight'>
            <div className='offset-4 addbg'>
                <h1 className='headingtag text-secondary'>Add Form</h1>
                <Form submitHandle={this.submitHandle}/>
                {/* <img src={image}/></div> */}
            </div>
            </div>
            </div>
        )
    }
}

export default connect()(AddForm)