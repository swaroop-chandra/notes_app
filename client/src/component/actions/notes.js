import axios from '../../config/axios'
import Swal from 'sweetalert2'

export const getNotes=(notes)=>{
    return {type:"GET_NOTES",
            payload:notes}
}

export const startGetNotes=()=>{
    return (dispatch)=>{
        axios.get('/notes',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const notes=response.data
            dispatch(getNotes(notes))
        })
        .catch(err=>{
            alert(err)
        })
    }
}

export const deleteNotes=(data)=>{
    return {type:"DELETE_NOTES",
            payload:data}
}

export const startDeleteNotes=(id)=>{
    return (dispatch)=>{
        axios.delete(`/notes/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            dispatch(deleteNotes(response.data._id))

        })
    }
}

export const startAddNotes=(data,props)=>{
    return (dispatch)=>{
        axios.post('/notes',data,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            if(response.data.hasOwnProperty('errors')){
                if(response.data.message.includes('categoryId')){
                Swal.fire("add Category",'','info')
                }else{
                Swal.fire("Form should'nt be empty",'','info')
                }
            }else{
            props.history.push('/notes')
            Swal.fire('Added','','success')
            }
        })
    }
}

export const startUpdateNotes=(data,id,props)=>{
    return (dispatch)=>{
        axios.put(`/notes/${id}`,data,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            props.history.push('/notes')
            // window.location.reload()
        })
    }
}