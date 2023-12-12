let homeScoreBtn1 = document.getElementById("home-score-btn-1")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

function increaseHomeScore1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

let homeScoreBtn2 = document.getElementById("home-score-btn-2")

function increaseHomeScore2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

let homeScoreBtn3 = document.getElementById("home-score-btn-3")

function increaseHomeScore3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}



let guestScoreBtn1 = document.getElementById("guest-score-btn-1")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScore1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

let guestScoreBtn2 = document.getElementById("guest-score-btn-2")

function increaseGuestScore2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

let guestScoreBtn3 = document.getElementById("guest-score-btn-3")

function increaseGuestScore3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}