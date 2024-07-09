import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const Edit = () => {
    const [data, setData] = useState(null)
    const [player, setPlayer] = useState(null)
    const [feedback, setFeedback] = useState(null)

    const navigate = useNavigate()

    let { id } = useParams();

    useEffect(() => {
        fetchData(id)
    }, [id])

    const fetchData = (id) => {
        fetch(`/player/edit/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data))
    }

    const editPlayer = (e) => {
        e.preventDefault()
        fetch(`/player/edit/${id}`, {
            method: 'PUT',
            body: JSON.stringify(player),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        setTimeout(() => { navigate('/') }, 1000)
    }

    const deleteUser = (id) => {
        fetch(`/player/${id}`, {
            method: "DELETE",
        })
        .then((res)=>res.json())
        setTimeout(() => { navigate('/') }, 1000)
    }

    return (
        <>
            <div className="max-w-xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-3xl">
                        Edit player
                    </h1>
                </div>
                <div className="mt-12">
                    <form method='PUT' onSubmit={editPlayer}>
                        <div className="grid gap-4 lg:gap-6">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <div>
                                    <label htmlFor="player-firstname" className="block mb-2 text-sm text-gray-700 font-medium">First Name</label>
                                    <input type="text"
                                        name="player-firstname"
                                        id="player-firstname"
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                fname: e.target.value
                                            })
                                        }} placeholder={!data ? '' : data.fname} />
                                </div>

                                <div>
                                    <label htmlFor="player-lastname" className="block mb-2 text-sm text-gray-700 font-medium">Last Name</label>
                                    <input type="text"
                                        name="player-lastname"
                                        id="player-lastname"
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                lname: e.target.value
                                            })
                                        }}
                                        placeholder={!data ? '' : data.lname}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <div>
                                    <label htmlFor="player-nationality" className="block mb-2 text-sm text-gray-700 font-medium">Nationality</label>
                                    <input type="text"
                                        name="player-nationality"
                                        id="player-nationality"
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                country: e.target.value
                                            })
                                        }}
                                        placeholder={!data ? '' : data.country} />
                                </div>
                                <div>
                                    <label htmlFor="player-age" className="block mb-2 text-sm text-gray-700 font-medium">Age</label>
                                    <input type="number"
                                        name="player-age" id="player-age" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                age: e.target.value
                                            })
                                        }}
                                        placeholder={!data ? '' : data.age} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <div>
                                    <label htmlFor="player-club" className="block mb-2 text-sm text-gray-700 font-medium">Club</label>
                                    <input type="text" name="player-club" id="player-club" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" onChange={e => {
                                        setPlayer({
                                            ...player,
                                            club: e.target.value
                                        })
                                    }}
                                        placeholder={!data ? '' : data.club}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="player-position" className="block mb-2 text-sm text-gray-700 font-medium">Position</label>
                                    <input type="text" name="player-position" id="player-position" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" onChange={e => {
                                        setPlayer({
                                            ...player,
                                            position: e.target.value
                                        })
                                    }}
                                        placeholder={!data ? '' : data.position}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3  gap-4 lg:gap-6">
                                <div>
                                    <label htmlFor="player-matches" className="block mb-2 text-sm text-gray-700 font-medium">Matches</label>
                                    <input type="number" name="player-matches" id="player-matches" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                matches: e.target.value
                                            })
                                        }}
                                        placeholder={!data ? '' : data.matches} />
                                </div>
                                <div>
                                    <label htmlFor="player-goals" className="block mb-2 text-sm text-gray-700 font-medium">Goals</label>
                                    <input type="number" name="player-goals" id="player-goals" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                scored: e.target.value
                                            })
                                        }} placeholder={!data ? '' : data.scored} />
                                </div>
                                <div>
                                    <label htmlFor="player-assists" className="block mb-2 text-sm text-gray-700 font-medium">Assists</label>
                                    <input type="number" name="player-assists" id="player-assists" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" onChange={e => {
                                        setPlayer({
                                            ...player,
                                            assists: e.target.value
                                        })
                                    }}
                                        placeholder={!data ? '' : data.assists} />
                                </div>
                            </div>

                        </div>
                        <hr />
                        <div className="mt-6 grid grid-cols-3">
                            <div>
                                <button type="submit" className="py-3 px-4  text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Submit</button>
                            </div>
                            <div>
                                <button type="button"
                                    className="py-3 px-4 justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    onClick={() => navigate(`/player/${id}`)}
                                >Cancel</button>
                            </div>
                            <div>
                                <button type="button" className=" py-3 px-4 justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
                                    onClick={() => {
                                        deleteUser(id)
                                    }}>Delete</button>
                            </div>
                        </div>
                    </form>

                    <div className="mt-3 text-center">
                        <p className="text-sm text-gray-500" id='feedback-text'>
                            {!feedback ? '' : feedback}
                        </p>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Edit;