input.onButtonPressed(Button.A, function () {
    letter += 1
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "a") {
        basic.showString("A")
    }
})
input.onButtonPressed(Button.B, function () {
    if (letter == 1) {
        radio.sendString("a")
        letter = 0
    }
})
let letter = 0
letter = 0
basic.forever(function () {
	
})
