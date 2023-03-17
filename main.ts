radio.onReceivedNumber(function (receivedNumber) {
    VsGo = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    MyGo = 10
    VsGo = 10
    GameStage = 1
    spinner = 0
})
function Getresult () {
    if (MyGo == 0) {
        if (VsGo == 0) {
            Result = 2
        } else if (VsGo == 1) {
            Result = 3
        } else {
            Result = 1
        }
    }
    if (MyGo == 1) {
        if (VsGo == 0) {
            Result = 1
        } else if (VsGo == 1) {
            Result = 2
        } else {
            Result = 3
        }
    }
    if (MyGo == 2) {
        if (VsGo == 0) {
            Result = 3
        } else if (VsGo == 1) {
            Result = 1
        } else {
            Result = 2
        }
    }
    return Result
}
input.onGesture(Gesture.Shake, function () {
    MyGo = randint(0, 2)
})
function WaitScreen () {
    spinner += 1
    spinner = spinner % 4
    if (spinner == 0) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
    } else if (spinner == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (spinner == 2) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
}
let Result = 0
let spinner = 0
let GameStage = 0
let VsGo = 0
let MyGo = 0
MyGo = 10
VsGo = 10
GameStage = 1
spinner = 0
radio.setGroup(10)
radio.setTransmitSerialNumber(true)
basic.forever(function () {
    while (GameStage == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    while (GameStage == 2) {
        WaitScreen()
    }
})
basic.forever(function () {
    while (MyGo != 10) {
        radio.sendNumber(MyGo)
    }
})
basic.forever(function () {
    if (MyGo == 10) {
        GameStage = 1
    } else if (MyGo != 10 && VsGo == 10) {
        GameStage = 2
    } else {
        GameStage = 3
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    while (GameStage == 3) {
        basic.clearScreen()
        basic.pause(200)
        if (MyGo == 0) {
            basic.showIcon(IconNames.SmallDiamond)
        } else if (MyGo == 1) {
            basic.showIcon(IconNames.Square)
        } else {
            basic.showIcon(IconNames.Scissors)
        }
        basic.pause(500)
        basic.clearScreen()
        basic.showString("v")
        basic.clearScreen()
        basic.pause(200)
        if (VsGo == 0) {
            basic.showIcon(IconNames.SmallDiamond)
        } else if (VsGo == 1) {
            basic.showIcon(IconNames.Square)
        } else {
            basic.showIcon(IconNames.Scissors)
        }
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
        if (Getresult() == 1) {
            basic.showString("W")
        } else if (Getresult() == 2) {
            basic.showString("D")
        } else {
            basic.showString("L")
        }
    }
})
