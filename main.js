const dat = new Date();
const dev = "CloseCoder";
let fullName = "Karimjonov Sodiq";
const days = ["Yakshanba","Dushanba", "Seshanba", "Chorshanba", "Payshanba" , "Juma", "Shanba",];
function d()
    document.getElementById("buttohn").innerHTML=days[dat.getDay()];
