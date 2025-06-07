const cityData = {
  toshkent: {
    description: "Toshkent - O‘zbekistonning poytaxti, zamonaviy va tarixiy diqqatga sazovor joylarga ega shahar. Mashhur joylar: Alisher Navoiy teatri, Mustaqillik maydoni, Chorsu bozori.",
    places: ["Alisher Navoiy teatri", "Mustaqillik maydoni", "Chorsu bozori", "Amir Temur muzeyi"]
  },
  samarqand: {
    description: "Samarqand - O‘zbekistonning tarixiy marvaridi, YuNESKO ro‘yxatidagi shahar. Mashhur joylar: Registon maydoni, G‘ur Amir maqbarasi, Bibi Xonim masjidi.",
    places: ["Registon maydoni", "G‘ur Amir maqbarasi", "Bibi Xonim masjidi", "Shohi Zinda"]
  },
  buxoro: {
    description: "Buxoro - o‘rta asrlarning muqaddas shahri, tarixiy arxitektura bilan mashhur. Mashhur joylar: Ark qal’asi, Lyabi Hovuz, Po-i Kalon kompleksi.",
    places: ["Ark qal’asi", "Lyabi Hovuz", "Po-i Kalon kompleksi", "Chor Minor"]
  }
};

const citySelect = document.getElementById("city-select");
const searchButton = document.getElementById("search-btn");
const cityInfo = document.getElementById("city-info");
const itineraryList = document.getElementById("itinerary-list");
const itineraryInput = document.getElementById("itinerary-input");
const addItineraryButton = document.getElementById("add-itinerary-btn");

function displayCityInfo(city) {
  if (!city || !cityData[city]) {
    cityInfo.innerHTML = "<p class='error'>Iltimos, shahar tanlang!</p>";
    return;
  }

  const data = cityData[city];
  cityInfo.innerHTML = `
    <h2>${city.charAt(0).toUpperCase() + city.slice(1)}</h2>
    <p>${data.description}</p>
    <h3>Diqqatga sazovor joylar:</h3>
    <ul>${data.places.map(place => `<li>${place}</li>`).join("")}</ul>
  `;
}

function addToItinerary() {
  const item = itineraryInput.value.trim();
  if (!item) {
    alert("Iltimos, joy yoki faoliyat kiriting!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${item} <button onclick="this.parentElement.remove()">O‘chirish</button>`;
  itineraryList.appendChild(li);
  itineraryInput.value = "";
}

searchButton.addEventListener("click", () => {
  const selectedCity = citySelect.value;
  displayCityInfo(selectedCity);
});

addItineraryButton.addEventListener("click", addToItinerary);

itineraryInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addToItinerary();
});

citySelect.addEventListener("change", () => {
  const selectedCity = citySelect.value;
  displayCityInfo(selectedCity);
});