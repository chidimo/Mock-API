console.log('now here')

fetch('http://localhost:3001/users')
.then(resp=> resp.json())
.then(data => { console.log(JSON.stringify(data, null, '\t'))})
