let selected = 0;
const stars = document.querySelectorAll('.star');
const label = document.getElementById('label');

stars.forEach(s => {
    s.onmouseover = () => stars.forEach(x => x.classList.toggle('on', x.dataset.v <= s.dataset.v));
    s.onmouseout = () => stars.forEach(x => x.classList.toggle('on', x.dataset.v <= selected));
    s.onclick = () => {
        selected = s.dataset.v;
        label.textContent = `You rated this ${selected} star${selected > 1 ? 's' : ''}`;
    };
});