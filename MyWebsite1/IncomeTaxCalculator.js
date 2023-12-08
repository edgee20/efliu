function calculateTax() {
    const income = document.getElementById('income').value;

    let tax = 0;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 400000) {
        tax = 0.2 * (income - 250000);
    } else if (income <= 800000) {
        tax = 30000 + 0.25 * (income - 400000);
    } else if (income <= 2000000) {
        tax = 130000 + 0.3 * (income - 800000);
    } else if (income <= 8000000) {
        tax = 490000 + 0.32 * (income - 2000000);
    } else {
        tax = 2410000 + 0.35 * (income - 8000000);
    }

    document.getElementById('result').innerHTML = `Income Tax: ${tax.toFixed(2)}`;
}