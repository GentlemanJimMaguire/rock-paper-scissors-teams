radio.onReceivedNumber(function (receivedNumber) {
    SerialNumber = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    Match = tool == receivedNumber
    PlayerIndex = players.indexOf(SerialNumber)
    Found = PlayerIndex >= 0
    if (Match && !(Found)) {
        players.push(SerialNumber)
    }
    if (!(Match) && Found) {
        temp = players.removeAt(PlayerIndex)
    }
})
input.onGesture(Gesture.Shake, function () {
    players = [0]
    tool = randint(0, 2)
})
let temp = 0
let Found = false
let PlayerIndex = 0
let tool = 0
let Match = false
let SerialNumber = 0
let players: number[] = []
players = [0]
radio.setGroup(10)
radio.setTransmitSerialNumber(true)
basic.forever(function () {
    radio.sendNumber(tool)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (tool == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    basic.showNumber(players.length)
})
