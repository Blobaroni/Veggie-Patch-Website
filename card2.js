document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".text-card-2");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            // Remove 'expanded' from all other cards
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.remove("expanded");
                }
            });

            // Toggle 'expanded' on the clicked card
            card.classList.toggle("expanded");
        });
    });
});