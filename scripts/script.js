const dice01 = document.getElementById('dice01');
const dice02 = document.getElementById('dice02');
const dice03 = document.getElementById('dice03');
const dice04 = document.getElementById('dice04');

const new_game = document.getElementById('btn01');
const roll_dice = document.getElementById('btn02');

const score01 = document.getElementById('score01');
const score02 = document.getElementById('score02');

const total01 = document.getElementById('total01');
const total02 = document.getElementById('total02');

const image01 = document.getElementById('image01');
const image02 = document.getElementById('image02');

const image03 = document.getElementById('image03');
const image04 = document.getElementById('image04');

const game_over = document.getElementById('game-over');
const popup = document.getElementById('pop-up');
const popupText = document.getElementById('pop-up-text');
const closePopup = document.getElementById('close-popup');

let scoreThisRound = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let die1Outcome = 0;
let die2Outcome = 0;
let die3Outcome = 0;
let die4Outcome = 0;
let counter = 0;

let delay = 700;

popup.style.display = "none";


class Player{
    constructor(player){
        this.player = player;

    }
    tossDie(){
        this.value = Math.floor(Math.random() * 6) + 1;
       // console.log(die);
        return this.value
       

    }
    
}

class Die{
    constructor(){
        this.face = ["images/die01.gif", "images/die02.gif" , "images/die03.gif", "images/die04.gif" , "images/die05.gif" , "images/die06.gif" ];
        this.value = [1, 2, 3, 4, 5, 6];

    }
}





new_game.addEventListener('click', function(){
    document.location.reload();
});

closePopup.addEventListener('click', function(){
    popup.style.display = "none";

});

roll_dice.addEventListener('click', function(){
    counter++;
    console.log(counter);
    
    if(counter == 3){
        timeoutHandler = setTimeout(function(){
            popup.style.display = "block";
            game_over.innerHTML = `Game Over`;
            if(totalScore1 > totalScore2){
                popupText.innerHTML = `Congratulations, you win!`;
            }else if(totalScore2 > totalScore1){
                popupText.innerHTML = `Sorry, you lost!`;
            }else if(totalScore1 == totalScore2){
                popupText.innerHTML = `It's a tie, try again!`;
            }
           
        }, delay)
        
    }
image01.style.display = true;
image02.style.display = true;
image03.style.display = true;
image04.style.display = true;
const player01 = new Player("User");
const player02 = new Player("Computer");
const Die01 = new Die();
const Die02 = new Die();
const Die03 = new Die();
const Die04 = new Die();


die1Outcome = player01.tossDie(Die01);
die2Outcome = player01.tossDie(Die02);

die3Outcome = player02.tossDie(Die03);
die4Outcome = player02.tossDie(Die04);

let image1 = Die01.face[die1Outcome - 1];
let image2 = Die02.face[die2Outcome - 1];

let image3 = Die03.face[die3Outcome - 1];
let image4 = Die04.face[die4Outcome- 1];

//Player01 dice rolls

image01.src = `${image1}`;
image02.src = `${image2}`;

//Player02 dice rolls

image03.src = `${image3}`;
image04.src = `${image4}`;


if(die1Outcome == 1 || die2Outcome == 1){
    scoreThisRound = 0;
    score01.innerHTML = `<b>${scoreThisRound}</b>`;
    total01.innerHTML = `<b>${totalScore1}</b>`;
   

}else if((die1Outcome == die2Outcome)&&(die1Outcome != 1)){
    scoreThisRound = (die1Outcome + die2Outcome) * 2;
   
    totalScore1 += scoreThisRound;
    score01.innerHTML = `<b>${scoreThisRound}</b>`;
    total01.innerHTML = `<b>${totalScore1}</b>`;
}else{
    scoreThisRound = die1Outcome + die2Outcome;
    totalScore1 += scoreThisRound;
    score01.innerHTML = `<b>${scoreThisRound}</b>`;
    total01.innerHTML = `<b>${totalScore1}</b>`;
}

if(die3Outcome == 1 || die4Outcome == 1){
    scoreThisRound = 0;
    score02.innerHTML = `<b>${scoreThisRound}</b>`;
    total02.innerHTML = `<b>${totalScore2}</b>`
}else if(die3Outcome == die4Outcome){
    scoreThisRound = (die3Outcome + die4Outcome) * 2;
    totalScore2 += scoreThisRound;
    score02.innerHTML = `<b>${scoreThisRound}</b>`;
    total02.innerHTML = `<b>${totalScore2}</b>`;
}else{
    scoreThisRound = die3Outcome + die4Outcome;
    totalScore2 += scoreThisRound;
    score02.innerHTML = `<b>${scoreThisRound}</b>`;
    total02.innerHTML = `<b>${totalScore2}</b>`;
}

});







