radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 88) {
        basic.showString("Msg END")
    }
})
input.onButtonPressed(Button.A, function () {
    letter += 1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("2456")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "2456") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    }
    if (receivedString == "a") {
        basic.showString("A")
    }
    if (receivedString == "b") {
        basic.showString("B")
    }
    if (receivedString == "c") {
        basic.showString("C")
    }
    if (receivedString == "d") {
        basic.showString("D")
    }
    if (receivedString == "e") {
        basic.showString("E")
    }
    if (receivedString == "f") {
        basic.showString("F")
    }
    if (receivedString == "g") {
        basic.showString("G")
    }
    if (receivedString == "h") {
        basic.showString("H")
    }
    if (receivedString == "i") {
        basic.showString("I")
    }
    if (receivedString == "j") {
        basic.showString("J")
    }
    if (receivedString == "k") {
        basic.showString("K")
    }
    if (receivedString == "l") {
        basic.showString("L")
    }
    if (receivedString == "m") {
        basic.showString("M")
    }
    if (receivedString == "n") {
        basic.showString("N")
    }
    if (receivedString == "o") {
        basic.showString("O")
    }
    if (receivedString == "p") {
        basic.showString("P")
    }
    if (receivedString == "q") {
        basic.showString("Q")
    }
    if (receivedString == "r") {
        basic.showString("R")
    }
    if (receivedString == "s") {
        basic.showString("S")
    }
    if (receivedString == "t") {
        basic.showString("T")
    }
    if (receivedString == "u") {
        basic.showString("U")
    }
    if (receivedString == "v") {
        basic.showString("V")
    }
    if (receivedString == "w") {
        basic.showString("W")
    }
    if (receivedString == "x") {
        basic.showString("W")
    }
    if (receivedString == "y") {
        basic.showString("Y")
    }
    if (receivedString == "z") {
        basic.showString("Z")
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
    if (letter == 8) {
        radio.sendString("h")
        letter = 0
    }
    if (letter == 9) {
        radio.sendString("i")
        letter = 0
    }
    if (letter == 10) {
        radio.sendString("j")
        letter = 0
    }
    if (letter == 11) {
        radio.sendString("k")
        letter = 0
    }
    if (letter == 12) {
        radio.sendString("l")
        letter = 0
    }
    if (letter == 13) {
        radio.sendString("m")
        letter = 0
    }
    if (letter == 14) {
        radio.sendString("n")
        letter = 0
    }
    if (letter == 15) {
        radio.sendString("o")
        letter = 0
    }
    if (letter == 16) {
        radio.sendString("p")
        letter = 0
    }
    if (letter == 17) {
        radio.sendString("q")
        letter = 0
    }
    if (letter == 18) {
        radio.sendString("r")
        letter = 0
    }
    if (letter == 19) {
        radio.sendString("s")
        letter = 0
    }
    if (letter == 20) {
        radio.sendString("t")
        letter = 0
    }
    if (letter == 21) {
        radio.sendString("u")
        letter = 0
    }
    if (letter == 22) {
        radio.sendString("v")
        letter = 0
    }
    if (letter == 23) {
        radio.sendString("w")
        letter = 0
    }
    if (letter == 24) {
        radio.sendString("x")
        letter = 0
    }
    if (letter == 25) {
        radio.sendString("y")
        letter = 0
    }
    if (letter == 26) {
        radio.sendString("z")
        letter = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(88)
})
let letter = 0
letter = 0
basic.forever(function () {
	
})
