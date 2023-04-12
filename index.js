let points = 0
let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")

function homePlus1() {
    points += 1
    homePoints.textContent = points
}

function homePlus2() {
    points += 2
    homePoints.textContent = points
}

function homePlus3() {
    points += 3
    homePoints.textContent = points
}


function guestPlus1() {
    points += 1
    guestPoints.textContent = points
}

function guestPlus2() {
    points += 2
    guestPoints.textContent = points
}

function guestPlus3() {
    points += 3
    guestPoints.textContent = points
}
