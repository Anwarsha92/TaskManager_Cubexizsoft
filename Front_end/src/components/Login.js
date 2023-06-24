import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

function Login() {

    const location=useNavigate()

    const [rname,setrName]=useState("")
    const [remail,setrEmail]=useState("")
    const [rpswd,setrPswd]=useState("")

    const registerUser= async(e)=>{
        e.preventDefault();
        let body={
            runame:rname,
            remail,
            rpswd
        }
        // console.log(regDetails);

        try {

            const result = await axios.post('http://localhost:8000/register', body)

            alert(result.data.message)
            window.location.reload(true)
            // location('/')

        }
        catch (error) {
            alert(error.response.data.message);
        }

       

    }


    const [lemail,setlEmail]=useState("")
    const [lpswd,setlPswd]=useState("")

    const loginUser= async(e)=>{
        e.preventDefault();
        let body={
            lemail,
            lpswd
        }
        // console.log(regDetails);

        try {

            const result = await axios.post('http://localhost:8000/login', body)

            alert(result.data.message)
            // window.location.reload(true)
            location(`/home/${lemail}`)

        }
        catch (error) {
            alert(error.response.data.message);
        }

    }


    return (
        <div>



            <div className='outer'>
                <div><img  style={{width:'100%',height:'600px'}} src="https://i.postimg.cc/vH78t5Fp/confident-concentrated-businesswoman-looking-stickers-glass-wall-focused-grey-haired-female-worker-t.jpg" alt="" /></div>
                <div class="main">
                    <input type="checkbox" id="chk" aria-hidden="true" />

                    <div class="login">
                        <form onSubmit={loginUser}>
                            <label for="chk" aria-hidden="true">Login</label>
                            <input value={lemail} onChange={e=>setlEmail(e.target.value)} type="email" name="email" placeholder="Email" required />
                            <input value={lpswd} onChange={e=>setlPswd(e.target.value)} type="password" name="pswd" placeholder="Password" required />
                            <button>Login</button>
                        </form>
                    </div>

                    <div class="signup">
                        <form onSubmit={registerUser}>
                            <label for="chk" aria-hidden="true">Sign up</label>
                            <input value={rname} onChange={e=>setrName(e.target.value)} type="text" name="txt" placeholder="User name" required />
                            <input value={remail} onChange={e=>setrEmail(e.target.value)} type="email" name="email" placeholder="Email" required />
                            <input value={rpswd} onChange={e=>setrPswd(e.target.value)} type="password" name="pswd" placeholder="Password" required />
                            <button>Sign up</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login