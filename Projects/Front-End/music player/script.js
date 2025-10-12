//adding audio
let images = document.querySelectorAll("img");
let boxes=document.querySelectorAll(".box");
let currentAudio = null;
let currentImage=null;
let currentBox=null;
let prev = -1;

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {

        if (prev === i) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentImage.style.filter="brightness(50%)";
            currentBox.style.boxShadow="0px 0px 5px rgb(84, 83, 83)";
            currentAudio = null;
            return;
        }

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentImage.style.filter="brightness(50%)";
            currentBox.style.boxShadow="0px 0px 5px rgb(84, 83, 83)";
            currentAudio = null;
        }
            currentAudio = new Audio(`songs/song${i + 1}.mp3`);
            prev = i;
            currentAudio.play();
            currentImage=images[i];
            currentImage.style.filter="brightness(90%)";
            currentBox=boxes[i];
            currentBox.style.boxShadow="0px 0px 30px rgb(84, 83, 83)";
        
        
    });
}


