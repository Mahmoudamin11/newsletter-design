let subscribe = document.querySelector("main button");
let emailIn = document.querySelector("input");
let formIn = document.querySelector("form");
let mainPage = document.querySelector("main");
let succesPage = document.querySelector("div.success")
let emailSpan = document.querySelector(".success span")
let dismissBtn = document.querySelector(".success button");


let regex = /(\w+|\d+)@\w+.(com|org|net|io)/ig;


let exist = 0;
let errorP = document.querySelector("p.error-p");
subscribe.onclick = function (e) {

    let entered = emailIn.value;
    console.log(entered)
    if (regex.test(entered) === false) {
        emailIn.className = "error";
        // let txt = document.createTextNode("Valid email required");
        // errorP.appendChild(txt);
        // document.body.appendChild(errorP);
        // errorP.className = "error-p";
        errorP.style.display = "block";
        exist = 1;

    }
    else {
        emailIn.className = "normal";
        if (exist === 1) {
            errorP.style.display = "none";
        }
        mainPage.style.display = "none";
        emailSpan.innerHTML = entered;
        succesPage.style.display = "block"

    }

    // formIn.appendChild(errorP)

}

dismissBtn.onclick = function () {
    if (exist === 1) {
        document.querySelector(".error-p").style.display = "none";
    }
    mainPage.style.display = "grid";
    succesPage.style.display = "none";
    emailIn.value = ""
}



