import { useEffect, useState, React } from "react";
import { useParams, useNavigate } from "react-router-dom";


const Player = () => {
    // FIX EDIT BUTTON
    // CREATE IMG TAG

    const [data, setData] = useState(null)
    const navigate = useNavigate()
    let { id } = useParams();

    useEffect(() => {
        const token = localStorage.getItem('jwt-token')
        fetch(`/player/${id}`, {
            headers: {
                'Authorization': "Bearer " + token
            }
        })
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [id])

    return (
        <>
            <div className="container grid grid-cols-3 grid-row-3 gap-4">
                <div className="row-span-3">
                    <div className="h-full bg-blue-300">
                        <img></img>
                    </div>
                </div>
                <div className="row-span-2 col-span-2">
                    <div className="font-bold text-center text-3xl">
                        <h1>
                            {!data ? '' : data.fname} {!data ? '' : data.lname}
                        </h1>
                    </div>
                    <div className="">
                        <p id="player-age" className="">
                            Age: {!data ? '' : data.age}
                        </p>
                    </div>
                    <div className="">
                        <p id="player-country" className="">
                            Country: {!data ? '' : data.country}
                        </p>
                    </div>
                    <div className="">
                        <p id="player-club" className="">
                            Club: {!data ? '' : data.club}
                        </p>
                    </div>
                    <div className="">
                        <p id="player-position" className="">
                            Position: {!data ? '' : data.position}
                        </p>
                    </div>
                    <div className="">
                        <p id="player-matches" className="">
                            Matches: {!data ? '' : data.matches}
                        </p>
                    </div>
                    <div className="">
                        <p id="player-scored" className="">
                            Goals: {!data ? '' : data.scored}
                        </p>
                    </div>
                    <div className="">
                        <p id="player-assists" className="">
                            Assists: {!data ? '' : data.assist}
                        </p>
                    </div>
                </div>
                <div className="col-span-2 " >
                    <button type="button" className="btn my-3"
                        onClick={() => navigate(`/player/edit/${id}`)}>
                        Edit
                    </button>
                </div>
            </div>
        </>
    )
}

export default Player;