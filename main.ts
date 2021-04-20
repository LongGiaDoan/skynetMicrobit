function einde () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Yes)
        basic.pause(400)
    }
}
input.onButtonPressed(Button.A, function () {
    mannetje.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.LogoUp, function () {
    hint()
})
function hint () {
    if (mannetje.get(LedSpriteProperty.X) < list[code].get(LedSpriteProperty.X) && mannetje.get(LedSpriteProperty.Y) < list[code].get(LedSpriteProperty.Y)) {
        basic.showArrow(ArrowNames.SouthEast)
    }
    if (mannetje.get(LedSpriteProperty.X) == list[code].get(LedSpriteProperty.X) && mannetje.get(LedSpriteProperty.Y) < list[code].get(LedSpriteProperty.Y)) {
        basic.showArrow(ArrowNames.South)
    }
    if (mannetje.get(LedSpriteProperty.X) > list[code].get(LedSpriteProperty.X) && mannetje.get(LedSpriteProperty.Y) < list[code].get(LedSpriteProperty.Y)) {
        basic.showArrow(ArrowNames.SouthWest)
    }
    if (mannetje.get(LedSpriteProperty.X) > list[code].get(LedSpriteProperty.X) && mannetje.get(LedSpriteProperty.Y) == list[code].get(LedSpriteProperty.Y)) {
        basic.showArrow(ArrowNames.West)
    }
    if (mannetje.get(LedSpriteProperty.X) > list[code].get(LedSpriteProperty.X) && mannetje.get(LedSpriteProperty.Y) > list[code].get(LedSpriteProperty.Y)) {
        basic.showArrow(ArrowNames.NorthWest)
    }
    if (mannetje.get(LedSpriteProperty.X) == list[code].get(LedSpriteProperty.X) && mannetje.get(LedSpriteProperty.Y) > list[code].get(LedSpriteProperty.Y)) {
        basic.showArrow(ArrowNames.North)
    }
    if (mannetje.get(LedSpriteProperty.X) < list[code].get(LedSpriteProperty.X) && mannetje.get(LedSpriteProperty.Y) > list[code].get(LedSpriteProperty.Y)) {
        basic.showArrow(ArrowNames.NorthEast)
    }
    if (mannetje.get(LedSpriteProperty.X) < list[code].get(LedSpriteProperty.X) && mannetje.get(LedSpriteProperty.Y) == list[code].get(LedSpriteProperty.Y)) {
        basic.showArrow(ArrowNames.East)
    }
}
input.onPinPressed(TouchPin.P2, function () {
    mannetje.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.AB, function () {
    teller = 0
    if (mannetje.isTouching(noot_1)) {
        teller += 1
        music.playTone(523, music.beat(BeatFraction.Whole))
        if (code == 0) {
            code += 1
        }
    }
    if (mannetje.isTouching(noot_2)) {
        teller += 1
        music.playTone(440, music.beat(BeatFraction.Whole))
        if (code == 1) {
            code += 1
        }
    }
    if (mannetje.isTouching(noot_3)) {
        teller += 1
        music.playTone(349, music.beat(BeatFraction.Whole))
        if (code == 2) {
            code += 1
        }
    }
    if (mannetje.isTouching(noot_4)) {
        teller += 1
        music.playTone(294, music.beat(BeatFraction.Whole))
        if (code == 3) {
            mannetje.delete()
            basic.pause(2000)
            einde()
        }
    }
    if (teller == 0) {
        music.playTone(147, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    mannetje.change(LedSpriteProperty.Y, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    mannetje.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.Shake, function () {
    mannetje.set(LedSpriteProperty.X, 2)
    mannetje.set(LedSpriteProperty.Y, 2)
    music.playMelody("C5 A F D - - - - ", 120)
    code = 0
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("A")
    basic.showString("+")
    basic.showString("B")
})
let teller = 0
let code = 0
let list: game.LedSprite[] = []
let noot_4: game.LedSprite = null
let noot_3: game.LedSprite = null
let noot_2: game.LedSprite = null
let noot_1: game.LedSprite = null
let mannetje: game.LedSprite = null
music.playTone(523, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(294, music.beat(BeatFraction.Half))
mannetje = game.createSprite(2, 2)
noot_1 = game.createSprite(randint(0, 4), randint(0, 4))
noot_2 = game.createSprite(randint(0, 4), randint(0, 4))
noot_3 = game.createSprite(randint(0, 4), randint(0, 4))
noot_4 = game.createSprite(randint(0, 4), randint(0, 4))
mannetje.set(LedSpriteProperty.Blink, 300)
noot_1.set(LedSpriteProperty.Brightness, 0)
noot_2.set(LedSpriteProperty.Brightness, 0)
noot_3.set(LedSpriteProperty.Brightness, 0)
noot_4.set(LedSpriteProperty.Brightness, 0)
list = [noot_1, noot_2, noot_3, noot_4]
