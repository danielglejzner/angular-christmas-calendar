const snowContainer = document.querySelector(".snow");
const snowButton = document.getElementById("let-it-snow");
snowButton.classList.remove("no-js");

const randomize = (min, max, round = false) => {
  const randomPick = Math.random() * (max - min) + min;

  return round ? Math.round(randomPick) : randomPick;
};

const snow = () => {
  var snowcount = window.innerWidth * 0.25;
  var snowflakes = document.createDocumentFragment();
  for (var i = 0; i <= snowcount; i++) {
    const snowflake = document.createElement("span");
    const size = randomize(0.15, 0.85);
    const delay = i < snowcount * 0.1 ? randomize(0, 0.5) : randomize(0.35, 18);
    const leftPos = randomize(0, 100);
    snowflake.classList.add("snowflaky");
    snowflake.classList.add(`c${randomize(1, 3, true)}`);
    snowflake.style.left = `${leftPos}%`;
    snowflake.style.width = `${size}vw`;
    snowflake.style.height = `${size}vw`;
    snowflake.style.setProperty("--drift", `${leftPos + 2}%`);
    snowflake.style.animationDelay = `${delay}s`;
    snowflakes.appendChild(snowflake)
  }

  snowContainer.appendChild(snowflakes);
};

snowButton.addEventListener("click", (sb) => {
  const button = sb.target;
  if (button.getAttribute("aria-pressed") == "false") {
    button.setAttribute("aria-pressed", "true");
    button.textContent = "Stop snow";
    snow();
  } else {
    button.setAttribute("aria-pressed", "false");
    button.textContent = "Let it snow";
    snowContainer.innerHTML = "";
  }
});
