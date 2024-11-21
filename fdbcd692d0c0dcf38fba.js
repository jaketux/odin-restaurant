import {displayHome, displayMenu, removeAll, displayContact } from "./pageload.js"
import "./styles.css";

displayHome()


const homeBtn = document.querySelector("#home-btn")
const menuBtn = document.querySelector("#menu-btn")
const contactBtn = document.querySelector("#contact-btn")

homeBtn.addEventListener('click',function(){
    removeAll();
    displayHome()
})

menuBtn.addEventListener('click',function(){
    removeAll();
    displayMenu()
})

contactBtn.addEventListener('click',function(){
    removeAll();
    displayContact()
})