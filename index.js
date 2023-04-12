let Hpoints = 0
let Gpoints = 0
let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")

function homePlus1() {
    Hpoints += 1
    homePoints.textContent = Hpoints
}

function homePlus2() {
    Hpoints += 2
    homePoints.textContent = Hpoints
}

function homePlus3() {
    Hpoints += 3
    homePoints.textContent = Hpoints
}


function guestPlus1() {
    Gpoints += 1
    guestPoints.textContent = Gpoints
}

function guestPlus2() {
    Gpoints += 2
    guestPoints.textContent = Gpoints
}

function guestPlus3() {
    Gpoints += 3
    guestPoints.textContent = Gpoints
}
