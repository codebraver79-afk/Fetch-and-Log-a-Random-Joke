let joke = {
    fetchjoke : function(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response=>{
            if (!response.ok){
                alert('Error')
            }
            return response.json()
        })
        .then(data =>{

            console.log(data.setup)
            console.log(data.punchline)
        })
    }
}
joke.fetchjoke()
joke.fetchjoke()