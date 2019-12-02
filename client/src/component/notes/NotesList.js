import React from 'react'
import {connect} from 'react-redux'
import {startDeleteNotes,startGetNotes} from '../actions/notes'
import {Card,Button} from 'react-bootstrap'
import Swal from 'sweetalert2'

class NotesList extends React.Component{

    componentDidMount=()=>{
        this.props.dispatch(startGetNotes())
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
              this.props.dispatch(startDeleteNotes(id,this.props))
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
    }

    render(){
        return (
            <div className='bgnotes'><div className='offset-1'>
                <div className='row'><h2 className='text-secondary mt-3'>Notes List -{this.props.notes.length}</h2>
                
                <Button className='bg-warning col-md-2 offset-7 mt-4' href='/notes/add'>Add</Button></div>
                        <div className='row mt-3'>
                        {this.props.notes.map(note=>{
                           return ( 
                                <Card key={note._id} className='col-md-2 mr-4 mt-4' style={{backgroundColor:"gold",height:'300px'}}>
                                  <Card.Header as='h4'>{note.title}</Card.Header>
                                    <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">{note.categoryId.name}</Card.Subtitle>
                                    <Card.Text>{note.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <Button className='bg-warning' href={`/notes/edit/${note._id}`}>Edit</Button>
                                    <Button className='bg-danger buttonpost' value={note._id} onClick={this.handleRemove}>Remove</Button>
                                    </Card.Footer>
                                </Card>
                          )

                            
                        })}</div></div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        notes:state.notes
    }
}
export default connect(mapStateToProps)(NotesList)