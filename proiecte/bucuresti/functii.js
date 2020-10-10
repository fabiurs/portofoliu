
function getName(){
    var text = document.getElementById("prenum").value;
    alert("Mesajul a fost trimis! Multumesc, " + text);
}

if(screen.width < 852){
    alert("Imi pare rau insa acest site nu este optimizat pentru dispozitive mobile. Incearca sa il accesezi de pe un laptop sau PC");
}
