var pageRoster = document.getElementById("pageRoster")
var btnRoster = document.getElementById("btnRoster")
var close = document.getElementById("cross")
var btnAcceuil = document.getElementById("btnAcceuil")
var btnContact = document.getElementById("btnContact")
var pageContact = document.getElementById("pageContact")
var container = document.getElementById("container")
var pageAcceuil = document.getElementById ("pageAcceuil")
var btnMenu = document.getElementById ("btnMenu")
var containerPageRoster = document.getElementById("containerPageRoster")
var btnLeftAcceuil = document.getElementById("btnLeftAcceuil")
var btnLeftRoster = document.getElementById("btnLeftRoster")
var btnLeftNousRejoindre = document.getElementById("btnLeftNousRejoindre")
var btnLeftContact = document.getElementById("btnLeftContact")
var btnMenu = document.getElementById ("btnMenu")
var leftMenu = document.getElementById("leftMenu")
var btnCloseLeftMenu = document.getElementById("btnCloseLeftMenu")



btnRoster.onclick = function() {
    pageRoster.style.opacity ="1"
    pageRoster.style.height = "100%"
    btnRoster.style.color= "white"
    btnContact.style.color ="white"
    pageContact.style.opacity ="0"
    btnRoster.className = "right-nav-ol-li active"
    btnContact.className = "right-nav-ol-li"
    container.style.height ="60%"
    pageAcceuil.style.display ="none"
    btnAcceuil.className ="right-nav-ol-li"
    containerPageRoster.style.height = "100%"
    containerPageRoster.style.display ="flex"

}

close.onclick = function() {
    pageRoster.style.opacity = "0"
    pageRoster.style.height = "0.01px"
    btnRoster.style.color= "white"
    btnRoster.className ="right-nav-ol-li"
    container.style.height ="0%"
    btnAcceuil.className ="right-nav-ol-li"

}

btnAcceuil.onclick = function() {
    pageRoster.style.opacity ="0"
    pageRoster.style.height = "0.01px"
    btnRoster.style.color= "white"
    btnContact.style.color ="white"
    btnRoster.className ="right-nav-ol-li"
    container.style.height ="0%"
    pageAcceuil.style.display ="flex"
    pageContact.style.display ="none"
    btnAcceuil.className ="right-nav-ol-li active"
    btnContact.className ="right-nav-ol-li"

}

btnContact.onclick = function(){
    pageContact.style.opacity ="1"
    pageContact.style.display ="flex"
    pageContact.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
    pageContact.style.transform ="translateX(20px)"
    btnContact.style.color = "white"
    pageRoster.style.height = "0.01px"
    pageRoster.style.opacity ="0"
    btnRoster.style.color = "white"
    btnContact.className ="right-nav-ol-li active"
    btnRoster.className = "right-nav-ol-li"
    container.style.height ="90%"
    pageAcceuil.style.display ="none"
    btnAcceuil.className ="right-nav-ol-li"

}

btnMenu.onclick = function() {
pageAcceuil.style.display = "none"
leftMenu.style.transform = "translateX(0px)"
}

btnCloseLeftMenu.onclick = function() {
    leftMenu.style.transform ="translateX(-400px)"
}

btnLeftAcceuil.onclick = function() {
    pageRoster.style.opacity ="0"
    pageRoster.style.height = "0.01px"
    btnRoster.style.color= "white"
    btnContact.style.color ="white"
    btnRoster.className ="right-nav-ol-li"
    container.style.height ="0%"
    pageAcceuil.style.display ="flex"
    pageContact.style.display ="none"
    btnAcceuil.className ="right-nav-ol-li active"
    btnContact.className ="right-nav-ol-li"
    leftMenu.style.transform ="translateX(-400px)"

}

btnLeftContact.onclick = function() {
    pageContact.style.opacity ="1"
    pageContact.style.display ="flex"
    pageContact.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
    pageContact.style.transform ="translateX(20px)"
    btnContact.style.color = "red"
    pageRoster.style.height = "0.01px"
    pageRoster.style.opacity ="0"
    btnRoster.style.color = "white"
    btnContact.className ="right-nav-ol-li active"
    btnRoster.className = "right-nav-ol-li"
    container.style.height ="90%"
    pageAcceuil.style.display ="none"
    btnAcceuil.className ="right-nav-ol-li"
    leftMenu.style.transform ="translateX(-400px)"

}

btnLeftRoster.onclick = function() {
    pageRoster.style.opacity ="1"
    pageRoster.style.height = "100%"
    btnRoster.style.color= "white"
    btnContact.style.color ="white"
    pageContact.style.opacity ="0"
    btnRoster.className = "right-nav-ol-li active"
    btnContact.className = "right-nav-ol-li"
    container.style.height ="60%"
    pageAcceuil.style.display ="none"
    btnAcceuil.className ="right-nav-ol-li"
    containerPageRoster.style.height = "100%"
    containerPageRoster.style.display ="flex"
    leftMenu.style.transform ="translateX(-400px)"

}