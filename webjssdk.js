/*
__      __      _        _  ___        ___  ___   _  __
\ \    / / ___ | |__  _ | |/ __|      / __||   \ | |/ /
 \ \/\/ / / -_)|  _ \| || |\__ \      \__ \| |) ||   < 
  \_/\_/  \___||____/ \__/ |___/      |___/|___/ |_|\_\

              WebJS SDK 1.0.1 by C1200
*/

// Better Dialogs

function betterdialogs_prompt(message, _default, callback) {
    var modal = document.getElementsByClassName("webjsmodal")[0];

    var modalcontent = document.createElement("div");
    modalcontent.setAttribute("class", "webjsmodalcontent");

    var modalclose = document.createElement("span");
    modalclose.setAttribute("class", "webjsmodalclose");
    modalclose.innerHTML = "&times;";
    modalclose.onclick = () => { modal.childNodes.forEach((child) => { modal.removeChild(child); }); modal.setAttribute("style", "display:none"); callback(null); }
    modalcontent.appendChild(modalclose);

    var msg = document.createElement("p");
    msg.innerHTML = message;
    modalcontent.appendChild(msg);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", _default);
    input.onkeypress = (ev) => { if (ev.key == "Enter") { modal.childNodes.forEach((child) => { modal.removeChild(child); }); modal.setAttribute("style", "display:none"); callback(input.value); } }
    modalcontent.appendChild(input);

    var okbtn = document.createElement("button");
    okbtn.setAttribute("class", "webjsmodalbutton");
    okbtn.innerHTML = "OK";
    okbtn.onclick = () => { modal.childNodes.forEach((child) => { modal.removeChild(child); }); modal.setAttribute("style", "display:none"); callback(input.value); }
    modalcontent.appendChild(okbtn);

    modal.appendChild(modalcontent);
    modal.setAttribute("style", "display:block");
}

function betterdialogs_alert(message) {
    var modal = document.getElementsByClassName("webjsmodal")[0];

    var modalcontent = document.createElement("div");
    modalcontent.setAttribute("class", "webjsmodalcontent");

    var modalclose = document.createElement("span");
    modalclose.setAttribute("class", "webjsmodalclose");
    modalclose.innerHTML = "&times;";
    modalclose.onclick = () => { modal.childNodes.forEach((child) => { modal.removeChild(child); }); modal.setAttribute("style", "display:none"); }
    modalcontent.appendChild(modalclose);

    var msg = document.createElement("p");
    msg.innerHTML = message;
    modalcontent.appendChild(msg);

    modal.appendChild(modalcontent);
    modal.setAttribute("style", "display:block");
}

function betterdialogs_confirm(message, callback) {
    var modal = document.getElementsByClassName("webjsmodal")[0];

    var modalcontent = document.createElement("div");
    modalcontent.setAttribute("class", "webjsmodalcontent");

    var modalclose = document.createElement("span");
    modalclose.setAttribute("class", "webjsmodalclose");
    modalclose.innerHTML = "&times;";
    modalclose.onclick = () => { modal.childNodes.forEach((child) => { modal.removeChild(child); }); modal.setAttribute("style", "display:none"); callback(false); }
    modalcontent.appendChild(modalclose);

    var msg = document.createElement("p");
    msg.innerHTML = message;
    modalcontent.appendChild(msg);

    var okbtn = document.createElement("button");
    okbtn.setAttribute("class", "webjsmodalbutton");
    okbtn.innerHTML = "OK";
    okbtn.onclick = () => { modal.childNodes.forEach((child) => { modal.removeChild(child); }); modal.setAttribute("style", "display:none"); callback(true); }
    modalcontent.appendChild(okbtn);

    var cancelbtn = document.createElement("button");
    cancelbtn.setAttribute("class", "webjsmodalbutton");
    cancelbtn.innerHTML = "Cancel";
    cancelbtn.onclick = () => { modal.childNodes.forEach((child) => { modal.removeChild(child); }); modal.setAttribute("style", "display:none"); callback(false); }
    modalcontent.appendChild(cancelbtn);

    modal.appendChild(modalcontent);
    modal.setAttribute("style", "display:block");
}

// WebJS SDK Setup

window.onload = function() {
    var modaldiv = document.createElement("div");
    modaldiv.setAttribute("class", "webjsmodal");
    document.body.appendChild(modaldiv);

    var styles = document.createElement("link");
    styles.setAttribute("rel", "stylesheet");
    styles.setAttribute("href", "https://cdn.jsdelivr.net/gh/C1200/WebJS-SDK@1.0.1/src/styles.css");
    document.head.appendChild(styles);
}