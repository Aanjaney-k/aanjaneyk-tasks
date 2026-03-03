const time = document.getElementById('sec');
const startBtn = document.getElementById('startBtn');
let timeLeft = 10;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    timeLeft = 10;
    time.textContent = timeLeft;

    const interval = setInterval(() => {
        timeLeft--;
        time.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(interval);
            startBtn.disabled = false;
            alert('Time is up!');
        }
    }, 1000);
});