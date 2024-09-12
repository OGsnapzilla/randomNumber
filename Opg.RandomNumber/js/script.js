function getRandomNumber() {
    const randomDecimal = Math.random()*101;
    const randomInteger = Math.floor(randomDecimal);
    return randomInteger;
}
console.log(`Heres a random number: ${getRandomNumber()}`);


function displayRandomNumber(number) {
    let displayNumber = document.getElementById("message");
    displayNumber.innerHTML = "Random Number: " + number;

    addToHistoryList();
}


function addToHistoryList(number) {
    let container = document.getElementById("historyList");
    let listItem = document.createElement("li");

    listItem.className= "histdata";
    listItem.innerHTML = number;

    container.appendChild(listItem);
}

function createListItem(number) {
    let listItem = document.createElement("li");
    listItem.className = "histdata";
    listItem.innerHTML(number);
    return listItem;
}

function deleteLastRandomNumber() {
    let container = document.getElementById("historyList");

    if(container.children.length != 0) {
        container.removeChild(container.lastChild);
        updateMessage("Last random number deleted");
    } else {
        updateMessage("History is empty");
    }
}

function updateMessage(message) {
    let displayMessage = document.getElementById("message");
    displayMessage.innerHTML = message;
}

function generateAndDisplayRandomNumber() {
    const randomNumber = getRandomNumber();
    displayRandomNumber(randomNumber);
}