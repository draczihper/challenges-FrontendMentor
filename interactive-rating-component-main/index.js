var pop = document.getElementById('pop');
var rated = document.querySelectorAll('li');
var rating = document.getElementById('rating');

function showPop() {
    pop.classList.add('popMsgContainer');
}

rated.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
})

