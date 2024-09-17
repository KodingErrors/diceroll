function rollDice() {
    const diceCount = parseInt(document.getElementById('diceCount').value, 10); // Get the number of dice from the drop-down menu
    const diceElements = document.querySelectorAll('.dice'); // Get all dice elements
    const gifContainer = document.getElementById('gifContainer'); // Container for GIFs
    let total = 0; // Variable to store the total of the dice rolls

    // Hide all dice initially
    diceElements.forEach(dice => {
        dice.style.display = 'none';
    });

    // Clear existing GIFs
    gifContainer.innerHTML = '';

    // Show GIFs based on the number of dice
    for (let i = 0; i < diceCount; i++) {
        const gif = document.createElement('img');
        gif.src = 'gifmaker_me.gif'; // Path to the GIF
        gif.alt = 'Rolling Dice GIF';
        gifContainer.appendChild(gif);
    }

    // Display the GIFs container
    gifContainer.style.display = 'flex';

    // Hide GIFs after 2 seconds and show the dice
    setTimeout(function() {
        // Hide the GIF container
        gifContainer.style.display = 'none';

        // Show the required number of dice
        for (let i = 0; i < diceCount; i++) {
            const dice = document.getElementById('dice' + (i + 1));
            dice.style.display = 'block';

            // Roll the dice and calculate total
            const randomNumber = Math.floor(Math.random() * 6) + 1; // 1-6
            const randomImageSource = "images/dice" + randomNumber + ".png"; // images/dice1.png - images/dice6.png
            document.querySelector(`#dice${i + 1} img`).setAttribute("src", randomImageSource);
            total += randomNumber; // Add the roll to the total
        }

        // Update the total label
        document.getElementById('totalLabel').textContent = "Total: " + total;

        // Determine and update the winner
        updateWinner(diceCount);
    }, 2000); // Adjust this based on your GIF duration (2000 milliseconds = 2 seconds)
}

function updateWinner(diceCount) {
    // Implement logic to determine the winner based on dice count and values
    // For simplicity, we'll just update the h1 tag with a placeholder message
    const h1 = document.querySelector('h1');
    if (diceCount === 2) {
        h1.textContent = "Two dice rolled!";
    } else if (diceCount === 3) {
        h1.textContent = "Three dice rolled!";
    } else {
        h1.textContent = "One die rolled!";
    }
}
