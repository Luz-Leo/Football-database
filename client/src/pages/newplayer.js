import { useState, React } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPlayer = () => {
    const [player, setPlayer] = useState(null)
    const [feedback, setFeedback] = useState({ message: '', style: '' })

    const navigate = useNavigate();


    const addPlayer = (e) => {
        e.preventDefault()


        fetch('/player', {
            method: 'POST',
            body: JSON.stringify(player),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())

        setTimeout(() => {
            setFeedback({ message: "New player created!", style: 'text-green-600 font-bold' })
            setTimeout(() => { navigate(`/}`) }, 1000)
        }, 1000)
    }

    return (
        <>
            {/* First Grid */}
            <div className="container grid grid-cols-3 grid-row-3 gap-4">
                <div className="row-span-3">
                    <div className="h-full bg-blue-300">
                        <img></img>
                    </div>
                </div>
                <div className="row-span-2 col-span-2"><div className="font-bold text-center text-3xl">
                        <h1>
                           New player
                        </h1>
                    </div>
                    <form method='PUT' onSubmit={addPlayer}>
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
                                        }} />
                                </div>
                                <div>
                                    <label htmlFor="player-lastname" className="">Last name: </label>
                                    <input type="text"
                                        name="player-lastname"
                                        id="player-lastname"
                                        className=" edit-input "
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                lname: e.target.value
                                            })
                                        }}

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
                                    />
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
                                    />
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
                                    />
                                </div>
                                <div>
                                    <label htmlFor="player-scored" className="">Scored: </label>
                                    <input type="number" name="player-scored" id="player-scored" className="edit-input"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                scored: e.target.value
                                            })
                                        }} />
                                </div>
                                <div>
                                    <label htmlFor="player-assists" className="">Assists: </label>
                                    <input type="number" name="player-assists" id="player-assists" className="edit-input" onChange={e => {
                                        setPlayer({
                                            ...player,
                                            assists: e.target.value
                                        })
                                    }}
                                    />
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
                                            onClick={() => navigate(`/player/`)}
                                        >Cancel</button>
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

export default NewPlayer;
