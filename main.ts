function toByte (A: number, B: number, C: number, D: number, E: number, F: number, G: number) {
    byte = 0
}
pins.onKeyboardEvent(function (zeichenCode, zeichenText, isASCII) {
    if (pins.between(zeichenCode, 48, 57)) {
        select(zeichenCode - 48)
    }
})
function select (Zahl: number) {
    if (Zahl == 0) {
        toByte(1, 1, 1, 1, 1, 1, 0)
    } else if (Zahl == 1) {
        toByte(0, 1, 1, 0, 0, 0, 0)
    } else if (Zahl == 2) {
        toByte(1, 1, 0, 1, 1, 0, 1)
    } else if (Zahl == 3) {
        toByte(1, 1, 1, 1, 0, 0, 1)
    } else if (Zahl == 4) {
        toByte(0, 1, 1, 0, 0, 1, 1)
    } else if (Zahl == 5) {
        toByte(1, 0, 1, 1, 0, 1, 1)
    } else if (Zahl == 6) {
        toByte(1, 0, 1, 1, 1, 1, 1)
    } else if (Zahl == 7) {
        toByte(1, 1, 1, 0, 0, 0, 0)
    } else if (Zahl == 8) {
        toByte(1, 1, 1, 1, 1, 1, 1)
    } else if (Zahl == 9) {
        toByte(1, 1, 1, 1, 0, 1, 1)
    } else if (Zahl == 10) {
        toByte(1, 1, 1, 0, 1, 1, 1)
    } else if (Zahl == 11) {
        toByte(0, 0, 1, 1, 1, 1, 1)
    } else if (Zahl == 12) {
        toByte(1, 0, 0, 1, 1, 1, 0)
    } else if (Zahl == 13) {
        toByte(0, 1, 1, 1, 1, 0, 1)
    } else if (Zahl == 14) {
        toByte(1, 0, 0, 1, 1, 1, 1)
    } else if (Zahl == 15) {
        toByte(1, 0, 0, 0, 1, 1, 1)
    } else {
        toByte(0, 0, 0, 0, 0, 0, 1)
    }
}
function Ziffer (A: number, B: number, C: number, D: number, E: number, F: number, G: number) {
    pins.digitalWritePin(DigitalPin.C4, 1 - A)
    pins.digitalWritePin(DigitalPin.C5, 1 - B)
    pins.digitalWritePin(DigitalPin.C6, 1 - C)
    pins.digitalWritePin(DigitalPin.C7, 1 - D)
    pins.digitalWritePin(DigitalPin.C8, 1 - E)
    pins.digitalWritePin(DigitalPin.C9, 1 - F)
    pins.digitalWritePin(DigitalPin.C10, 1 - G)
    pins.digitalWritePin(DigitalPin.C11, 0)
}
let byte = 0
qwiicgpio.beimStart(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27))
qwiicgpio.setMode(
qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27),
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT
)
loops.everyInterval(500, function () {
    pins.raiseKeypadEvent(true)
})
