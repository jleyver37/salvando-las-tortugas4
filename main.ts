basic.forever(function () {
	
})
basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() < 26) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Skull)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (input.temperature() > 34) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Skull)
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.Heart)
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
})
