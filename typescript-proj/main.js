console.log("Loaded");
function addNumbers() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultSpan = document.getElementById('result');
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        resultSpan.textContent = sum.toString();
    }
    else {
        resultSpan.textContent = 'Please enter valid numbers';
    }
}
