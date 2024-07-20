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
        leaderH.textContent = "";
        leaderG.textContent = "";
        winnerH.textContent = "";
        winnerG.textContent = "";
        start();
    };
    // function for HOME
    function hplus1() {
        scoreH += 1;
        home.textContent = scoreH;
        checkLeader();
        checkWinner();
    };
    function hplus2() {
        scoreH += 2;
        home.textContent = scoreH;
        checkLeader();
        checkWinner();
    };
    function hplus3() {
        scoreH += 3;
        home.textContent = scoreH;
        checkLeader();
        checkWinner();
    };
    // function for guest
    function gplus1() {
        scoreG += 1;
        guest.textContent = scoreG;
        checkLeader();
        checkWinner();
    };
    function gplus2() {
        scoreG += 2;
        guest.textContent = scoreG;
        checkLeader();
        checkWinner();
    };
    function gplus3() {
        scoreG += 3;
        guest.textContent = scoreG;
        checkLeader();
        checkWinner();
    };
    // condition and function for checking leader
    let leaderH = document.getElementById("home-leads");
    let leaderG = document.getElementById("guest-leads");
    function checkLeader() {
        if (scoreH > scoreG) {
            leaderH.textContent = "Leading";
            leaderG.textContent = "";
        } else if ( scoreH < scoreG) {
            leaderG.textContent = "Leading";
            leaderH.textContent = "";
        } else {
            leaderG.textContent = "";
            leaderH.textContent = "";
        }  
    };
    // prompting final winner
    let winnerH = document.getElementById("final-result");
    let winnerG = document.getElementById("final-result");
    function checkWinner() {
        if(home.textContent >= 10 && home.textContent < 13) {
            winnerH.textContent = "Home Wins !!!";
            stop();
        } else if(guest.textContent >= 10) {
            winnerG.textContent = "Guest Wins !!!";
            stop();
        } else {
        // console.log("no wins");
        }
    };
    //stopping game 
    function stop() {
        buttonInactive = document.querySelectorAll("button.points-number");
        for (let i=0; i<buttonInactive.length; i++) {
            buttonInactive[i].disabled = true;
        }; 
    };
    //starting game 
    function start() {
        buttonActive = document.querySelectorAll("button.points-number");
        for (let i=0; i<buttonActive.length; i++) {
            buttonActive[i].disabled = false;
        }; 
    };