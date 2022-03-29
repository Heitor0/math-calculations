input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onGesture(Gesture.LogoUp, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    let Int1 = 0
    Int2 = number
    A = Int2 + 9
    B = Int2 - 9
    C = Int1 * 2
    D = Int2 / 3
    E = Int2 % 4
    F = Math.sqrt(Int2)
    G = Math.round(0.75)
    H = Math.ceil(3 / 9)
    I = Int2 ** 3
    J = randint(0, 100)
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(A)
    basic.showNumber(B)
    basic.showNumber(C)
    basic.showNumber(D)
    basic.showNumber(E)
    basic.showNumber(F)
    basic.showNumber(G)
    basic.showNumber(H)
    basic.showNumber(I)
    basic.showNumber(J)
})
let J = 0
let I = 0
let H = 0
let G = 0
let F = 0
let E = 0
let D = 0
let C = 0
let B = 0
let A = 0
let Int2 = 0
let number = 0
number = 0
basic.forever(function () {
	
})
