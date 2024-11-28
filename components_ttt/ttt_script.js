// console.log("Welcome to Tic Tac Toe")

// variables and audios
let music = new Audio("components_ttt/music.mp3")
let ting = new Audio("components_ttt/ting.mp3")
let gameover = new Audio("components_ttt/gameover.mp3")
let turn = "X"
let over = false;


// Function to change turn
const changeturn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to check for win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    // winner announce
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            over = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '25vw';
            gameover.play()

            // sleep delay
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            sleep(3000).then(() => {
                if (confirm("Want to Play again ?")) {
                    // Clicks reset automatically foe player.
                    document.getElementById("reset").click();
                }
                else {
                    // says thanks and resets.
                    cancel = "Ok! Thanks for playing.....";
                    alert(cancel)
                    document.getElementById("reset").click();
                }
            });
        }
    })
}

// Game logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            ting.play();
            checkwin();
            if (!over) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
});

// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    over = false
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})
