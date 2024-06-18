document.getElementById('startButton').addEventListener('click', function() {
    const numPlayers = parseInt(document.getElementById('numPlayers').value);
    if (isNaN(numPlayers) || numPlayers < 2) {
        alert('Please enter a valid number of players (minimum 2).');
        return;
    }
    document.getElementById('bottle').addEventListener('click', function() {
        const angle = 360 / numPlayers; 
        const randomIndex = Math.floor(Math.random() * 100);
        const rotateAngle = randomIndex * angle;
        this.style.transform = `rotate(${rotateAngle}deg)`;
    });
});
