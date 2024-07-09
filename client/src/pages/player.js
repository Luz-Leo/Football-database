import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const Player = () => {
    // FIX EDIT BUTTON
    // CREATE IMG TAG

    const [data, setData] = useState(null)
    const navigate = useNavigate()
    let { id } = useParams();

    useEffect(() => {
        fetch(`/player/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [id])

    return (
        <>
            <div className="max-w-xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-3xl">
                        {!data ? '' : data.fname} {!data ? '' : data.lname}
                    </h1>
                </div>

                <div className="mt-12">
                    <div className="grid gap-4 lg:gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div>
                                <p id="player-country" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    Country: {!data ? '' : data.country}
                                </p>
                            </div>

                            <div>

                                <p id="player-age" className="text-center py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    Age: {!data ? '' : data.age}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div>
                                <p id="player-club" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    Club: {!data ? '' : data.club}
                                </p>
                            </div>
                            <div>
                                <p id="player-position" className="text-center py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    Position: {!data ? '' : data.position}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                            <div>
                                <p id="player-matches" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    Matches: {!data ? '' : data.matches}
                                </p>
                            </div>
                            <div>
                                <p id="player-scored" className="text-center py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    Goals: {!data ? '' : data.scored}
                                </p>
                            </div>
                            <div>
                                <p id="player-assists" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    Assists: {!data ? '' : data.assists}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3  gap-4 lg:gap-6">
                            <div>


                            </div>
                            <div>


                            </div>
                            <div>


                            </div>
                        </div>

                    </div>
                    <div> 
                        <button type="button" className="px-6 py-3 items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={() => navigate(`/player/edit/${id}`)}>
                            Edit
                        </button>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Player;