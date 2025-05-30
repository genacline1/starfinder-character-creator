let raceData = [];
let classData = [];
let themeData = [];

Promise.all([
  fetch("data/races.json").then(res => res.json()),
  fetch("data/classes.json").then(res => res.json()),
  fetch("data/themes.json").then(res => res.json())
]).then(([races, classes, themes]) => {
  raceData = races;
  classData = classes;
  themeData = themes;
  populateDropdowns();
});

function populateDropdowns() {
  const raceSelect = document.getElementById("race");
  raceData.forEach(r => {
    const opt = document.createElement("option");
    opt.value = r.name;
    opt.textContent = r.name;
    raceSelect.appendChild(opt);
  });

  const classSelect = document.getElementById("class");
  classData.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.name;
    opt.textContent = c.name;
    classSelect.appendChild(opt);
  });

  const themeSelect = document.getElementById("theme");
  themeData.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t.name;
    opt.textContent = t.name;
    themeSelect.appendChild(opt);
  });
}

function displayInfo(divId, data) {
  const div = document.getElementById(divId);
  if (!data) return div.innerHTML = "";
  div.innerHTML = Object.entries(data)
    .map(([key, val]) => `<p><strong>${key.replace(/_/g, ' ')}:</strong> ${Array.isArray(val) ? val.join(', ') : val}</p>`)
    .join("");
}

document.getElementById("race").addEventListener("change", function () {
  const selected = raceData.find(r => r.name === this.value);
  displayInfo("race-info", selected);
});
document.getElementById("class").addEventListener("change", function () {
  const selected = classData.find(c => c.name === this.value);
  displayInfo("class-info", selected);
});
document.getElementById("theme").addEventListener("change", function () {
  const selected = themeData.find(t => t.name === this.value);
  displayInfo("theme-info", selected);
});
