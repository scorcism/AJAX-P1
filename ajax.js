console.log("Hello! This is working ");

let fruitBtn = document.getElementById("fruitsBtn");
fruitsBtn.addEventListener('click', showFruits)

function showFruits() {
    console.log("inside Functions");

    const xmr = new XMLHttpRequest();

    xmr.open('GET', 'fruits.txt', true);

    xmr.onprogress = function () {
        console.log("on Progress!")
    }

    xmr.onreadystatechange = function () {
        console.log("Ready stage is; ", xmr.readyState);
    }


    xmr.onload = function () {
        str = this.responseText;
        console.log(str);
        document.getElementById('fruits').innerHTML = str;

    }
    xmr.send();
}

let veg = document.getElementById('VegitablesBtn')
VegitablesBtn.addEventListener('click', vegButtonClicked);

function vegButtonClicked(params) {
    console.log("Inside Veg Functions!\n");

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'vegitables.txt', true);

    xhr.onload = function () {
        str2 = this.responseText;
        console.log(str2);
        document.getElementById('Vegitables').innerHTML = str2;
    }

    xhr.send();

}