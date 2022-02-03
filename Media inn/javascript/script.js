var intPlayButton = 0;

function changeMusic(music) {
    document.getElementById("music").setAttribute('src', music);
}
function playButton() {
    document.getElementById("monologue");
    document.getElementById("music");
    if (intPlayButton == 0) {
        monologue.play();
        music.play();
        music.volume = 0.075;
        intPlayButton = 1;
    }
    else {
        monologue.pause();
        music.pause();
        intPlayButton = 0;
    }
}