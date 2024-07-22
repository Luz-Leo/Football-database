import mongoose from "mongoose";
const Player = mongoose.model('Player');

 async function getById(id){

    const res = await Player
        .findById(id);
    return res;
}

 async function createPlayer(data){

    let player = new Player(data);
    await player.save();
}

 async function updatePlayer(id, data){
    await Player
        .updateOne(id, {
            $set: {
                fname: data.fname,
                lname: data.lname,
                country: data.country,
                age: data.country,
                club: data.club,
                matches: data.matches,
                scored: data.scored,
            }
        });
}

export default {getById, createPlayer, updatePlayer}