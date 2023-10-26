
// function showAnswer() {
   
//     const btnImg = document.querySelector('.btn-img');
//         dropdownText.style.display = 'block';
//         btnImg.style.transform = 'rotate(180deg)';
// }

const dropdownText = document.querySelector(".dropdown");
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    question.addEventListener('click', () => { 
        dropdownText.style.display = (dropdownText.style.display === 'block') ? 'none' : 'block';
    });
});