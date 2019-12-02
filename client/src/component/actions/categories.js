import axios from '../../config/axios'
import Swal from 'sweetalert2'

export const getCategories=(category)=>{
    return {type:"GET_CATEGORIES",payload:category}
}

export const startGetCategories=()=>{
    return (dispatch)=>{
        axios.get('/categories',{
            headers:{
            'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const categories=response.data
            dispatch(getCategories(categories))
        })
    }
}

export const deleteCategory=(data)=>{
    return {type:"DELETE_CATEGORY",
            payload:data}
}

export const startDeleteCategory=(id)=>{
    return (dispatch)=>{
        axios.get('/notes',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const note=response.data.find(note=>note.categoryId._id==id)
            if(note){
                Swal.fire('category present in notes!','please delete from notes','warning')
            }else{
                axios.delete(`/categories/${id}`,{
                    headers:{
                        'x-auth':localStorage.getItem('authToken')
                    }
                })
                .then(response=>{
                    dispatch(deleteCategory(response.data._id))
                    Swal.fire('Deleted!','','success')
                })
            }
        })
        
    }
}

export const addCategory=(data)=>{
    return {type:"ADD_CATEGORY",payload:data}
}

export const startAddCategory=(data)=>{
    return (dispatch)=>{
        axios.post('/categories',data,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            dispatch(addCategory(response.data))

        })
    }
}


export const startEditCategory=(data,id)=>{
    return (dispatch)=>{
        axios.put(`/categories/${id}`,data,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
        window.location.reload()  
        })
    }
}
