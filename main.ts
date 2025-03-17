input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        . # # # .
        `)
    music.play(music.stringPlayable("C D C D C D C D ", 120), music.PlaybackMode.UntilDone)
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . # . #
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 180)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 0)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . # . # .
        # # . # #
        . . . . .
        # # # # #
        . . # # .
        `)
    music.play(music.stringPlayable("F E F G E G G A ", 120), music.PlaybackMode.UntilDone)
    basic.pause(100)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        # . . . #
        `)
})
basic.showLeds(`
    # # # . .
    # . . . .
    # # # # #
    # . # # #
    # # # # #
    `)
