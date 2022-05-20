input.onButtonPressed(Button.A, function () {
    letter += 1
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "a") {
        basic.showString("A")
    }
    if (receivedString == "b") {
        basic.showString("B")
    }
})
input.onButtonPressed(Button.B, function () {
    if (letter == 1) {
        radio.sendString("a")
        letter = 0
    }
    if (letter == 2) {
        radio.sendString("b")
        letter = 0
    }
    if (letter == 3) {
        radio.sendString("c")
        letter = 0
    }
    if (letter == 4) {
        radio.sendString("d")
        letter = 0
    }
    if (letter == 5) {
        radio.sendString("e")
        letter = 0
    }
    if (letter == 6) {
        radio.sendString("f")
        letter = 0
    }
    if (letter == 7) {
        radio.sendString("g")
        letter = 0
    }
})
let letter = 0
letter = 0
basic.forever(function () {
	
})
