import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPlayer = () => {
    const [player, setPlayer] = useState(null)
    const [feedback, setFeedback] = useState(null)

    const navigate = useNavigate();

    const addPlayer = (e) => {
        e.preventDefault()

        fetch('/newplayer', {
            method: 'POST',
            body: JSON.stringify(player),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .catch(error => {
            });
            
        setTimeout(() => {
            navigate('/')
        }, 500)
    }

    return (
        <>
            <div className="max-w-xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-3xl">
                        New player
                    </h1>
                </div>

                <div className="mt-12">

                    <form method='POST' onSubmit={addPlayer}>
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
                                        }} required />
                                </div>

                                <div>
                                    <label for="player-lastname" className="block mb-2 text-sm text-gray-700 font-medium">Last Name</label>
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
                                    />
                                </div>
                            </div>

                            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <div>
                                    <label for="player-nationality" className="block mb-2 text-sm text-gray-700 font-medium">Nationality</label>
                                    <input type="text"
                                        name="player-nationality"
                                        id="player-nationality"
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                country: e.target.value
                                            })
                                        }} required />
                                </div>
                                <div>
                                    <label for="player-age" className="block mb-2 text-sm text-gray-700 font-medium">Age</label>
                                    <input type="number"
                                        name="player-age" id="player-age" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                age: e.target.value
                                            })
                                        }} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <div>
                                    <label for="player-club" className="block mb-2 text-sm text-gray-700 font-medium">Club</label>
                                    <input type="text" name="player-club" id="player-club" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" onChange={e => {
                                        setPlayer({
                                            ...player,
                                            club: e.target.value
                                        })
                                    }} required />
                                </div>
                                <div>
                                    <label for="player-position" className="block mb-2 text-sm text-gray-700 font-medium">Position</label>
                                    <input type="text" name="player-position" id="player-position" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" onChange={e => {
                                        setPlayer({
                                            ...player,
                                            position: e.target.value
                                        })
                                    }} required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3  gap-4 lg:gap-6">
                                <div>
                                    <label for="player-matches" className="block mb-2 text-sm text-gray-700 font-medium">Matches</label>
                                    <input type="number" name="player-matches" id="player-matches" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                matches: e.target.value
                                            })
                                        }} required />
                                </div>
                                <div>
                                    <label for="player-goals" className="block mb-2 text-sm text-gray-700 font-medium">Goals</label>
                                    <input type="number" name="player-goals" id="player-goals" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        onChange={e => {
                                            setPlayer({
                                                ...player,
                                                scored: e.target.value
                                            })
                                        }} />
                                </div>
                                <div>
                                    <label for="player-assists" className="block mb-2 text-sm text-gray-700 font-medium">Assists</label>
                                    <input type="number" name="player-assists" id="player-assists" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" onChange={e => {
                                        setPlayer({
                                            ...player,
                                            assists: e.target.value
                                        })
                                    }} />
                                </div> */}
                        </div>

                        {/* </div> */}
                        <div className="mt-6 grid">
                            <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Create player</button>
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

export default NewPlayer;
