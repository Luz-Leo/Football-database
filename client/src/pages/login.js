import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [credentials, setCredentials] = useState(null)
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.message === "success"){
                    localStorage.setItem('jwt-token', data.accessToken)
                    navigate('/')
                }else{
                    setError(data.message)
                }
            })
    }

    return (
        <>
            <div className="container first:max-w-fit">
                <form method='POST' onSubmit={handleSubmit}>
                    <div className='mb-4 text-lg'>
                        <div>
                            <label htmlFor='username' className=''>Username: </label>
                            <input type='text' name='username' id='username' className='' onChange={e => setCredentials({ ...credentials, username: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor='password' className=''>Password: </label>
                            <input type='password' name='password' id='password' className='' onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
                        </div>
                        <p className='text-red-400 text-sm my-2 font-bold text-center '>{error && error}</p>
                    </div>
                    <div className='my-4 text-center'>

                        <button type='submit' className='btn'>Login</button>
                        <div className='my-2'>
                            <a className='text-blue-400 underline' href='/signup'>Sign up</a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}


export default Login; 