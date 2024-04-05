var intervalId;

function startTimer() {
    var targetDate = new Date(document.getElementById('date').value).getTime();

    if (isNaN(targetDate)) {
        alert('Please enter a valid date and time.');
        return;
    }

    intervalId = setInterval(function() {
        var currentDate = new Date().getTime();
        var distance = targetDate - currentDate;

        if (distance < 0) {
            clearInterval(intervalId);
            document.getElementById('timer').innerHTML = 'Countdown expired';
            return;
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
