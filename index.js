let Green = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')


let p1sum = 0
let p2sum = 0


function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }

        if (p1sum == 1) { //ladders
            p1sum = 38
        }
        if (p1sum == 4) { //ladders
            p1sum = 14
        }
        if (p1sum == 9) { //ladders
            p1sum = 31
        }
        if (p1sum == 21) { //ladders
            p1sum = 42
        }
        if (p1sum == 28) { //ladders
            p1sum = 84
        }
        if (p1sum == 17) { //snake
            p1sum = 7
        }
        if (p1sum == 54) { // snake
            p1sum = 34
        }
        if (p1sum == 62) { //snake
            p1sum = 19
        }
        if (p1sum == 51) { //ladders
            p1sum = 67
        }
        if (p1sum == 64) { //snake
            p1sum = 60
        }
        if (p1sum == 72) { //ladders
            p1sum = 91
        }
        if (p1sum == 80) { //ladders
            p1sum = 99
        }
        if (p1sum == 87) { //snake
            p1sum = 36
        }
        if (p1sum == 92) { //snake
            p1sum = 73
        }
        if (p1sum == 95) { //snake
            p1sum = 75
        }

        if (p1sum == 98) { //snake
            p1sum = 79
        }

        

        sum = p1sum



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
            // sum = p1sum
        }
        

        if (p2sum == 1) { //ladders
            p2sum = 38
        }
        if (p2sum == 4) { //ladders
            p2sum = 14
        }
        if (p2sum == 9) { //ladders
            p2sum = 31
        }
        if (p2sum == 21) { //ladders
            p2sum = 42
        }
        if (p2sum == 28) { //ladders
            p2sum = 84
        }
        if (p2sum == 17) { //snake
            p2sum = 7
        }
        if (p2sum == 54) { // snake
            p2sum = 34
        }
        if (p2sum == 62) { //snake
            p2sum = 19
        }
        if (p2sum == 51) { //ladders
            p2sum = 67
        }
        if (p2sum == 64) { //snake
            p2sum = 60
        }
        if (p2sum == 72) { //ladders
            p2sum = 91
        }
        if (p2sum == 80) { //ladders
            p2sum = 99
        }
        if (p2sum == 87) { //snake
            p2sum = 36
        }
        if (p2sum == 92) { //snake
            p2sum = 73
        }
        if (p2sum == 95) { //snake
            p2sum = 75
        }

        if (p2sum == 98) { //snake
            p2sum = 79
        }

        sum = p2sum



    }


    document.getElementById(`${player}`).style.transition = `linear all .2s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("TOM Won !!")
        }
        else if (player == 'p2') {
            alert("JERRY Won !!")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num


    if (Green % 2 != 0) {
        document.getElementById('Green').innerText = "JERRY : "
        play('p1', 'p1sum', 0, num)

    }

    else if (Green % 2 == 0) {
        document.getElementById('Green').innerText = "TOM : "

        play('p2', 'p2sum', 55, num)

    }

    Green = Green + 1




})