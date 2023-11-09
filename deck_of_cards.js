let cardsArray = [];
let currentIndex = 0;

const URL = "https://deckofcardsapi.com/api/deck/new/draw/?count=52"
async function getCards() {
axios.get(URL)
.then(function (response) {
  cardsArray = response.data.cards;
  console.log("hopefully all cards have been pulled")
  console.log(cardsArray);
  })
.catch(function (error) {
   
    console.log(error);
  });
  
}


document.addEventListener('DOMContentLoaded', function() {

document.getElementById('next-card-button').addEventListener('click', function(){
    if(currentIndex < cardsArray.length) {
        const card = cardsArray[currentIndex];
        const cardElement = document.createElement('img');
        cardElement.src = card.image;
        const container = document.getElementById('card-output');
        container.appendChild(cardElement);
        currentIndex++;
   
 } else {
            console.log("not working");
        }
      
    });

getCards();

});
