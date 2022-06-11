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
    if (receivedString == "smi") {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    if (receivedString == "sad") {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            . # . # .
            . # . # .
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
        basic.showString("a")
    }
    if (letter == 2) {
        radio.sendString("b")
        letter = 0
        basic.showString("b")
    }
    if (letter == 3) {
        radio.sendString("c")
        letter = 0
        basic.showString("c")
    }
    if (letter == 4) {
        radio.sendString("d")
        letter = 0
        basic.showString("d")
    }
    if (letter == 5) {
        radio.sendString("e")
        letter = 0
        basic.showString("e")
    }
    if (letter == 6) {
        radio.sendString("f")
        letter = 0
        basic.showString("f")
    }
    if (letter == 7) {
        radio.sendString("g")
        letter = 0
        basic.showString("g")
    }
    if (letter == 8) {
        radio.sendString("h")
        letter = 0
        basic.showString("h")
    }
    if (letter == 9) {
        radio.sendString("i")
        letter = 0
        basic.showString("i")
    }
    if (letter == 10) {
        radio.sendString("j")
        letter = 0
        basic.showString("j")
    }
    if (letter == 11) {
        radio.sendString("k")
        letter = 0
        basic.showString("k")
    }
    if (letter == 12) {
        radio.sendString("l")
        letter = 0
        basic.showString("l")
    }
    if (letter == 13) {
        radio.sendString("m")
        letter = 0
        basic.showString("m")
    }
    if (letter == 14) {
        radio.sendString("n")
        letter = 0
        basic.showString("n")
    }
    if (letter == 15) {
        radio.sendString("o")
        letter = 0
        basic.showString("o")
    }
    if (letter == 16) {
        radio.sendString("p")
        letter = 0
        basic.showString("p")
    }
    if (letter == 17) {
        radio.sendString("q")
        letter = 0
        basic.showString("q")
    }
    if (letter == 18) {
        radio.sendString("r")
        letter = 0
        basic.showString("r")
    }
    if (letter == 19) {
        radio.sendString("s")
        letter = 0
        basic.showString("s")
    }
    if (letter == 20) {
        radio.sendString("t")
        letter = 0
        basic.showString("t")
    }
    if (letter == 21) {
        radio.sendString("u")
        letter = 0
        basic.showString("u")
    }
    if (letter == 22) {
        radio.sendString("v")
        letter = 0
        basic.showString("v")
    }
    if (letter == 23) {
        radio.sendString("w")
        letter = 0
        basic.showString("w")
    }
    if (letter == 24) {
        radio.sendString("x")
        letter = 0
        basic.showString("x")
    }
    if (letter == 25) {
        radio.sendString("y")
        letter = 0
        basic.showString("y")
    }
    if (letter == 26) {
        radio.sendString("z")
        letter = 0
        basic.showString("z")
    }
    if (letter == 27) {
        radio.sendString("smi")
        letter = 0
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (letter == 28) {
        radio.sendString("sad")
        letter = 0
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(88)
})
let letter = 0
letter = 0
radio.setGroup(1)
