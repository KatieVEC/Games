let gameData = [];  // This will hold the questions for each difficulty
let currentRound = 0;
let score = 0;
let difficulty = 'easy'; // Default difficulty

// Define the easy questions
const easyQuestions = [
    {
        questionImage: "pics/angry.jpg",  
        options: ["angry", "sad", "surprised"],
        correctAnswer: 0  
    },
    {
        questionImage: "pics/happy.jpg",  
        options: ["disgusted", "happy", "scared"],
        correctAnswer: 1
    },
    {
        questionImage: "pics/surprise.jpg",  
        options: ["surprised", "angry", "sad"],
        correctAnswer: 0
    },
    {
        questionImage: "pics/disgust.jpg",  
        options: ["scared", "happy", "disgusted"],
        correctAnswer: 2
    },
    {
        questionImage: "pics/sad.jpg",  
        options: ["angry", "sad", "disgusted"],
        correctAnswer: 1
    },
    {
        questionImage: "pics/fear.jpg",  
        options: ["surprised", "happy", "scared"],
        correctAnswer: 2
    },
    // Add more rounds here...
];

// Define the hard questions
const hardQuestions = [
    {
        questionImage: "pics/shame.jpg",  
        options: ["jealous", "ashamed", "curious"],
        correctAnswer: 1  
    },
    {
        questionImage: "pics/curious.jpg",  
        options: ["lonely", "curious", "guilty"],
        correctAnswer: 1  
    },
    {
        questionImage: "pics/lonely.jpg",  
        options: ["ashamed", "shy", "lonely"],
        correctAnswer: 2  
    },
    {
        questionImage: "pics/shy.jpg",  
        options: ["shy", "curious", "jealous"],
        correctAnswer: 0  
    },
    {
        questionImage: "pics/guilt.jpg",  
        options: ["curious", "shy", "guilty"],
        correctAnswer: 2  
    },
    {
        questionImage: "pics/jealous.jpg",  
        options: ["shy", "jealous", "lonely"],
        correctAnswer: 1 
    },
    // Add more rounds here...
];

// Set the difficulty and start the game
function setDifficulty(level) {
    difficulty = level;  // Store the selected difficulty

    // Choose the game data based on the selected difficulty
    if (difficulty === 'easy') {
        gameData = easyQuestions;
    } else {
        gameData = hardQuestions;
    }

    // Hide the difficulty menu and show the game container
    document.getElementById('difficulty-menu').style.display = 'none';  // Hide difficulty menu
    document.getElementById('game-container').style.display = 'block';   // Show game container

    // Initialize the game (load the first question)
    currentRound = 0;  // Reset the round to the first question
    score = 0;  // Reset the score
    loadQuestion();  // Load the first question
}

// Function to load the question
function loadQuestion() {
    const questionData = gameData[currentRound];
    document.getElementById('main-image').src = questionData.questionImage;

    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = questionData.options[index];
    });

    // Reset feedback
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-button').style.display = 'none';  // Hide next round button initially
}

// Check the user's answer
function checkAnswer(selectedOption) {
    const questionData = gameData[currentRound];
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next-button');

    if (selectedOption === questionData.correctAnswer) {
        feedbackElement.textContent = "Correct, great job!";
        feedbackElement.style.color = "green";
        score++;  // Increment score on correct answer
    } else {
        feedbackElement.textContent = "Sorry, that was incorrect. Try again, or move on to the next round!";
        feedbackElement.style.color = "red";
    }

    nextButton.style.display = 'block'; // Show next round button after answer is selected
}

function nextRound() {
    currentRound++;

    if (currentRound < gameData.length) {
        loadQuestion();
    } else {
        // After the last round, show a message that the game is over
        document.getElementById('feedback').textContent = "You've completed the game!";
        document.getElementById('next-button').style.display = 'none';  // Hide the button
        document.getElementById('back-to-levels-button').style.display = 'block'; // Show the back button

        // Display the final score
        displayFinalScore();
    }
}

// Function to display the final score
function displayFinalScore() {
    // Display the final score by updating the text content
    document.getElementById('final-score').textContent = `Your final score: ${score}`;
    
    // Make sure the final score container is visible
    document.getElementById('final-score-container').style.display = 'block';
}
// Function to go back to the levels selection screen
function goBackToLevels() {
    // Hide the game container and the 'Back to Levels' button
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('final-score-container').style.display = 'none'; // Hide final score
    document.getElementById('back-to-levels-button').style.display = 'none'; // Hide the back button

    // Show the level selection menu
    document.getElementById('difficulty-menu').style.display = 'block';
}

window.onload = function() {
    // Do not call loadQuestion here, because it should only load after difficulty is selected
};
