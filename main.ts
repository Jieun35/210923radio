radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        basic.showIcon(IconNames.Happy)
    }
    if (receivedNumber == 4) {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(6)
basic.forever(function () {
	
})
