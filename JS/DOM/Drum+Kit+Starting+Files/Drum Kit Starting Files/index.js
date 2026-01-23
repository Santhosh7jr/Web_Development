let sounds = {"w":"crash", "a":"kick-bass", "s":"snare", "d":"tom-1", "j":"tom-2", "k":"tom-3", "l":"tom-4"};
let prev = null;

document.querySelectorAll("button").forEach((a) => {
    a.addEventListener("click", () => {
        let audio = new Audio(`./sounds/${sounds[a.innerText]}.mp3`);

        a.classList.add("pressed");

        if (prev != null) {
            prev.classList.remove("pressed");
        }

        prev = a;
        audio.play();
    });
});

document.addEventListener("keypress", (event) => {
    if (event.key in sounds) {

        let audio = new Audio(`./sounds/${sounds[event.key]}.mp3`);
        let node = document.querySelector(`.${event.key}`);
        node.classList.add("pressed");
        audio.play();

        setTimeout(() => {
            node.classList.remove("pressed");
        }, 100);

    }
})