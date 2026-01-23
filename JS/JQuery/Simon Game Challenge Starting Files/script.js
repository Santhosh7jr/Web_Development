let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let keyPressed = null;
let background = $(document.body).css("background-color");
let currentLevel = 1;


$(document).on("keypress", () => {

    keyPressed = true;
    $("h1").text(`Level 1`);

    setTimeout(() => {
        nextSequence();
    }, 1000);

});

const nextSequence = () => {

    let randomNumber = Math.round(Math.random() * 3);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

}

const playSound = (soundName) => {

    let audio = new Audio(`./sounds/${soundName}.mp3`);
    audio.play();

}

const handlerFunction = () => {

    let userChosenColor = null;
    let i = 0;
    
    $(".btn").on("click", (event) => {

        if (keyPressed === null) {

            wrongSound();
            return;

        }

        userChosenColor = event.target.classList[1];
        userClickedPattern.push(userChosenColor);

        $(`#${userChosenColor}`).fadeOut(100).fadeIn(100);

        if (gamePattern[i] === userClickedPattern[i]) {

            playSound(userChosenColor);
            i++;
             
        } else {

            wrongSound();
            $("h1").text("Press A Key to Start");
            keyPressed = null;
            gamePattern.length = 0;
            userClickedPattern.length = 0;
            currentLevel = 1;
            i = 0;
            return;

        }

        if (i === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
                userClickedPattern.length = 0;
                $("h1").text(`Level ${++currentLevel}`);
                i = 0;
            }, 1000);
        }

    });

}

const wrongSound = () => {
    $(document.body).css("background-color", "red");

        playSound("wrong");

        setTimeout(() => {
            $(document.body).css("background-color", background);
    }, 200);
}

handlerFunction();