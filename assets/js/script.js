'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 * 
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAVBAR
 * 
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER & BACK TOP BTN
 * 
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);

function checkSymptoms(){

const symptom = document.getElementById("symptomInput").value.toLowerCase();
const result = document.getElementById("symptomResult");

if(symptom === ""){
result.innerHTML = "⚠️ Please enter your symptoms.";
return;
}

if(symptom.includes("fever") || symptom.includes("cold") || symptom.includes("cough")){
result.innerHTML =
"🌡️ You may have a viral infection or flu.<br><br>" +
"💡 Suggested Specialist: <b>Pulmonologist / General Physician</b><br>" +
"📅 Recommendation: Book an appointment for proper diagnosis.";
}

else if(symptom.includes("headache") || symptom.includes("stress") || symptom.includes("anxiety") || symptom.includes("depression")){
result.innerHTML =
"🧠 These symptoms may be related to stress or mental health.<br><br>" +
"💡 Suggested Specialist: <b>Psychiatrist</b><br>" +
"🧘 Recommendation: Try relaxation and consult a mental health professional.";
}

else if(symptom.includes("bone") || symptom.includes("joint") || symptom.includes("back pain") || symptom.includes("injury")){
result.innerHTML =
"🦴 This may be related to bone or joint issues.<br><br>" +
"💡 Suggested Specialist: <b>Orthopedic Doctor</b><br>" +
"🏥 Recommendation: Consider consulting an orthopedic specialist.";
}

else if(symptom.includes("pregnancy") || symptom.includes("period") || symptom.includes("women health")){
result.innerHTML =
"👩 These symptoms are related to women's health.<br><br>" +
"💡 Suggested Specialist: <b>Gynecologist</b><br>" +
"📅 Recommendation: Schedule a women's health consultation.";
}

else if(symptom.includes("child") || symptom.includes("baby") || symptom.includes("child fever")){
result.innerHTML =
"👶 This symptom relates to child healthcare.<br><br>" +
"💡 Suggested Specialist: <b>Pediatrician</b><br>" +
"🩺 Recommendation: Visit a pediatric specialist.";
}

else{
result.innerHTML =
"🏥 We recommend consulting a doctor for proper diagnosis.<br><br>" +
"💡 Use Healix to find trusted specialists near you.";
}

}