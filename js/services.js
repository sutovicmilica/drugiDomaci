let x = document.getElementById("ime");
let y = document.getElementById("mejl");

if(x == null){
    alert("Nepravilno polje za ime");
    return;
}

if(y == null){
    alert("Nepravilno polje za email");
    return;
}

if(x == "" || y == ""){
    alert("Niste popunili polje ili za ime ili za email");
    return;
}

if(!y.contains("@")){
    alert("Email mora sadrzati @");
    return;
}