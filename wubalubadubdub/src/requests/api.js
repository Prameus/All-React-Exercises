
async function apiGet() {
    let information = await ("https://rickandmortyapi.com/api/character")
    let data = await information.json()
    return data
}

apiGet()
    .then(data => { console.log(data) })
    .catch(error =>{console.log(error)})