var intPlayButton = 0;

function changeMusic(music) {
    document.getElementById("music").setAttribute('src', music);
    document.getElementById("monologue");
    monologue.pause();
    music.pause();
}
function playButton() {
    document.getElementById("monologue");
    document.getElementById("music");
    if (intPlayButton == 0) {
        monologue.play();
        music.play();
        music.volume = 0.075;
        monologue.volume = 0.5;
        intPlayButton = 1;
    }
    else {
        monologue.pause();
        music.pause();
        intPlayButton = 0;
    }
}