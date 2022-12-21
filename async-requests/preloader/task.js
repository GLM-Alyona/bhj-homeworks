const items = document.getElementById('items');
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        document.getElementById('loader').classList.remove('loader_active');
        
        let valuteObj = JSON.parse(xhr.response).response.Valute
        for (const valute in valuteObj) {
            items.insertAdjacentHTML('beforeEnd', `
                <div class="item">
                    <div class="item__code">${valuteObj[valute].CharCode}</div>
                    <div class="item__value">${valuteObj[valute].Value.toFixed(2)}</div>
                    <div class="item__currency">руб.</div>
                </div>
            `);
        }
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.send();



