var navHome, boardSize, menuIcon, sideNav, docBody, navGame, navInstructions, gameContainer, instructionsContainer,landingContainer;
menuIcon = document.getElementById('menu-icon');
sideNav = document.getElementById('side-nav');
docBody = document.getElementsByTagName('body');
navGame = document.getElementById('nav-game');
navHome = document.getElementById('nav-home');
navInstructions= document.getElementById('nav-instructions');
gameContainer = document.getElementById('game');
instructionsContainer= document.getElementById('instructions');
landingContainer= document.getElementById('landing');
boardSize = { x: 4, y:1};

menuIcon.addEventListener('click',function(e){
  e.preventDefault();
  if( sideNav.classList.contains('inactive')){
    sideNav.classList.remove('inactive');
    sideNav.classList.add('active');
  }else{
    sideNav.classList.add('inactive');
    sideNav.classList.remove('active');
  }
});

navInstructions.addEventListener('click',function(e){
  e.preventDefault();
  if( instructionsContainer.classList.contains('hidden')){
    document.querySelector('div.container.active').classList.add('hidden');
    document.querySelector('div.container.active').classList.remove('active');
    instructions.classList.add('active');
    instructions.classList.remove('hidden');
  }
});
navHome.addEventListener('click',function(e){
  e.preventDefault();
  if( landingContainer.classList.contains('hidden')){
    document.querySelector('div.container.active').classList.add('hidden');
    document.querySelector('div.container.active').classList.remove('active');
    landingContainer.classList.add('active');
    landingContainer.classList.remove('hidden');
  }
});
navGame.addEventListener('click',function(e){
  e.preventDefault();
  if( gameContainer.classList.contains('hidden')){
    document.querySelector('div.container.active').classList.add('hidden');
    document.querySelector('div.container.active').classList.remove('active');
    gameContainer.classList.add('active');
    gameContainer.classList.remove('hidden');
  }
});

function shuffle(arr) {
    var j, x, i;
    for (i = arr.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = x;
    }
  return arr
}
function checkVals(x,y){
  if (x == y){ return true; }
}
var board = document.querySelectorAll('.board')[0];
 var cards = board.children;
 var arrCards= Array.prototype.slice.call(cards, 0);
 var cardVals= ['a','a','b','b'];
 var v = shuffle(cardVals);
 var lastCard;
 var thisCard;
 function updateCard(card,val){
   if( (thisCard !== undefined)){
     console.log('lastCard: ',lastCard);
     lastCard = thisCard;
   }
   thisCard = val;
   if((lastCard === thisCard ) && (thisCard !== undefined)){
     console.log('matched cards');
     // var cardSet = document.querySelectorAll('.card[data-val="'+val+'"]');
     $('.card[data-val="'+val+'"]').hide();
     // console.log(cardSet);
     // thisCard = val;
     // return false;
   }
   if((lastCard !== undefined) && (thisCard !== undefined)){
     if ($('.card.active').length >= 2){
       $('.card.active').addClass('blank').removeClass('active');
     }
   }
   console.log('thisCard: ',thisCard);
   return false;
 }
 function listen(){
 for (i = 0; i < cards.length; i++){ 
   var card = cards[i];
   var el = document.createElement('p');
   var content = document.createTextNode(v[i]);
   el.appendChild(content);
   card.appendChild(el);
   cards[i].dataset.val = v[i];
   cards[i].addEventListener('click', function(e){
     e.preventDefault();
     console.log(e.target.parentElement.dataset.val);
     updateCard(e.target.parentElement,e.target.parentElement.dataset.val);
   });
 }
   
   // $('.card').each(function(){
   //   $(this).on('click',function(){
   //     this.appendChild(v[])
   //   
   //   })
   // })
  $('.card.blank').click(function(){$(this).toggleClass('blank').addClass('active');})
 }
function init(){
  return listen();
}
init();

