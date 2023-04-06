let custBtn = document.querySelector(".custBtn");
custBtn.addEventListener("click", getCenters);
let input = document.querySelector(".search");
// input.addEventListener("fullscreenchange", getCenters);
let customer_Arr = [];
let ul_customer = document.querySelector(".ul-customer");
async function getCenters() {
  await fetch("https://isro.vercel.app/api/customer_satellites")
    .then((response) => response.json())
    .then((data) => (customer_Arr = data));

  console.log(customer_Arr);
  let text = input.value.toUpperCase();
  console.log(input.value);
  for (let i = 0; i < customer_Arr.customer_satellites.length; i++) {
    if (text == customer_Arr.customer_satellites[i].country) {
      ul_customer.appendChild(
        document.createElement("li")
      ).innerHTML = `Customer Satellites : ${customer_Arr.customer_satellites[i].id} & it's country : ${customer_Arr.customer_satellites[i].country}`;
    }
  }
}
