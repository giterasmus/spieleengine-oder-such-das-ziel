input.onButtonPressed(Button.A, function () {
    Sucher.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    Sucher.turn(Direction.Right, 90)
})
input.onButtonPressed(Button.B, function () {
    Sucher.move(1)
})
/**
 * Spielengine kennenlernen:
 * 
 * Erzeuge 2 Sprites: Sucher und Ziel an festen Positionen
 * 
 * Mit A,B kann man den Sucher links,rechts, auf und ab bewegen
 * 
 * Mit A+B kann man den Sucher um 90° im Uhrzeigersinn drehen
 * 
 * Wenn der Sucher das Ziel erreicht hat wird er wieder auf die Ausgangsposition zurückgesetzt.
 */
let Sucher: game.LedSprite = null
Sucher = game.createSprite(0, 0)
Sucher.set(LedSpriteProperty.Brightness, 6)
let Ziel = game.createSprite(2, 2)
basic.forever(function () {
	
})
// Dieser Code läuft im Hintergrund!
// Es ist wichtig, das 
// eine Endlosschleife und eine Pause enthalten sind, da sonst keine Ereignisse abgefangen werden. (bzw. nur zufällig eines wenn man schnell genug ist)
// Der Block erfüllt denselben Zweck wie "Dauerhaft"
control.inBackground(function () {
    while (true) {
        if (Sucher.isTouching(Ziel)) {
            Sucher.set(LedSpriteProperty.X, 0)
            Sucher.set(LedSpriteProperty.Y, 0)
        }
        basic.pause(100)
    }
})
