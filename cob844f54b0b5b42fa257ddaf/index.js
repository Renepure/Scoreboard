let homeScoreBtnOne = document.getElementById("homescorebtn1")
let homeStoreEl = document.getElementById("homeScore")
let homeScore = 0 

function add1h() {
    homeScore +=1
    homeStoreEl.textContent = homeScore
}

let homeScoreBtnTwo = document.getElementById("homescorebtn2")

function add2h(){
    homeScore +=2
     homeStoreEl.textContent = homeScore
}

let homeScoreBtnThree = document.getElementById("homescorebtn3")

function add3h(){
    homeScore +=3
     homeStoreEl.textContent = homeScore
}

let removehomeScoreBtnOne = document.getElementById("removehomeScorebtn1")
function remove1h(){
homeScore -=1
homeStoreEl.textContent = homeScore
}

let removehomeScoreBtnTwo = document.getElementById("removehomescorebtn2")
function remove2h(){
    homeScore -=2
    homeStoreEl.textContent = homeScore
}

let removehomeScoreBtnThree = document.getElementById("removehomescorebtn3")
function remove3h(){
    homeScore -=3
    homeStoreEl.textContent = homeScore
}









let guestScoreBtnOne = document.getElementById("guestscorebtn1")
let guestStoreEl = document.getElementById("guestScore")
let guestScore = 0 

function add1g() {
    guestScore +=1
    guestStoreEl.textContent = guestScore
}

let guestScoreBtnTwo = document.getElementById("guestscorebtn2")

function add2g(){
    guestScore +=2
     guestStoreEl.textContent = guestScore
}

let guestScoreBtnThree = document.getElementById("guestscorebtn3")

function add3g(){
    guestScore +=3
     guestStoreEl.textContent = guestScore
}

let removeScoreBtnOne = document.getElementById("removeguestScorebtn1")
function remove1g(){
    guestScore -= 1
    guestStoreEl.textContent = guestScore
}

let removeScoreBtnTwo = document.getElementById("removeguestscorebtn2")
function remove2g(){
    guestScore -=2
    guestStoreEl.textContent = guestScore
    
}

let removeScoreBtnThree = document.getElementById("removeguestscorebtn3")
function remove3g(){
    guestScore -=3
    guestStoreEl.textContent = guestScore
}




let periodeOneBtn = document.getElementById("periodebtn1")
let periodestoreEL = document.getElementById("periode")
let periode = 0

function add1periode(){
    periode +=1
    periodestoreEL.textContent = periode
    
    
}
let removeperiodeOneBtn = document.getElementById("removeperiodebtn1")
function remove1periode(){
    periode -=1
    periodestoreEL.textContent = periode
}



let removeHomeFoulScoreBtnOne = document.getElementById("removehomefoulscorebtn1")
let homefoulStoreEl = document.getElementById("foulscoreh")
let homefoul = 0

function removefoulhome1(){
    homefoul -=1
    homefoulStoreEl.textContent = homefoul
    
}
function addfoulhome1()
{
    homefoul +=1
    homefoulStoreEl.textContent = homefoul
}

let removeGuestFoulScoreBtnOne = document.getElementById("removeguestfoulscorebtn1")
let guestfoulStoreEL = document.getElementById("foulscoreg")
let guestfoul = 0

function removefoulguest1(){
    guestfoul -=1
    guestfoulStoreEL.textContent = guestfoul
}

function addfoulguest1(){
    guestfoul +=1
     guestfoulStoreEL.textContent = guestfoul
}



let reseteverything = document.getElementById("reset")
let resetEL = document.getElementById("resetall")
let reset = 0

function settozero (){
    reset = 0
    resetEL.textContent = reset
    
}