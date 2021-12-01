let voltage = 0
let Temperature = 0
basic.forever(function () {
    voltage = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 3300)
    Temperature = Math.idiv(voltage - 500, 10)
    basic.showNumber(Temperature)
    serial.writeValue("Temp", Temperature)
})
