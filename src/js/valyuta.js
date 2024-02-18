document.addEventListener("DOMContentLoaded", function () {
    fetch(`http://localhost:6464/Exchange`)
        .then(response => response.json())
        .then(datas => {
            datas.forEach(data => {
                const currencies = data.currencies;
                const tableId = data.id == 1 ? 'cashTable' : (data.id == 2 ? 'noncashTable' : 'cardTable');
                const exchangeTable = document.getElementById(tableId);

                currencies.forEach(currency => {
                    const row = exchangeTable.insertRow();
                    row.innerHTML = `
                        <td>${currency.currency}</td>
                        <td>${currency.buy}<i class="fa-solid fa-chevron-down"></i></td>
                        <td>${currency.sell}<i class="fa-solid fa-chevron-down"></i></td>           
                    `;
                });
            });
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
});


const flags = {
    RUB: 'url(https://unibank.az/assets/images/rub.png)',
    GBP: 'url(https://unibank.az/assets/images/gbp.png)',
    USD: 'url(https://unibank.az/assets/images/usd.png)',
    EUR: 'url(https://unibank.az/assets/images/euro.png)',
    AZN: 'url(https://unibank.az/assets/images/azn.png)'
};

function updateFlag(currencyElementId, flagElementId) {
    const selectedCurrency = document.getElementById(currencyElementId).value;
    const flagUrl = flags[selectedCurrency];
    document.getElementById(flagElementId).style.backgroundImage = flagUrl;
}

updateFlag('fromCurrency', 'fromFlag');
updateFlag('toCurrency', 'toFlag');


const exchangeRates = {
    RUB: 0.013,
    GBP: 1.36,  
    USD: 1,     
    EUR: 1.21,  
    AZN: 0.59   
};

function calculateExchange() {
    const amount = parseFloat(document.getElementById('fromAmount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const exchangeRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    const result = amount * exchangeRate;

    document.getElementById('toAmount').value = result.toFixed(2);
}

