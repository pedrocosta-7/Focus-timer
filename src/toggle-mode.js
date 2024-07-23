let darkMode = true
const buttonToggle = document.querySelector("#toggle-mode")

buttonToggle.addEventListener("click", (event) =>
{
document.body.classList.toggle("light")
const mode = darkMode ? "Light" : "Dark"
event.currentTarget.querySelector("span").textContent = `${mode} mode ativado`

darkMode = !darkMode
}
)