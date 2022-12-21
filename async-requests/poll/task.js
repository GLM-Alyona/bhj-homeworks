const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let xhrResponse = JSON.parse(xhr.response);

        pollTitle.textContent = xhrResponse.data.title;

        xhrResponse.data.answers.forEach((answer) => pollAnswers.insertAdjacentHTML('beforeEnd', `<button class="poll__answer">${answer}</button>`));

        const buttons = Array.from(document.querySelectorAll('.poll__answer'));

        buttons.forEach((button) => {
            button.style.marginRight = "10px";
            button.style.borderRadius = "10px";
            button.style.backgroundColor = "#fff";
            button.style.border = "1px solid #000000";
            button.style.color = "#000000";
            button.onclick = () => {
                alert('Спасибо, ваш голос засчитан!');

                let xhrStat = new XMLHttpRequest();

                xhrStat.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                xhrStat.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhrStat.send(`vote=${xhrResponse.id}&answer=${buttons.indexOf(button)}`);

                xhrStat.addEventListener('readystatechange', () => {
                    if (xhrStat.readyState === xhrStat.DONE) {
                        pollAnswers.textContent = '';
                        let xhrStatResponse = JSON.parse(xhrStat.response);
                        let totalVotes = 0;
                        xhrStatResponse.stat.forEach((answer) => totalVotes += answer.votes);

                        xhrStatResponse.stat.forEach((answer) => {
                            pollAnswers.insertAdjacentHTML('beforeEnd', `
                            <div>${answer.answer}: <b>${(answer.votes*100/totalVotes).toFixed(2)}%</b></div>
                            `);
                        });
                    }
                });
            };
        });
    }
});