const butt = document.getElementById("butt");
const deButt = document.getElementById("delete");
const wrapp = document.getElementById("wrapper");
let index = 0;
butt.addEventListener("click", build);
deButt.addEventListener("click", delet);


function build(){
    let elem;
    let main;
    let con;
    switch (index) {
        case 0:
            console.log("built",index);
            elem = document.createElement('header');
            elem.innerText = "Header";
            elem.className = 'header';
            elem.id = 'header';
            wrapp.appendChild(elem);
            break;

        case 1:
            console.log("built",index);
            elem = document.createElement('div');
            elem.id = 'cont';
            wrapp.appendChild(elem);
            break;

        case 2:
            console.log("built",index);
            con = document.getElementById("cont");
            elem = document.createElement('aside');
            elem.innerText = "Aside";
            elem.className = 'aside';
            elem.id = 'aside';
            con.appendChild(elem);
            break;
        case 3:
            console.log("built",index);
            con = document.getElementById("cont");
            elem = document.createElement('article');
            elem.className = 'article';
            elem.id = 'art';
            con.appendChild(elem);
            break;
        case 4:
            console.log("built",index);
            elem = document.createElement('footer');
            elem.innerText = "Footer";
            elem.className = 'footer';
            elem.id = 'footer';
            wrapp.appendChild(elem);
            break;
        case 5:
            let art = document.getElementById("art");
            console.log("built",index);
            elem = document.createElement('p');
            elem.innerText = "Article";
            elem.className = 'main';
            elem.id = 'main';
            art.appendChild(elem);
            break;
        case 6:
            let arti = document.getElementById("art");
            console.log("built",index);
            elem = document.createElement('div');
            elem.id = 'mainImages';
            arti.appendChild(elem);
            break;
        case 7:
            main = document.getElementById("mainImages");
            console.log("built",index);
            elem = document.createElement('p');
            elem.innerText = "Image";
            elem.className = 'image';
            elem.id = 'image1';
            main.appendChild(elem);
            break;
        case 8:
            main = document.getElementById("mainImages");
            console.log("built",index);
            elem = document.createElement('p');
            elem.innerText = "Image";
            elem.className = 'image';
            elem.id = 'image2';
            main.appendChild(elem);
            break;
        case 9:
            main = document.getElementById("mainImages");
            console.log("built",index);
            elem = document.createElement('p');
            elem.innerText = "Image";
            elem.className = 'image';
            elem.id = 'image3';
            main.appendChild(elem);
            break;

        default:
            console.log("its built fuck off", index);
            index = 9;
            break;
    }
    index++;
}
function delet(){
    let elem;
    switch (index-1) {
        case 0:
            elem = document.getElementById("header");
            elem.remove();
            break;
        case 1:
            elem = document.getElementById("cont")
            elem.remove();
            break;
        case 2:
            elem = document.getElementById("aside");
            elem.remove();
            break;
        case 3:
            elem = document.getElementById("art");
            elem.remove();
            break;
        case 4:
            elem = document.getElementById("footer");
            elem.remove();
            break;
        case 5:
            elem = document.getElementById("main");
            elem.remove();
            break;
        case 6:
            elem = document.getElementById("mainImages");
            elem.remove();
            break;
        case 7:
            elem = document.getElementById("image1");
            elem.remove();
            break;
        case 8:
            elem = document.getElementById("image2");
            elem.remove();
            break;
        case 9:
            elem = document.getElementById("image3");
            elem.remove();
            break;

        default:
            console.log("its gone fuck off");
            index=1;
            break;
    }
    index--;
    console.log(index);
}