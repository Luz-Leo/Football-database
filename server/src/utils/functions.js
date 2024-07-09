import * as fs from 'fs'

const addPlayer = (newplayer, JSON_FILE) => {

  const jsonData = fs.readFileSync(JSON_FILE);

  var data = JSON.parse(jsonData);
  var new_id = 1;
  if (data.length >= 1) {
    new_id = data[data.length - 1]['id'] + 1
  }
  newplayer['id'] = new_id

  data.push(newplayer)
  data = JSON.stringify(data)

  fs.writeFileSync(JSON_FILE, data);

}

const editPlayer = (newdata, id, JSON_FILE) => {
  console.log('Edit Player initialized')
  const jsonData = fs.readFileSync(JSON_FILE)

  var data = JSON.parse(jsonData)

  data.map((player) => {
    if (player.id == id) {
      Object.keys(newdata).forEach((key) => {
        player[key] = newdata[key]
      })
    }
  })

  data = JSON.stringify(data)
  fs.writeFileSync(JSON_FILE, data)
}

const removePlayer = (id, JSON_FILE) => {

  const jsonData = fs.readFileSync(JSON_FILE)

  var data = JSON.parse(jsonData)
  var index;
  data.map((player, i) => {
    player.id == id
    index = i;
  })

  data.splice(index, 1)

  data = JSON.stringify(data)
  fs.writeFileSync(JSON_FILE, data)

}

export { addPlayer, editPlayer, removePlayer }
