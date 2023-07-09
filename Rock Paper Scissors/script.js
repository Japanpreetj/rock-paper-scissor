const chooseButtons=document.querySelectorAll("[data-button]");
const OPTIONS=[
    {
        name:"rock",
        logo:document.getElementById("rock"),
        beats:"scissor",
    },
    {
        name:"paper",
        logo:document.getElementById("paper"),
        beats:"rock",
    },
    {
        name:"scissor",
        logo:document.getElementById("scissor"),
        beats:"paper",
    },
];

function makeSelection(button){
    const user=OPTIONS[button].name;
    const compSelection=randomSelection();
    const compSelection.name;
    if(computer===user){
        document.getElementById("node").innerHTML=``
    }
}

function openRules(){
    document.getElementById("parent").innerHTML=`
    <div class="instructions">
        <h3 class="games">GAME RULES</h3><br>
        <ul class="list">
            <li><text class="p1"> </text>Rock beats scissors, scissors beat paper, and paper beats rock.</li>
            <li><text class="p2"> </text>Agree ahead of time whether you'll count off "rock,paper,scissors,shoot" or just "rock,paper,scissors."</li>
            <li><text class="p3"> </text>Use rock, paper, scissors to settle minor decisions or simply play to pass the time.</li>
            <li><text class="p4"> </text>If both players lay down the same hand, each player lays down another hand.</li>
        </ul>
        <button class="close" onclick="closeRules()">
            <img src="X.png">
        </button>
    </div>;`
}

function closeRules(){
    document.getElementById("parent").innerHTML="";
}
