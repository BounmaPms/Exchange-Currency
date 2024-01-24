function Convert(){
    let input_currency = parseFloat(document.getElementById("input").value);
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    const ExchangeRate = {
        USD: 1,
        THB: 35.60550,
        VND: 24550.60000,
        JPY: 147.94500,
        CNY: 7.19360,
        LAK: 20678.80000
    };
    let Output = (input_currency / ExchangeRate[from]) * ExchangeRate[to];
    document.getElementById('output').value = Output.toFixed(2);
}