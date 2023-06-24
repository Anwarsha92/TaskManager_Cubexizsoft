import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Task.css'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {v4 as uuid} from 'uuid'

function Task() {

    const params = useParams()

    const [id,setId]= useState('')
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])

    const params1 = params.id
    console.log(params.id);
    console.log(task);

    const addTask = async (e) => {
        setId (uuid().slice(0,6))
        const body = {
            id,
            task,
            params1
        }

        const result = await axios.post('http://localhost:8000/task', body)
        alert(result.data.message)
 
    }


    const showTask = async (e) => {

        try{
        const result = await axios.get('http://localhost:8000/showtask/' + params.id)
        setTaskList(result.data.message)
        
        } 
        catch(error){ 
            alert(error.response.data.message);   
        }
    }
    console.log(taskList)

    useEffect(() => {
        showTask();setId(uuid().slice(0,6))
    }, []);

    const deleteTask=async(id)=>{
        const result=await axios.post('http://localhost:8000/deleteTask/'+id)
        alert(result.data.message)
    }


    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">TASK-MANAGER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Tasks</Nav.Link>
                            <Nav.Link href="#link1">Logout</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
                <div >
                    <form onSubmit={addTask} className='addarea container'>
                        <input value={task} onChange={e => setTask(e.target.value)} placeholder='Add New Task' type="text" />
                        <button>Add</button>
                    </form>
                </div>

                <div className='text-center mt-5'>
                    <h3 className='text-white'>Task List</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Created</th>
                                <th>Completed</th>
                                <th>Task</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {taskList?.map((list,index)=>(
                                <tr>
                                
                                <td>{index+1}</td>
                                <td>{list.Date}</td>
                                <td>{list.completed}</td>
                                <td>{list.Task}</td>
                                <td>{list.status}</td>
                                <td>
                                    <button className='btn text-success fs-3'><i class="las la-check-circle"></i></button>
                                    <button className='btn text-info fs-3'><i class="las la-edit"></i></button>
                                    <button onClick={()=>deleteTask(list.id)} className='btn text-danger fs-3'><i class="las la-trash"></i></button>
                                </td>
                            </tr>

                            ))}
                            
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Task