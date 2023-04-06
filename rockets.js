let rocketBtn = document.querySelector(".rocketBtn");
rocketBtn.addEventListener("click", getRockets);
let rockets_Arr = [];
let ul_rocket = document.querySelector(".ul-rockets");
async function getRockets() {
  await fetch("https://isro.vercel.app/api/launchers")
    .then((response) => response.json())
    .then((data) => (rockets_Arr = data));

  console.log(rockets_Arr);
  for (let i = 0; i < rockets_Arr.launchers.length; i++) {
    ul_rocket.appendChild(
      document.createElement("li")
    ).innerHTML = `Rockets : ${rockets_Arr.launchers[i].id} `;
  }
}
