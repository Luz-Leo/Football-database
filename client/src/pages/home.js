import { useState } from 'react';
import { useNavigate } from "react-router-dom";

// import Overlay from '../components/Overlay/delete_overlay'
// const toggleOverlay = () => {
//     setIsOpen(!isOpen);
// };

const Home = ({ data, setData }) => {
    // const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')

    const navigate = useNavigate()

    const filteredData = searchTerm.trim() !== ''
        ? data.filter((player) => (player.fname + ' ' + player.lname).toLowerCase().includes(searchTerm.toLowerCase()))
        : data;

    return (
        <>
            <form>
                <div className="flex flex-col p1.5 min-w-full align-middle">
                    <div className='px-6 py-3 text-s' >
                        <label className='px-6 py-3 text-end font-medium uppercase' htmlFor="player-name">Name:</label>
                        <input name='player-name' id='player-name' type="text" className='px-6 py-3 text-start font-medium' onChange={(e) => setSearchTerm(e.target.value)} />
                        <button type="submit" className="px-6 py-3 text-start font-medium text-white bg-blue-600 uppercase">Search</button>
                    </div>
                </div>
            </form>

            <hr className="border-gray-500" />

            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Age</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Country</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Position</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Scored</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Matches</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Club</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredData ? filteredData.map((player, index) =>
                                        <tr className="hover:bg-gray-100 cursor-pointer" key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800" onClick={() => navigate(`/player/${player.id}`)}>{player.fname} {player.lname} </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800" onClick={() => navigate(`/player/${player.id}`)}>{player.age}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800" onClick={() => navigate(`/player/${player.id}`)}>{player.country}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800" onClick={() => navigate(`/player/${player.id}`)}>{player.position}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800" onClick={() => navigate(`/player/${player.id}`)}>{player.scored}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800" onClick={() => navigate(`/player/${player.id}`)}>{player.matches}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800" onClick={() => navigate(`/player/${player.id}`)}>{player.club}</td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-800"></td>
                                            <button className='px-6 py-4 whitespace-nowrap text-sm text-gray-800' type='button' onClick={() => navigate(`/player/edit/${player.id}`)}>Edit</button>
                                        </tr>
                                    ) : <p>Loading ...</p>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;