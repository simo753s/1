input.onButtonPressed(Button.A, function () {
    music.setVolume(100)
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    music.playMelody("G F G A - F E D ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(100)
    music.playTone(music.tempo(), music.beat(BeatFraction.Double))
})
control.inBackground(function () {
    music.setVolume(100)
    led.unplot(2, 1)
    music.playMelody("C D E F G A B C5 ", 120)
})
