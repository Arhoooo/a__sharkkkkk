let water_level = 0
input.onButtonPressed(Button.A, function () {
    water_level = pins.analogReadPin(AnalogPin.P0)
    while (!(input.buttonIsPressed(Button.B))) {
        basic.showNumber(water_level)
        basic.pause(2000)
    }
    basic.showString("S")
})
basic.forever(function () {
	
})
