import React from 'react'
import {connect} from 'react-redux'
import {startDeleteCategory,startAddCategory,startEditCategory} from '../actions/categories'
import {Button} from 'react-bootstrap'
import Swal from 'sweetalert2'


class CategoryList extends React.Component{
    constructor(){
        super()
        this.state={
            text:"",
            isEdit:true,
            id:''
        }
    }

    handleRemove=(e)=>{
        const id=e.target.value
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                this.props.dispatch(startDeleteCategory(id,this.props))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

    handleAdd=()=>{
        const data={"name":this.state.text}
        this.props.dispatch(startAddCategory(data))
        this.setState({text:''})
    }

    handleChange=(e)=>{
        const text=e.target.value
        this.setState({text})
    }

    editHandle=(id,name)=>{
        // console.log(id,name)
        this.setState({text:name,id, isEdit:false})
    }

    saveHandle=()=>{
        const id=this.state.id
        const data={"name":this.state.text}
        this.props.dispatch(startEditCategory(data,id))
    }

    render(){
        return (
            <div className='bgnotes'><div className='offset-1'>
                <div className='row'><h2 className='text-secondary mt-3'>Category List -{this.props.categories.length}</h2>
                <input className=' mt-4 col-md-1 offset-6' type='text' value={this.state.text} onChange={this.handleChange}/>
                {this.state.isEdit ?
                (<Button className='bg-warning col-md-1  mt-4' onClick={this.handleAdd} disabled={this.state.text.length!==0 ? false:true}>Add</Button>):(<Button onClick={this.saveHandle} className='bg-warning col-md-1 mt-4'>save</Button>)
                }</div>
                <div className='col-md-8 offset-1 mt-4'>
                <ul className='list-group'>
                {   
                    this.props.categories.map(category=>{
                       return <li className='list-group-item shadow p-3 mb-3 bg-white rounded' key={category._id}>{category.name}<Button className='bg-danger buttonpost float-right' value={category._id}onClick={this.handleRemove}>remove</Button><Button className='bg-warning  float-right' onClick={()=>this.editHandle(category._id,category.name)}>Edit</Button></li>
                    })                    
                }
                </ul>
                </div>
            </div>    
        </div>)
    }
}

const mapStateToProps=(state)=>{
    return {
        categories:state.categories
    }
}

export default connect(mapStateToProps)(CategoryList)