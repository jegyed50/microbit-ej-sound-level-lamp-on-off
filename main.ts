input.onButtonPressed(Button.A, function () {
    fenyero = fenyero - 20
    if (fenyero < 0) {
        fenyero = 0
        music.playTone(175, music.beat(BeatFraction.Whole))
    }
    led.setBrightness(fenyero)
})
input.onSound(DetectedSound.Loud, function () {
    if (lamp == 0) {
        lamp = 1
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        lamp = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    fenyero = fenyero + 20
    if (fenyero > 255) {
        fenyero = 255
        music.playTone(698, music.beat(BeatFraction.Whole))
    }
    led.setBrightness(fenyero)
})
let fenyero = 0
let lamp = 0
lamp = 0
fenyero = 124
