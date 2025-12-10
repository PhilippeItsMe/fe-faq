const buttons = document.querySelectorAll('button');
const buttonsImg = document.querySelectorAll('button img');
const answers = document.querySelectorAll('.answer');


function faqClicked(e) {
    const crossClicked = e.target.closest('button');
    const imgCrossClicked = crossClicked.querySelector('img');
    
    // Remonter au div parent (q1, q2, q3, q4) puis trouver la réponse
    const answerClicked = crossClicked.closest('[id^="q"]').querySelector('.answer');

    // Réinitialisation
    buttonsImg.forEach(img => img.src = "assets/images/icon-plus.svg");
    answers.forEach(answer => answer.classList.add('hide'));
    
    // Afficher la réponse cliquée et changer son icône
    answerClicked.classList.remove('hide');
    imgCrossClicked.src = "assets/images/icon-minus.svg";
}

buttons.forEach(button => {
    button.addEventListener('click', faqClicked);
});
