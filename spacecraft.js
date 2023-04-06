let spacecraftBtn = document.querySelector(".spacecraftBtn");
spacecraftBtn.addEventListener("click", getSpacecraft);

let spacecraft_Arr = [];
let ul_space = document.querySelector(".ul-space");
async function getSpacecraft() {
  await fetch("https://isro.vercel.app/api/spacecrafts")
    .then((response) => response.json())
    .then((data) => (spacecraft_Arr = data));

  console.log(spacecraft_Arr);
  for (let i = 0; i < spacecraft_Arr.spacecrafts.length; i++) {
    ul_space.appendChild(
      document.createElement("li")
    ).innerHTML = `Place : ${spacecraft_Arr.spacecrafts[i].name}`;
  }
}
