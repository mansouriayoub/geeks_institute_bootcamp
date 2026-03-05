const API_KEY = 'b6bbeaec6af9c37939e237cc';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

// DOM Elements
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convert-btn');
const switchBtn = document.getElementById('switch-btn');
const resultDisplay = document.getElementById('result-display');

// Function to fetch and populate currencies
const fetchCurrencies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/codes`);
        const data = await response.json();

        if (data.result === 'success') {
            const codes = data.supported_codes;

            // Clear loading/empty states if any
            fromCurrencySelect.innerHTML = '';
            toCurrencySelect.innerHTML = '';

            codes.forEach(codePair => {
                const [currencyCode, currencyName] = codePair;
                const optionText = `${currencyCode} — ${currencyName}`;

                // Create options for both selects
                const option1 = new Option(optionText, currencyCode);
                const option2 = new Option(optionText, currencyCode);

                fromCurrencySelect.add(option1);
                toCurrencySelect.add(option2);
            });

            // Set default values just to make it user-friendly initially
            fromCurrencySelect.value = 'MAD';
            toCurrencySelect.value = 'TRY'; // Setting TRY as default for "to" or whatever matches the user context

        } else {
            console.error("Failed to fetch supported codes.");
            resultDisplay.textContent = "Error loading currencies.";
        }
    } catch (error) {
        console.error("Error fetching currencies:", error);
        resultDisplay.textContent = "Error connecting to API.";
    }
};

// Function to handle the conversion
const handleConversion = async () => {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = amountInput.value;

    if (!amount || amount <= 0) {
        resultDisplay.textContent = "Please enter a valid amount.";
        return;
    }

    resultDisplay.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Converting...';

    try {
        // Fetch pair conversion rate
        const response = await fetch(`${BASE_URL}/pair/${fromCurrency}/${toCurrency}/${amount}`);
        const data = await response.json();

        if (data.result === 'success') {
            const conversionResult = data.conversion_result;
            resultDisplay.textContent = `${amount} ${fromCurrency} = ${conversionResult.toFixed(2)} ${toCurrency}`;
        } else {
            // Handle API specific errors
            console.error("Conversion failed:", data);
            resultDisplay.textContent = "Error performing conversion.";
        }

    } catch (error) {
        console.error("Error during conversion:", error);
        resultDisplay.textContent = "Error connecting to API.";
    }
};

const switchCurrencies = () => ([fromCurrencySelect.value, toCurrencySelect.value] = [toCurrencySelect.value, fromCurrencySelect.value], handleConversion());

// Event Listeners
document.addEventListener('DOMContentLoaded', fetchCurrencies);
convertBtn.addEventListener('click', handleConversion);
switchBtn.addEventListener('click', switchCurrencies);
