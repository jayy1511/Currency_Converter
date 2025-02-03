const currencyData = {
    "AED": "AE", "AFN": "AF", "XCD": "AG", "ALL": "AL", "AMD": "AM", "ANG": "AN", "AOA": "AO", "AQD": "AQ", "ARS": "AR", "AUD": "AU", "AZN": "AZ", "BAM": "BA", "BBD": "BB", "BDT": "BD", "XOF": "BE", "BGN": "BG", "BHD": "BH", "BIF": "BI", "BMD": "BM", "BND": "BN", "BOB": "BO", "BRL": "BR", "BSD": "BS", "NOK": "BV", "BWP": "BW", "BYR": "BY", "BZD": "BZ", "CAD": "CA", "CDF": "CD", "XAF": "CF", "CHF": "CH", "CLP": "CL", "CNY": "CN", "COP": "CO", "CRC": "CR", "CUP": "CU", "CVE": "CV", "CYP": "CY", "CZK": "CZ", "DJF": "DJ", "DKK": "DK", "DOP": "DO", "DZD": "DZ", "ECS": "EC", "EEK": "EE", "EGP": "EG", "ETB": "ET", "EUR": "FR", "FJD": "FJ", "FKP": "FK", "GBP": "GB", "GEL": "GE", "GGP": "GG", "GHS": "GH", "GIP": "GI", "GMD": "GM", "GNF": "GN", "GTQ": "GT", "GYD": "GY", "HKD": "HK", "HNL": "HN", "HRK": "HR", "HTG": "HT", "HUF": "HU", "IDR": "ID", "ILS": "IL", "INR": "IN", "IQD": "IQ", "IRR": "IR", "ISK": "IS", "JMD": "JM", "JOD": "JO", "JPY": "JP", "KES": "KE", "KGS": "KG", "KHR": "KH", "KMF": "KM", "KPW": "KP", "KRW": "KR", "KWD": "KW", "KYD": "KY", "KZT": "KZ", "LAK": "LA", "LBP": "LB", "LKR": "LK", "LRD": "LR", "LSL": "LS", "LTL": "LT", "LVL": "LV", "LYD": "LY", "MAD": "MA", "MDL": "MD", "MGA": "MG", "MKD": "MK", "MMK": "MM", "MNT": "MN", "MOP": "MO", "MRO": "MR", "MTL": "MT", "MUR": "MU", "MVR": "MV", "MWK": "MW", "MXN": "MX", "MYR": "MY", "MZN": "MZ", "NAD": "NA", "XPF": "NC", "NGN": "NG", "NIO": "NI", "NPR": "NP", "NZD": "NZ", "OMR": "OM", "PAB": "PA", "PEN": "PE", "PGK": "PG", "PHP": "PH", "PKR": "PK", "PLN": "PL", "PYG": "PY", "QAR": "QA", "RON": "RO", "RSD": "RS", "RUB": "RU", "RWF": "RW", "SAR": "SA", "SBD": "SB", "SCR": "SC", "SDG": "SD", "SEK": "SE", "SGD": "SG", "SKK": "SK", "SLL": "SL", "SOS": "SO", "SRD": "SR", "STD": "ST", "SVC": "SV", "SYP": "SY", "SZL": "SZ", "THB": "TH", "TJS": "TJ", "TMT": "TM", "TND": "TN", "TOP": "TO", "TRY": "TR", "TTD": "TT", "TWD": "TW", "TZS": "TZ", "UAH": "UA", "UGX": "UG", "USD": "US", "UYU": "UY", "UZS": "UZ", "VEF": "VE", "VND": "VN", "VUV": "VU", "YER": "YE", "ZAR": "ZA", "ZMK": "ZM", "ZWD": "ZW"
};

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const fromFlag = document.getElementById("fromFlag");
const toFlag = document.getElementById("toFlag");

// Function to populate dropdowns with currencies
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

    // Set default flags
    updateFlag(fromFlag, fromCurrency.value);
    updateFlag(toFlag, toCurrency.value);

    // Add event listeners to update flags when currency changes
    fromCurrency.addEventListener("change", () => updateFlag(fromFlag, fromCurrency.value));
    toCurrency.addEventListener("change", () => updateFlag(toFlag, toCurrency.value));
}

// Function to update flag image
function updateFlag(flagElement, currencyCode) {
    const countryCode = currencyData[currencyCode];
    flagElement.src = `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
    flagElement.alt = currencyCode;
}

// Function to convert currency
function convertCurrency() {
    let amount = document.getElementById("amount").value;
    if (amount === "") {
        alert("Please enter an amount");
        return;
    }
    let from = fromCurrency.value;
    let to = toCurrency.value;
    let url = `https://api.exchangerate-api.com/v4/latest/${from}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let rate = data.rates[to];
            document.getElementById("result").innerText = `${amount} ${from} = ${(amount * rate).toFixed(2)} ${to}`;
        })
        .catch(error => console.error("Error fetching exchange rates:", error));
}

// Initialize
populateCurrencies();