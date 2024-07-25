import { useEffect, useState, React } from "react";
import { useParams, useNavigate } from "react-router-dom";


const Edit = () => {
    // const [player, setplayer] = useState(null)
    const [player, setPlayer] = useState(null)
    const [feedback, setFeedback] = useState({ message: '', style: '' })

    const navigate = useNavigate()

    let { id } = useParams();

    useEffect(() => {
        fetchplayer(id)
    }, [id])

    const fetchplayer = (id) => {
        fetch(`/player/${id}`)
            .then((res) => res.json())
            .then((player) => {
                setPlayer(player)
            })
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
        setTimeout(() => {
            setFeedback({ message: "Player new info saved!", style: 'text-green-600 font-bold' })
            setTimeout(() => {
                navigate(`/player/${id}`)
            }, 1000)
        }, 1000)

    }

    const deleteUser = (id) => {
        fetch(`/player/edit/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
        setTimeout(() => {
            setFeedback({ message: "Player deleted!", style: 'text-green-600 font-bold' })
            setTimeout(() => {
                navigate('/')
            }, 1000)
        }, 1000)
    }

    return (
        <>
            {/* First Grid */}
            <div className="container grid grid-cols-3 grid-row-3 gap-4">
                <div className="row-span-3">
                    <div className="h-full bg-blue-300">
                        <img alt='player profile'></img>
                    </div>
                </div>
                <div className="row-span-2 col-span-2">
                    <form method='PUT' onSubmit={editPlayer}>
                        {/* Second grid */}
                        <div className="grid grid-col-4 grid-row-3 gap-4 divide-black divide-y-2 divide-opacity-5">
                            <div className="row-span-2 w-full col-span-4">
                                <div className="">
                                    <label htmlFor="player-firstname" className="">First name: </label>
                                    <input type="text"
                                        name="player-firstname"
                                        id="player-firstname"
                                        className="edit-input"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                fname: e.target.value
                                            })
                                        }} placeholder={!player ? '' : player.fname} />
                                </div>
                                <div>
                                    <label htmlFor="player-lastname" className="">Last name: </label>
                                    <input type="text"
                                        name="player-lastname"
                                        id="player-lastname"
                                        className="edit-input"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                lname: e.target.value
                                            })
                                        }}
                                        placeholder={!player ? '' : player.lname}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="player-country" className="">Nationality: </label>
                                    <input type="text"
                                        name="player-country"
                                        id="player-country"
                                        className="edit-input"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                country: e.target.value
                                            })
                                        }}
                                        placeholder={!player ? '' : player.country} />
                                </div>
                                <div>
                                    <label htmlFor="player-age" className="">Age: </label>
                                    <input type="number"
                                        name="player-age" id="player-age"
                                        className="edit-input"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                age: e.target.value
                                            })
                                        }}
                                        placeholder={!player ? '' : player.age} />
                                </div>
                                <div>
                                    <label htmlFor="player-club" className="">Club: </label>
                                    <input type="text" name="player-club"
                                        id="player-club"
                                        className="edit-input"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                club: e.target.value
                                            })
                                        }}
                                        placeholder={!player ? '' : player.club}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="player-position" className="">Position: </label>
                                    <input type="text" name="player-position" id="player-position" className="edit-input uppercase" onChange={e => {
                                        setPlayer({
                                            ...player,
                                            position: e.target.value
                                        })
                                    }}
                                        placeholder={!player ? '' : player.position}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="player-matches" className="">Matches: </label>
                                    <input type="number" name="player-matches" id="player-matches" className="edit-input"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                matches: e.target.value
                                            })
                                        }}
                                        placeholder={!player ? '' : player.matches} />
                                </div>
                                <div>
                                    <label htmlFor="player-scored" className="">Scored: </label>
                                    <input type="number" name="player-scored" id="player-scored" className="edit-input"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                scored: e.target.value
                                            })
                                        }} placeholder={!player ? '' : player.scored} />
                                </div>
                                <div>
                                    <label htmlFor="player-assists" className="">Assists: </label>
                                    <input type="number" name="player-assists" id="player-assists" className="edit-input" onChange={e => {
                                        setPlayer({
                                            ...player,
                                            assist: e.target.value
                                        })
                                    }}
                                        placeholder={!player ? '' : player.assist} />
                                </div>
                            </div>
                            <div className="row-span-1 col-span-4 row-start-3 ">
                                <div className="flex justify-evenly my-5">
                                    <div className="">
                                        <button type="submit" className="first:bg-green-600 btn">Save</button>
                                    </div>
                                    <div>
                                        <button type="button"
                                            className="btn"
                                            onClick={() => navigate(`/player/${id}`)}
                                        >Cancel</button>
                                    </div>
                                    <div>
                                        <button type="button" className="first:bg-red-300 btn"
                                            onClick={() => {
                                                deleteUser(id)
                                            }}>Delete</button>
                                    </div>
                                </div>
                                <div>
                                    <p className={`text-center text-opacity-50 text-sm ${feedback.style}`}>{!feedback ? '' : feedback.message}</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Edit;