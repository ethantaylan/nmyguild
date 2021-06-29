var pageRoster = document.getElementById("pageRoster")
var btnRoster = document.getElementById("btnRoster")
var close = document.getElementById("cross")
var btnAcceuil = document.getElementById("btnAcceuil")
var btnContact = document.getElementById("btnContact")
var pageContact = document.getElementById("pageContact")

btnRoster.onclick = function() {
    pageRoster.style.opacity ="1"
    btnRoster.style.color= "red"
    btnContact.style.color ="white"
    pageContact.style.opacity ="0"
}

close.onclick = function() {
    pageRoster.style.opacity = "0"
    btnRoster.style.color= "white"
}

btnAcceuil.onclick = function() {
    pageRoster.style.opacity ="0"
    btnRoster.style.color= "white"
    btnContact.style.color ="white"

}

btnContact.onclick = function(){
    pageContact.style.opacity ="1"
    pageContact.style.transform ="translateX(20px)"
    btnContact.style.color = "red"
    pageRoster.style.opacity ="0"
    btnRoster.style.color = "white"
}



