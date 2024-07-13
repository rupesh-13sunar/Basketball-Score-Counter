// scoreboard ID calling
let home = document.getElementById("home-score");
let guest = document.getElementById("guest-score");
let scoreH = 0;
let scoreG = 0;
// funtion definition
    // funciton for reset score
    function reset() {
        scoreH = 0;
        scoreG = 0;
        home.textContent =  0;
        guest.textContent = 0;
    };
    // function for HOME
    function hplus1() {
        scoreH += 1;
        home.textContent = scoreH;
    };
    function hplus2() {
        scoreH += 2;
        home.textContent = scoreH;
    };
    function hplus3() {
        scoreH += 3;
        home.textContent = scoreH;
    };
    // function for guest
    function gplus1() {
        scoreG += 1;
        guest.textContent = scoreG;
    };
    function gplus2() {
        scoreG += 2;
        guest.textContent = scoreG;
    };
    function gplus3() {
        scoreG += 3;
        guest.textContent = scoreG;
    };