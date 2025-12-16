let raceData = [];
let classData = [];
let themeData = [];

// Optional: track that the tool loaded (helps you validate the install)
if (window.posthog) {
  posthog.capture('character_creator_loaded', { page: window.location.pathname });
}

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
  raceSelect.innerHTML = '<option value="">Select a race...</option>';
  raceData.forEach(r => {
    const opt = document.createElement("option");
    opt.value = r.name;
    opt.textContent = r.name;
    raceSelect.appendChild(opt);
  });

  const classSelect = document.getElementById("class");
  classSelect.innerHTML = '<option value="">Select a class...</option>';
  classData.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.name;
    opt.textContent = c.name;
    classSelect.appendChild(opt);
  });

  const themeSelect = document.getElementById("theme");
  themeSelect.innerHTML = '<option value="">Select a theme...</option>';
  themeData.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t.name;
    opt.textContent = t.name;
    themeSelect.appendChild(opt);
  });
}

function displayInfo(divId, data) {
  const div = document.getElementById(divId);
  if (!data) return (div.innerHTML = "");
  div.innerHTML = Object.entries(data)
    .map(([key, val]) =>
      `<p><strong>${key.replace(/_/g, ' ')}:</strong> ${
        Array.isArray(val) ? val.join(', ') : val
      }</p>`
    )
    .join("");
}

// Helper: only call PostHog if it’s available (avoids console errors)
function captureIfAvailable(eventName, props) {
  if (window.posthog && typeof posthog.capture === "function") {
    posthog.capture(eventName, props);
  }
}

// Optional: track “completion” once all three are selected
function maybeCaptureCompleted() {
  const race = document.getElementById("race").value;
  const klass = document.getElementById("class").value;
  const theme = document.getElementById("theme").value;

  if (race && klass && theme) {
    captureIfAvailable("character_creation_completed", { race, class: klass, theme });
  }
}

document.getElementById("race").addEventListener("change", function () {
  if (!this.value) {
    displayInfo("race-info", null);
    return;
  }

  const selected = raceData.find(r => r.name === this.value);
  displayInfo("race-info", selected);

  captureIfAvailable("race_selected", { race: this.value });
  maybeCaptureCompleted();
});

document.getElementById("class").addEventListener("change", function () {
  if (!this.value) {
    displayInfo("class-info", null);
    return;
  }

  const selected = classData.find(c => c.name === this.value);
  displayInfo("class-info", selected);

  // Use "class" as a property name, but avoid naming collisions in JS vars by calling it klass above
  captureIfAvailable("class_selected", { class: this.value });
  maybeCaptureCompleted();
});

document.getElementById("theme").addEventListener("change", function () {
  if (!this.value) {
    displayInfo("theme-info", null);
    return;
  }

  const selected = themeData.find(t => t.name === this.value);
  displayInfo("theme-info", selected);

  captureIfAvailable("theme_selected", { theme: this.value });
  maybeCaptureCompleted();
});
