let centerBtn = document.querySelector(".centerBtn");
centerBtn.addEventListener("click", getCenters);
let centers_Arr = [];
let ul_center = document.querySelector(".ul-center");
async function getCenters() {
  await fetch("https://isro.vercel.app/api/centres")
    .then((response) => response.json())
    .then((data) => (centers_Arr = data));

  //   console.log(centers_Arr);
  for (let i = 0; i < centers_Arr.centres.length; i++) {
    ul_center.appendChild(
      document.createElement("li")
    ).innerHTML = `Place : ${centers_Arr.centres[i].Place} && State : ${centers_Arr.centres[i].State}`;
  }
}
