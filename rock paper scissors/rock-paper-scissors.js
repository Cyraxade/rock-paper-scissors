        displayScore = document.querySelector(".score")
        display = document.getElementById("display")
        guesses = document.querySelector(".guesses")
        button1 = document.querySelector(".btn1")
        button2 = document.querySelector(".btn2")
        button3 = document.querySelector(".btn3")
        resetButton = document.querySelector('.btn4')
        autoPlaybutton = document.querySelector('.autoplay-btn')
        console.log(displayScore)
        compGuess = " "
        playermove =" "
        result =" "
        score = JSON.parse(localStorage.getItem("score")) || {
            win: 0,
            tie: 0,
            loss: 0
            }
        undateScore()
        console.log(score)
 

    button1.addEventListener("click", () => {
        gameLogic("rock")
    })
    button2.addEventListener("click", () => {
        gameLogic("paper")
    })
    button3.addEventListener("click", () => {
        gameLogic("scissor")
    })  
    resetButton.addEventListener('click',() => {
        if(confirm('are you sure you want to reset')){
        score.win = 0
        score.tie = 0
        score.loss = 0 
        localStorage.removeItem('score')
        undateScore()
        }
        console.log(score)
    })
    autoPlaybutton.addEventListener('click',()=>{
        autoplay()
    })




// FUNCTIONS
    function undateScore(){
        displayScore.innerHTML =`win: ${score.win}. tie: ${score.tie}. loss: ${score.loss}`

    }

    function gameLogic(myguess){ 
        // COMPUTER GUESS // USER AUTO GUESS
         user = myguess;
        const randomNumber = Math.random();
        const randomUser = Math.random();

        if (randomNumber > 0 && randomNumber <= 1/3){
            compGuess = 'rock'
        }
        else if(randomNumber > 1/3 && randomNumber <= 2/3){
            compGuess = 'paper'
        }
        else{
            compGuess = 'scissor'
        };
        if (randomUser > 0 && randomUser <= 1/3){

            playermove = 'rock'
        }
        else if(randomUser > 1/3 && randomUser <= 2/3){
            playermove = 'paper'
        }
        else{
            playermove = 'scissor'
        };
        // COMPUTER GUESS // USER AUTO GUESS
        console.log(user)
        console.log(compGuess)

        
        if (compGuess =="rock" && user == "rock"){
            result = "its a tie"
            score.tie += 1
            document.getElementById("display").innerHTML= result
            console.log(result)
        }
        else if(compGuess == "rock" && user == "paper"){
            result = "you won"
            score.win += 1
            document.getElementById("display").innerHTML= result
            console.log(result)
        }
        else if(compGuess == "rock" && user == "scissor"){
            result = "computer wins"
            document.getElementById("display").innerHTML= result
            console.log(result)
            score.loss ++
        }
        else if(compGuess == "paper" && user == "paper"){
            result = "it's a tie"
            document.getElementById("display").innerHTML= result
            console.log(result)
            score.tie ++ 
            
        }
        else if(compGuess == "paper" && user == "scissor"){
            result = "you won"
            document.getElementById("display").innerHTML= result
            console.log(result)
            score.win ++
        }
        else if(compGuess == "paper" && user == "rock"){
            result = "computer wins"
            document.getElementById("display").innerHTML= result
            console.log(result)
            score.loss++
        }
        else if(compGuess == "scissor" && user == "scissor"){
            result = "it's a tie"
            document.getElementById("display").innerHTML= result
            console.log(result)
            score.tie ++
        }
        else if(compGuess == "scissor" && user == "rock"){
            result = "you won"
            document.getElementById("display").innerHTML= result
            console.log(result)
            score.win ++
        }
        else if(compGuess == "scissor" && user == "paper"){
            result = "computer wins"
            document.getElementById("display").innerHTML= result
            console.log(result)
            score.loss ++
            
        }
        else if(compGuess =="" && user == ""){
            console.log("empty")
        }
        else{
            console.log('error')
        }
        localStorage.setItem("score",JSON.stringify(score)) 
        console.log(JSON.parse(localStorage.getItem("score")))
        undateScore()
        guesses.innerHTML = `you: <img src="./images/${user}.png" alt="" class="move-icon"> <img src="./images/${compGuess}.png" alt="" class="move-icon"> :computer`
        console.log(score)
    }

    let isAutoplaying  = false
    intervalId = ''
    function autoplay(){
        if(!isAutoplaying){
            intervalId = setInterval(() => {
                gameLogic(playermove)},1000)
            isAutoplaying = true
            autoPlaybutton.innerHTML = "stop autoplaying"
    }   else{
            clearInterval(intervalId)
            isAutoplaying = false
            autoPlaybutton.innerHTML = "autoplay"
    }
    }


    document.addEventListener('keydown', ()=>{
        key = event.key.toLowerCase()
        if (key === 'r'){
            gameLogic('rock')
        }else if (key === 'p'){
            gameLogic("paper")
        }else if (key === 's'){
            gameLogic('scissor')
        }else if (key ==='a'){
            autoplay()
        }
        console.log(key)
    })


    
