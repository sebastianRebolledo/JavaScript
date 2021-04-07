fetch('http://localhost:8080')
.then(res=>{
    if (res.ok){
        console.log('SUSCCEES')
    }else{
        console.log('No susccessful')
    }
} )
.then(data =>console.lo(data))
.catch(error => console.log('ERROR'))