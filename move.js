const score =JSON.parse(localStorage.getItem('score'))||{
    Wins:0,
    Losses:0,
        Tie:0,
    };
    updateScore();
        function computerMove(){
            const random=Math.random();
            let compmove;
            if(random>=0 && random<1/3){
                compmove='Rock';
            
        
            }
            else if(random>=1/3 && random<2/3){
                    compmove='Paper';
                }
                    else if(random>=2/3 && random<1){
                        compmove='Scissors';
                }
          
                return compmove;
            }
function Result(playerMove){
const comp=computerMove();

let result;


if(playerMove==='Rock'){
    if(comp==='Rock')
    result='Tie';

else if(comp==='Paper')
result='You Lose';
else if(comp==='Scissors')
result='You Win';

}
if(playerMove==='Paper'){
    if(comp==='Paper')
    result='Tie'
else if(comp==='Rock')
result='You Win';
else if(comp==='Scissors')
result='You Lose'
}
        if(playerMove==='Scissors'){
          if(comp==='Rock')
          result='You Lose';
     else if(comp==='Paper')
        result='You Win';
      else if(comp==='Scissors')
      result='Tie';
   
}


if(result==='You Win'){
    score.Wins +=1;}

else if(result==='You Lose'){
score.Losses+=1;
}
else if(result==='Tie'){
score.Tie+=1;
}
localStorage.setItem('score',JSON.stringify(score));
console.log( localStorage.getItem('score'))
;       updateScore();
document.querySelector('.js-choice').innerHTML=` Result:${result}`;
document.querySelector('.js-result').innerHTML=`<img src="karthik.jpg" class="images"> <img src="${playerMove}-emoji.png" class="images">                   <img src="images.png" class="images"> <img src="${comp}-emoji.png" class="images">`;


}     
function updateScore(){
document.querySelector('.js-score').innerHTML=`wins:${score.Wins}  looses:${score.Losses} Tie:${score.Tie}`


}