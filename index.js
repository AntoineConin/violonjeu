// let ouaiiis = document.querySelector('h1');
// ouaiiis.textContent = 'n impote quoi';

// let osef = document.querySelector('.test');
// osef.textContent = 'réussite';

let score = 0;
let affichScore = document.querySelector('merde');

document.querySelector('.sol').addEventListener('click', function(){
    score = score + 1;
});

affichScore.innerHTML += 'score.toString()'; 