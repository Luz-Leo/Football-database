import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



const Signup = () => {

    const [user, setUser] = useState(null)
    const [error, setError] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/signup', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                res.json()
                if (res.ok) {
                    navigate('/')
                }
            })
            .then((data) => {
                setError(data)
            })
    }

    return (
        <>
            <div className="container first:max-w-fit">
                <form method='POST' onSubmit={handleSubmit}>
                    <div className='mb-4 text-lg'>
                        <div>
                            <label htmlFor='name' className=''>Name: </label>
                            <input type='text' name='name' id='name' className='' onChange={e => setUser({ ...user, name: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor='email' className=''>Email: </label>
                            <input type='email' name='email' id='email' className='' onChange={e => setUser({ ...user, email: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor='username' className=''>Username: </label>
                            <input type='text' name='username' id='username' className='' onChange={e => setUser({ ...user, username: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor='password' className=''>Password: </label>
                            <input type='password' name='password' id='password' className='' onChange={e => setUser({ ...user, password: e.target.value })} />
                        </div>
                    </div>
                    <div className='text-center'>
                        <button type='submit' className='btn'>Sign up</button>
                    </div>
                </form>
            </div>
        </>
    )
}


export default Signup; 