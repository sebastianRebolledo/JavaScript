async function fetchApi(){
    let response= await fetch('http://localhost:8080')
    let json =await response.json()
    console.log(json)
}