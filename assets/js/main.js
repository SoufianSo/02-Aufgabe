console.log("it works-DOM Aufgabe");

const mytext = "Hello again";
document.write(mytext);

const vorname = "soufian";
const nachname = "souilm";

document.write("<p>Hi, ich bin " + vorname + " " + nachname + ".</p>");
document.write("<p> Hi, ich bin" + vorname + " " + nachname + "</p>");

function showURL() {
  const url = window.location.href; // Die URL der aktuellen Seite abrufen
  const urlDisplay = document.getElementById("urlDisplay");
  urlDisplay.textContent = "Die aktuelle URL ist: " + url;
}

// Den Button mit der Funktion verknüpfen
const showURLButton = document.getElementById("showURLButton");
showURLButton.addEventListener("click", showURL);
