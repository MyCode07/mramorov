const muteAudio = document.querySelector('.mute-audio');
let audio = null;

if (muteAudio) {
    const audio = new Audio(muteAudio.dataset.audio)
    audio.loop = true

    muteAudio.addEventListener('click', () => {
        muteAudio.classList.toggle('_active')
        audio.play();

        if (muteAudio.classList.contains('_active')) {
            audio.muted = false;
        }
        else {
            audio.muted = true;
        }
    })
}
