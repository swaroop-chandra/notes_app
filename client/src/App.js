import React from 'react'
import Login from './component/users/Login'
import Register from './component/users/Register'

import axios from './config/axios'
import PrivateRoute from './component/PrivateRoute/PrivateRoute'

import NotesList from './component/notes/NotesList'
import AddForm from './component/notes/addForm'
import EditForm from './component/notes/editForm'

import CategoryList from './component/category/categoryList'

import {BrowserRouter , Route,Link} from 'react-router-dom'
import {Nav,Navbar} from 'react-bootstrap'
import Swal from 'sweetalert2'


function handleClick(){
  axios.delete('/users/logout',{
    headers:{
      'x-auth':localStorage.getItem('authToken')
    }
  })
  .then(response=>{
    // Swal.fire('Thanks for Using our App :)','success')
    Swal.fire({
      icon: 'success',
      title: 'successfully logged out.!',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(()=>{
      localStorage.removeItem('authToken')
      window.location.href='/users/login'
    },1000)
  })
}
function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar className='goldColor'>
      <Navbar.Brand ><Link to='/notes' className='padding mr-3 text-decoration-none text-white'>Notes-App</Link></Navbar.Brand>
      {!localStorage.getItem('authToken') ? <Nav.Item>
      <Link to='/users/register' className='padding mr-3 text-decoration-none navCol'>register</Link> 
      <Link to='/users/login' className='padding mr-3 text-decoration-none navCol'>Login</Link> 
      </Nav.Item>:<Nav.Item>
      <Link to='/notes' className='padding mr-3 text-decoration-none navCol'>Notes</Link>
      <Link to='/categories' className='padding mr-3 text-decoration-none navCol'>Category</Link>
      <Link to='#' className='padding mr-3 text-decoration-none navCol' onClick={handleClick}>Logout</Link>
      </Nav.Item>}
      </Navbar>
      

      <Route path='/users/register' component={Register}/>
      <Route path='/users/login' component={Login}/>

      <PrivateRoute path='/categories' component={CategoryList}/>

      <PrivateRoute path='/notes' component={NotesList} exact={true}/>
      <PrivateRoute path='/notes/add' component={AddForm}/>
      <PrivateRoute path='/notes/edit/:id' component={EditForm}/>




    </div>
    </BrowserRouter>
  )
}

export default App;
