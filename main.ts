myModules.button3.onEvent(jacdac.ButtonEvent.Down, function () {
    matrix.scrollText(
    "Button 3 ",
    64,
    0,
    neopixel.colors(NeoPixelColors.Purple)
    )
})
input.onButtonPressed(Button.B, function () {
    lightLevel = modules.lightLevel2.lightLevel()
    matrix.clear()
    matrix.show()
    matrix.scrollText(
    "" + Math.round(modules.lightLevel2.lightLevel()) + " ",
    24,
    0,
    neopixel.colors(NeoPixelColors.Orange)
    )
})
modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    Encoder = modules.rotaryEncoder1.position()
    matrix.clear()
    matrix.show()
    matrix.scrollText(
    "" + convertToText(Encoder) + " ",
    24,
    0,
    neopixel.colors(NeoPixelColors.Green)
    )
})
clicks.onDoubleClick(Button.B, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.A, function () {
    matrix.scrollText(
    "你好",
    2,
    0,
    neopixel.colors(NeoPixelColors.Orange)
    )
})
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    matrix.scrollText(
    "Button 2 ",
    24,
    0,
    neopixel.colors(NeoPixelColors.Red)
    )
})
let lightLevel = 0
let matrix: SmartMatrix.Matrix = null
let Encoder = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Umbrella)
Encoder = modules.rotaryEncoder1.position()
Encoder = 0
matrix = SmartMatrix.create(
DigitalPin.P2,
32,
8,
NeoPixelMode.RGB
)
matrix.Brightness(32)
matrix.clear()
matrix.show()
