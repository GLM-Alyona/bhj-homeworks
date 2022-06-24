const getHole = index => document.getElementById(`hole${index}`),
    deadSpan = document.getElementById('dead'),
    lostSpan = document.getElementById('lost');
let dead = parseInt(deadSpan.textContent),
    lost = parseInt(lostSpan.textContent);

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (getHole(i).classList.contains('hole_has-mole')) {
            dead += 1;
        } else {
            lost += 1;
        }

        if (dead >= 10) {
            alert('Победа!');
            dead = 0;
            lost = 0;
        }

        if (lost >= 5) {
            alert('Вы проиграли!');
            dead = 0;
            lost = 0;
        }

        deadSpan.textContent = dead;
        lostSpan.textContent = lost;
    }
}