// Text animation
const phrases = [
    "Freshly Brewed, Just for You!",
    "Taste the Magic in Every Sip!",
    "Where Tea Meets Happiness!"
];
let index = 0;

function changeText() {
    document.getElementById("changing-text").innerText = phrases[index];
    index = (index + 1) % phrases.length;
}
setInterval(changeText, 3000);

// Button action
function orderNow() {
    alert("Thank you for choosing Shahbudin Tea Stall! Your order will be ready soon.");
}
