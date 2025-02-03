const currencyData = {
    "AED": "AE", "AFN": "AF", "XCD": "AG", "ALL": "AL", "AMD": "AM", "ANG": "AN", "AOA": "AO", "ARS": "AR", "AUD": "AU", "AZN": "AZ", "BAM": "BA", "BBD": "BB", "BDT": "BD", "EUR": "FR", "GBP": "GB", "INR": "IN", "JPY": "JP", "USD": "US"
};

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const fromFlag = document.getElementById("fromFlag");
const toFlag = document.getElementById("toFlag");

function populateCurrencies() {
    for (let code in currencyData) {
        let option1 = document.createElement("option");
        let option2 = document.createElement("option");
        option1.value = option2.value = code;
        option1.textContent = code;
        option2.textContent = code;
        fromCurrency.appendChild(option1);
        toCurrency.appendChild(option2);
    }
    updateFlag(fromFlag, fromCurrency.value);
    updateFlag(toFlag, toCurrency.value);

    fromCurrency.addEventListener("change", () => updateFlag(fromFlag, fromCurrency.value));
    toCurrency.addEventListener("change", () => updateFlag(toFlag, toCurrency.value));
}

function updateFlag(flagElement, currencyCode) {
    const countryCode = currencyData[currencyCode];
    flagElement.src = `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
}

function convertCurrency() {
    alert("Currency conversion feature will be implemented soon!");
}

populateCurrencies();
