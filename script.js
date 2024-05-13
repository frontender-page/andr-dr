// script.js
alert("С днем рождения!");
document.getElementById("animateButton").addEventListener("click", function() {
    // Додавання 150 "пятнишок"
    for (let i = 0; i < 100; i++) {
        // Створення елементу для "пятнишки"
        var confetti = document.createElement("div");
        confetti.className = "confetti";
        document.body.appendChild(confetti);

        // Випадкові значення для розташування "пятнишки" на екрані
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;

        // Встановлення випадкового кольору
        var color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        confetti.style.backgroundColor = color;

        // Встановлення випадкового місця розташування
        confetti.style.left = x + "px";
        confetti.style.top = y + "px";

        // Анімація розліту "пятнишки"
        confetti.animate([
            { transform: 'translate(0, 0)' }, // Початкова позиція
            { transform: 'translate(' + (Math.random() * 200 - 100) + 'px, ' + (Math.random() * 200 - 100) + 'px)' } // Випадковий розліт
        ], {
            duration: 5000, // Тривалість анімації в мс
            iterations: 1, // Кількість ітерацій (1 = один раз)
            easing: 'ease-out' // Спосіб згладжування руху
        });

        // Затримка перед видаленням елементу "пятнишки" з DOM
        setTimeout(function() {
            confetti.remove();
        }, 1100); // Час анімації плюс трохи більше для гарантії видалення
    }
});
