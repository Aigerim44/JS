const riddles = () => {
    const riddleCards = document.querySelectorAll('.riddle_card');

    riddleCards.forEach((card) => {
        const answer = card.querySelector('.riddle_answer');
        const button = card.querySelector('.riddle_button');

        button.addEventListener('click', () => {
            const answerDisplayStyle = getComputedStyle(answer).display;

            if (answerDisplayStyle === 'none') {
                answer.style.display = 'block';
                button.textContent = 'Скрыть ответ';
            } else {
                answer.style.display = 'none';
                button.textContent = 'Показать ответ';
            }
        });
    });
};

riddles();