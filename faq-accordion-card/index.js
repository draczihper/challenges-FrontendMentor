
function showAnswer() {
    const dropdownText = document.querySelector(".dropdown");
    const btnImg = document.querySelector('.btn-img');
        dropdownText.style.display = 'block';
        btnImg.style.transform = 'rotate(180deg)';
}

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    question.addEventListener('click', () => {
        showAnswer();
    });
});