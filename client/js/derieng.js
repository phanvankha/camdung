
var settingBtn = document.getElementById("setting-btn");
var settingPanel = document.createElement("div");
settingPanel.id = "setting-panel";
var closeButton = document.createElement("button");
closeButton.innerHTML = "Close";
closeButton.classList.add("close-button");
settingPanel.appendChild(closeButton);
settingPanel.innerHTML = `
  <div class="buttons">
    <div class="field">
      <input type="checkbox" id="switch"/>
      <label for="switch"></label>
      <span class="about">Web Access</span>
    </div>
    <div class="field">
      <select name="model" id="model">
        <option value="gpt-3.5-turbo" selected>gpt-3.5-turbo</option>
        <option value="gpt-4">gpt-4</option>
        <option value="gpt-3.5-turbo-0301">gpt-3.5-turbo-0301</option>
        <option value="gpt-4-0314">gpt-4-0314</option>
      </select>
      <span class="about">Model</span>
    </div>
    <div class="field">
      <select name="jailbreak" id="jailbreak">
        <option value="default" selected>default</option>
        <option value="gpt-math-1.0">math 1.0</option>
        <option value="gpt-dude-1.0">dude 1.0</option>
        <option value="gpt-dan-1.0">dan 1.0</option>
        <option value="gpt-dan-2.0">dan 2.0</option>
        <option value="gpt-dev-2.0">dev 2.0</option>
        <option value="gpt-evil-1.0">evil 1.0</option>
      </select>
      <span class="about">Jailbreak</span>
    </div>
    <form class="color-picker" action="">
      <fieldset>
        <legend class="visually-hidden">Pick a color scheme</legend>
        <label for="light" class="visually-hidden">Light</label>
        <input type="radio" name="theme" id="light" checked>
        <label for="pink" class="visually-hidden">Pink theme</label>
        <input type="radio" id="pink" name="theme">
        <label for="blue" class="visually-hidden">Blue theme</label>
        <input type="radio" id="blue" name="theme">
        <label for="green" class="visually-hidden">Green theme</label>
        <input type="radio" id="green" name="theme">
        <label for="dark" class="visually-hidden">Dark theme</label>
        <input type="radio" id="dark" name="theme">
      </fieldset>
    </form>
      <span class="about">Color</span> 
  </div>
`;
document.body.appendChild(settingPanel);

settingBtn.addEventListener("click", function() {
  if (settingPanel.style.display === "block") {
    settingPanel.style.opacity = "0";
    setTimeout(function() {
      settingPanel.style.display = "none";
    }, 300);
  } else {
    settingPanel.style.display = "block";
    setTimeout(function() {
      settingPanel.style.opacity = "1";
    }, 0);
  }
});
document.addEventListener("click", function(event) {
  var isClickInside = settingBtn.contains(event.target) || settingPanel.contains(event.target);
  if (!isClickInside) {
    settingPanel.style.opacity = "0";
    setTimeout(function() {
      settingPanel.style.display = "none";
    }, 300);
  }
});