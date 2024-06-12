namespace SpriteKind {
    export const Player_Fake = SpriteKind.create()
    export const Powerup_life = SpriteKind.create()
    export const power_projectile = SpriteKind.create()
    export const powerup_shield = SpriteKind.create()
    export const Player1 = SpriteKind.create()
    export const Player2 = SpriteKind.create()
    export const Large_Enemy = SpriteKind.create()
    export const Weapon = SpriteKind.create()
    export const Projectile_P1 = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
	
})
scene.onOverlapTile(SpriteKind.Player2, assets.tile`Cantaloupe_road`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, color.Brighten)
})
info.player2.onScore(20, function () {
    mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Two))
    game.setGameOverEffect(true, effects.confetti)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`GasterBlast right`, SansStickman, 200, 0)
})
scene.onOverlapTile(SpriteKind.Player1, assets.tile`grass3`, function (sprite, location) {
    info.player1.changeLifeBy(-1000)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    BobStickman,
    assets.animation`Bob stick up`,
    200,
    true
    )
    controller.player1.moveSprite(BobStickman)
})
sprites.onOverlap(SpriteKind.Player1, SpriteKind.powerup_shield, function (sprite, otherSprite) {
    info.player1.changeLifeBy(10)
    music.play(music.stringPlayable("D E F G A C5 B G ", 400), music.PlaybackMode.UntilDone)
    info.startCountdown(5)
    sprites.destroy(otherSprite, effects.halo, 200)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Powerup_life, function (sprite, otherSprite) {
    info.player2.changeLifeBy(1)
    music.play(music.stringPlayable("D F G A F G B C5 ", 400), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite, effects.hearts, 200)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`GasterBlast left`, SansStickman, -200, 0)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    SansStickman,
    assets.animation`Sans down`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    info.changeLifeBy(-7)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.powerup_shield, function (sprite, otherSprite) {
    info.player2.changeLifeBy(10)
    music.play(music.stringPlayable("D E F G A C5 B G ", 400), music.PlaybackMode.UntilDone)
    info.startCountdown(5)
    sprites.destroy(otherSprite, effects.halo, 200)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Large_Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(2)
    sprites.destroy(otherSprite, effects.ashes, 500)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    SansStickman,
    assets.animation`sans up`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player1, SpriteKind.Large_Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    scene.cameraShake(8, 500)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    info.player1.changeLifeBy(-2)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    SansStickman,
    assets.animation`Sans right`,
    500,
    true
    )
})
info.onLifeZero(function () {
	
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    SansStickman,
    assets.animation`Sans left`,
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    scene.cameraShake(4, 500)
    info.player2.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    BobStickman,
    assets.animation`bob stick right`,
    200,
    true
    )
    controller.player1.moveSprite(BobStickman)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Bullet1`, BobStickman, -200, 0)
})
sprites.onOverlap(SpriteKind.Player1, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    scene.cameraShake(4, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    info.player1.changeLifeBy(-1)
})
info.player1.onLifeZero(function () {
    info.player1.changeScoreBy(-10)
    info.player1.setLife(3)
})
info.player2.onLifeZero(function () {
    info.player2.changeScoreBy(-10)
    info.player2.setLife(3)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    info.player2.setLife(3)
    SansStickman = sprites.create(assets.image`sans`, SpriteKind.Player2)
    controller.player2.moveSprite(SansStickman, 60, 60)
})
scene.onOverlapTile(SpriteKind.Player1, assets.tile`Cantaloupe_road`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, color.Brighten)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Bullet0`, BobStickman, 200, 0)
})
sprites.onOverlap(SpriteKind.Player1, SpriteKind.Powerup_life, function (sprite, otherSprite) {
    info.player1.changeLifeBy(1)
    music.play(music.stringPlayable("D F G A F G B C5 ", 400), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite, effects.hearts, 200)
})
info.player1.onScore(20, function () {
    mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
    game.setGameOverEffect(true, effects.confetti)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    info.player1.setLife(3)
    controller.player1.moveSprite(BobStickman, 85, 85)
    BobStickman = sprites.create(assets.image`Bob`, SpriteKind.Player1)
    scene.cameraFollowSprite(BobStickman)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.fire, 500)
})
scene.onOverlapTile(SpriteKind.Player2, assets.tile`grass3`, function (sprite, location) {
    info.player2.changeLifeBy(-1000)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    BobStickman,
    assets.animation`Bob stick left`,
    200,
    true
    )
    controller.moveSprite(BobStickman)
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    BobStickman,
    assets.animation`Bob Stick down`,
    200,
    true
    )
    controller.moveSprite(BobStickman)
})
let powerup_life: Sprite = null
let powerup_sheild: Sprite = null
let Car4: Sprite = null
let Car: Sprite = null
let Car3: Sprite = null
let Car2: Sprite = null
let Motorbike: Sprite = null
let Bus1: Sprite = null
let BobStickman: Sprite = null
let SansStickman: Sprite = null
let projectile: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
scene.setBackgroundImage(assets.image`highwayroad`)
game.splash("Dodge the Cars")
music.play(music.createSong(assets.song`Traffic Jam`), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(5000, function () {
    Bus1 = sprites.create(assets.image`Bus`, SpriteKind.Large_Enemy)
    Bus1.setVelocity(-75, 0)
    Bus1.setPosition(131, randint(150, 250))
    Bus1.setFlag(SpriteFlag.AutoDestroy, true)
    Bus1.setFlag(SpriteFlag.GhostThroughWalls, true)
})
game.onUpdateInterval(5000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(5000, function () {
    Motorbike = sprites.create(assets.image`Motorbike`, SpriteKind.Enemy)
    Motorbike.setVelocity(200, 0)
    Motorbike.setPosition(0, randint(20, 115))
    Motorbike.setFlag(SpriteFlag.AutoDestroy, true)
    Motorbike.setFlag(SpriteFlag.GhostThroughWalls, true)
})
game.onUpdateInterval(1100, function () {
    Car2 = sprites.create(assets.image`Car5`, SpriteKind.Enemy)
    Car2.setVelocity(-100, 0)
    Car2.setPosition(160, randint(200, 250))
    Car2.setFlag(SpriteFlag.AutoDestroy, true)
    Car2.setFlag(SpriteFlag.GhostThroughWalls, true)
})
game.onUpdateInterval(1100, function () {
    Car3 = sprites.create(assets.image`Car2`, SpriteKind.Enemy)
    Car3.setVelocity(100, 0)
    Car3.setPosition(0, randint(50, 115))
    Car3.setFlag(SpriteFlag.AutoDestroy, true)
    Car3.setFlag(SpriteFlag.GhostThroughWalls, true)
})
game.onUpdateInterval(1200, function () {
    Car = sprites.create(assets.image`Car1`, SpriteKind.Enemy)
    Car.setVelocity(100, 0)
    Car.setPosition(0, randint(20, 40))
    Car.setFlag(SpriteFlag.AutoDestroy, true)
    Car.setFlag(SpriteFlag.GhostThroughWalls, true)
})
game.onUpdateInterval(1200, function () {
    Car4 = sprites.create(assets.image`Car7`, SpriteKind.Enemy)
    Car4.setVelocity(-100, 0)
    Car4.setPosition(160, randint(150, 200))
    Car4.setFlag(SpriteFlag.AutoDestroy, true)
    Car4.setFlag(SpriteFlag.GhostThroughWalls, true)
})
game.onUpdateInterval(20000, function () {
    powerup_sheild = sprites.create(assets.image`powerupshield`, SpriteKind.powerup_shield)
    powerup_sheild.setPosition(randint(5, 150), randint(30, 250))
})
game.onUpdateInterval(10000, function () {
    powerup_life = sprites.create(assets.image`extralife`, SpriteKind.Powerup_life)
    powerup_life.setPosition(randint(5, 150), randint(30, 250))
})
