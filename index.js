//Clicker App
let counter = document.getElementById("count-el")

// initialize the count as 0
let count = 0
let saves = []
counter.innerHTML = 0

// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
// use console.log() to log the number of clicks - then test that in the browser’s console
function increment() {
    count++
    console.log(count)
    updateCount()
}

function save() {
    saves.push(count)
    document.getElementById("saved").innerHTML = "Previous Entries: " + saves.join(" - ")
}

function reset() {
    count = 0
    updateCount()
}

function updateCount() {
    counter.innerHTML = count
}