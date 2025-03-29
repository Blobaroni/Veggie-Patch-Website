document.addEventListener('DOMContentLoaded', function () {
    const veggieCards = document.querySelectorAll('.veggie-card');

    veggieCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            this.style.zIndex = '2';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            this.style.zIndex = '1';
        });
    });
});