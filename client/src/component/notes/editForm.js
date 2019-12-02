import React from 'react'
import {startUpdateNotes} from '../actions/notes'
import Form from './Form'
import { connect } from 'react-redux'

class EditForm extends React.Component{
   
    submitHandle=(formData)=>{
        const id=this.props.match.params.id
        this.props.dispatch(startUpdateNotes(formData,id,this.props))
    }
    render(){
        console.log(this.props.note)
        return (
            <div className='bgcolor' >
            <div className='row loginheight'>
            <div className='offset-4 addbg'>
            <h1 className='headingtag text-secondary'>Edit Form</h1>
                {this.props.note==undefined ? setTimeout(() => {
                   return <Form note={this.props.note} submitHandle={this.submitHandle}/>
                }, 500):<Form note={this.props.note} submitHandle={this.submitHandle}/>}
            </div></div></div>
        )
    }
}

const mapStateToProps=(state,props)=>{
    return {
        note:state.notes.find(note=>note._id==props.match.params.id)
    }
}
export default connect(mapStateToProps)(EditForm)