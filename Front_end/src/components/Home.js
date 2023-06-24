import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Home.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Tasks() {

  const params = useParams()

  console.log(params.id);

  const [user, setUser] = useState()

  const fetchUser = async () => {

    const result = await axios.get('http://localhost:8000/getUser/' + params.id)
    setUser(result.data.message)




  }
  console.log(user);


  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">TASK-MANAGER</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              {user ?
                (
                  <>
                    <Nav.Link href={`/tasks/${user.email}`}>Tasks</Nav.Link>

                  </>


                ) : ""}
              <Nav.Link href="#link1">Logout</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <div className='profileouter' >
        <div className=' profile bg-success'>
          <h2 className='text-center text-white'><i>Bio-Graph</i></h2>
          <div className='details'>
            <div>
              <h3 className=' text-white'>name</h3>
              <h3 className=' text-white'>email</h3>
              <h3 className=' text-white'>mobile</h3>
            </div>
            <div>
              {user ?
                (
                  <>
                    <h3>{user.uname}</h3>
                    <p>{user.email}</p>
                    <h3>{user.mobile}</h3>
                  </>
                ) : ""}
            </div>
          </div>
        </div>

        <div className=' profile task bg-success'>
          <h2 className='text-center text-white'><i>Bio-Graph</i></h2>
          <div className='details'>
            <div>
              <h3 className=' text-white'>name</h3>
              <h3 className=' text-white'>email</h3>
              <h3 className=' text-white'>mobile</h3>
            </div>
            <div>
              {user ?
                (
                  <>
                    <h3>{user.uname}</h3>
                    <p>{user.email}</p>
                    <h3>{user.mobile}</h3>
                  </>
                ) : ""}
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Tasks