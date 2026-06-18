function roll() {
    const dice = document.getElementById("DICE");
    const diceImage = document.getElementById("DICEIMAGE");
    const diceResult = document.getElementById("DICERESULT");
    const total = document.getElementById("TOTAL");

    diceImage.innerHTML = "";
    diceResult.innerHTML = "";

    const values = [];
    const images = [];
let tv=0;
    for (let i = 0; i < dice.value; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        tv+=value;
        values.push(value);
        images.push(`<img src="DICE_IMAGES/${value}.png" alt="dice ${value}">`);
    }

    diceResult.textContent = `DICE: ${values.join(", ")}`;
    diceImage.innerHTML = images.join("");
    total.textContent = `TOTAL: ${tv}`;
}