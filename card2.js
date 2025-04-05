document.querySelectorAll('.text-card-2').forEach(card => {
    card.addEventListener('click', function () {
        this.classList.toggle('expanded');
    });
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('.text-card-2')) {
        document.querySelectorAll('.text-card-2').forEach(card => {
            if (card.classList.contains('expanded')) {
                card.classList.remove('expanded');
            }
        });
    }
});

const sound = new Audio('pop.mp3');

document.querySelectorAll('.text-card-2').forEach(card => {
    card.addEventListener('click', function () {
        sound.play();
    });
});
