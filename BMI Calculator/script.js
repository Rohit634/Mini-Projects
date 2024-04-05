function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if (!height || !weight) {
        alert('Please enter both height and weight.');
        return;
    }

    var heightMeters = height / 100;
    var bmi = weight / (heightMeters * heightMeters);
    var resultDiv = document.getElementById('result');

    var bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi < 25) {
        bmiCategory = 'Normal weight';
    } else if (bmi < 30) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }

    resultDiv.innerHTML = `BMI: ${bmi.toFixed(2)} (${bmiCategory})`;
}
