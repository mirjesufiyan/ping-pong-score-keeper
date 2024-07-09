const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const resetbtn = document.querySelector('#reset');
const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');
const score = document.querySelector('#playto');


let p1score = 0;
let winningScore = 3;
let gameOver = false;
let p2score = 0

p1btn.addEventListener('click', function () {
    if (!gameOver) {
        p1score += 1;
        if (p1score === winningScore) {
            gameOver = true;
            p1display.classList.add('has-text-success')
            p2display.classList.add('has-text-danger')
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p1display.textContent = p1score;
    }
})

p2btn.addEventListener('click', function () {
    if (!gameOver) {
        p2score += 1;
        if (p2score === winningScore) {
            gameOver = true;
            p2display.classList.add('has-text-success')
            p1display.classList.add('has-text-danger')
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p2display.textContent = p2score;
    }
})
score.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})
resetbtn.addEventListener('click', reset)

function reset() {
    gameOver = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('has-text-success', 'has-text-danger');
    p2display.classList.remove('has-text-success', 'has-text-danger');
    p1btn.disabled = false;
    p2btn.disabled = false;
}