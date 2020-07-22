// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">
         `;

      });
   })
   let launchForm = document.getElementById("launchForm");
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let faultyItems = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]");

   launchForm.addEventListener("submit", function(event) {
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!")
         event.preventDefault();
      } else if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Please enter valid numbers for Fuel Level and Cargo Mass!")
         event.preventDefault();
      } else if (isNaN(pilotNameInput.value) === false|| (isNaN(copilotNameInput.value)=== false)) {
         alert("Please enter a valid name for the pilot and copilot!")
         event.preventDefault();
      } else if (fuelLevelInput.value < 10000 || cargoMassInput.value >10000) {
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch`;
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
            if (fuelLevelInput.value > 10000) {
               cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
               event.preventDefault();
            } else if (cargoMassInput.value) {
               fuelStatus.innerHTML = "Fuel too low for launch";
               event.preventDefault();
            }
      } else {
         launchStatus.innerHTML = "Shuttle Ready for Launch";
         launchStatus.style.color = "green";
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch`;
         event.preventDefault();
      }
   });
});


