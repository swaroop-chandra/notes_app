import React from 'react'
import { connect } from 'react-redux'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:props.note ? props.note.title:'',
            description:props.note ? props.note.description:'',
            categoryId:props.note ? props.note.categoryId:'',
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandle=(e)=>{
        e.preventDefault()
        const formData={
            title:this.state.title,
            description:this.state.description,
            categoryId:this.state.categoryId
        }
        // console.log(formData)
        this.props.submitHandle(formData)
    }
    render(){
        return (
            <div>
                <form onSubmit={this.submitHandle} className='formlog'>
                <div className='form-group textLogin '>
                <input className='form-control' placeholder='title' type='text' value={this.state.title} onChange={this.handleChange} name='title'/>
                </div>
                <div className='form-group textLogin'>
                <textarea className='form-control' placeholder='write some description' type='text' value={this.state.description} onChange={this.handleChange} name='description'></textarea>
                </div >
                <div className='form-group textLogin'>
                <select className='form-control' value={this.state.categoryId} onChange={this.handleChange} name='categoryId'>
                    <option>---select category---</option>
                        {this.props.categories.map(category=>{
                        return <option key={category._id} value={category._id}>{category.name}</option>
                        })}
                    </select>
                </div>
                <div className='col-md-4 offset-2'>
                <input type='submit' className='btn btn-secondary'/></div>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        categories:state.categories
    }
}
export default connect(mapStateToProps)(Form)