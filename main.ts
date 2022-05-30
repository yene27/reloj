function reloj (posX: number, posY: number) {
    basic.pause(500)
    aguja.set(LedSpriteProperty.X, posX)
    aguja.set(LedSpriteProperty.Y, posY)
}
let aguja: game.LedSprite = null
let centro = game.createSprite(2, 2)
aguja = game.createSprite(2, 0)
reloj(3, 0)
reloj(4, 1)
reloj(4, 2)
reloj(4, 3)
reloj(3, 4)
reloj(2, 4)
