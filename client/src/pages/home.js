/*eslint no-unused-expressions: "error"*/

import { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
import React from 'react';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const [data, setData] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {   
        const token = localStorage.getItem('jwt-token') // MUDAR FORMA SALVAR O TOKEN NO BROWSER
        fetch(`/players`, {
            headers: {
                'Authorization': "Bearer " + token
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === 'sucess') {
                    setLoggedIn(true)
                    setData(data.players)
                }
            })
    }, [])

    const filteredData = searchTerm.trim() !== ''
        ? data.filter((player) => (player.fname + ' ' + player.lname).toLowerCase().includes(searchTerm.toLowerCase()))
        : data;

    return (
        <>
            <div className="container">
                <div className='place-items-center py-6 px-3 bg-gray-100'>
                    <form>
                        <label className='font-bold' htmlFor="player-name">Search: </label>
                        <input className='rounded border-black border-spacing-1 mx-1 w-1/4' name='player-name' id='player-name' type="text" onChange={(e) => setSearchTerm(e.target.value)} />
                    </form>
                </div>
                <table className="my-4 mx-auto py-6 px-3 w-full items-center divide-black divide-y-2 divide-opacity-5 table-fixed" id='table'>
                    <thead className=" uppercase bg-gray-100">
                        <tr className=''>
                            <th scope="col" className='border-gray border-2-l px-6 py-3'>Name</th>
                            <th scope="col" className=''>Age</th>
                            <th scope="col" className=''>Country</th>
                            <th scope="col" className=''>Position</th>
                            <th scope="col" className=''>Club</th>
                            <th scope="col" className=''></th>
                        </tr>
                    </thead>
                    <tbody >
                        {filteredData && filteredData.map((player, index) =>
                            <tr key={index} className="text-s text-center ltr:text-left border-gray border-b-2 my-15 h-10 hover:cursor-pointer hover:bg-blue-100">
                                <td className='indent-8 text-left' onClick={() => navigate(`/player/${player._id}`)}>{player.fname} {player.lname} </td>
                                <td className='' onClick={() => navigate(`/player/${player.player_id}`)}>{player.age}</td>
                                <td className='' onClick={() => navigate(`/player/${player.player_id}`)}>{player.country}</td>
                                <td className='uppercase' onClick={() => navigate(`/player/${player.player_id}`)}>{player.position}</td>
                                <td className='capitalize' onClick={() => navigate(`/player/${player.player_id}`)}>{player.club}</td>
                                <td><button className='bg-blue-400 font-bold text-white w-16 rounded align-middle' type='button' onClick={() => navigate(`/player/edit/${player.player_id}`)}>Edit</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {!loggedIn && <div className='flex justify-center ' id='row-login-btn' >
                    <button type='button' className='btn first:bg-blue-600 my-3' onClick={() => navigate('/login')}>Log in</button>
                </div>}
            </div>
        </>
    )
};



export default Home;