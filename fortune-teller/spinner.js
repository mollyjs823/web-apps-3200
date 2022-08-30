const options  = [
    {
        name : "Pieology",
        background : "#FF595E",
        color: "#fff"
    },
    {
        name : "Mo Bettahs",
        background : "#FF924C",
        color: "#fff"
    },
    {
        name : "Cafe Sabor",
        background : "#ffca3a",
        color: "#fff"
    },
    {
        name : "Jersey Mike's",
        background : "#c5ca30",
        color: "#fff"
    },
    {
        name : "Viva Chicken",
        background : "#8AC926",
        color: "#fff"
    },
    {
        name : "Tumeric",
        background : "#36949D",
        color: "#fff"
    },
    {
        name : "At Home!",
        background : "#1982C4",
        color: "#fff"
    },
    {
        name : "Riggatti's",
        background : "#4267AC",
        color: "#fff"
    },
    {
        name : "Morty's Cafe",
        background : "#565AA0",
        color: "#fff"
    },
    {
        name : "Xetava Gardens Cafe",
        background : "#6A4C93",
        color: "#fff"
    }
];

function setSpinner() {
    const par = document.getElementById("spinner");
    var rotation = 0;
    for (let s of options) {
        let newEl = document.createElement("div");
        newEl.classList.add("slice");
        newEl.style.transform = `rotate(${rotation}deg)`;
        newEl.style.backgroundColor = s.background;
        newEl.style.color = s.color;
        newEl.innerHTML = s.name;
        par.appendChild(newEl);
        rotation += 36;
    }
}

function pickPlace() {
    let choice = Math.floor(Math.random() * options.length);
    document.documentElement.style.setProperty('--spun', `${-choice * 36}deg`);
    document.getElementById("spinner").style.transform = "rotate(var(--spun))";
    var par = document.getElementById("selection_ctr");
    let selection = document.createElement("div");
    selection.classList.add("selection");
    selection.innerHTML = options[choice].name;
    selection.style.backgroundColor = options[choice].background;
    selection.style.border = "2px solid #f8f8f8";
    par.appendChild(selection);
    if (par.childNodes[1]) {
        par.childNodes[0].style.transform = "translate(-150vw)";
        setTimeout(() => {
            par.childNodes[1].style.transform = "translate(0)";
            par.childNodes[0].remove();
        }, 500);
    } else {
        setTimeout(() => {
            par.childNodes[0].style.transform = "translate(0)";
        }, 500);
    }
}

setSpinner();