// 🔑 তোমার Adsterra API Key
const API_KEY = "295b3456fb737cfb8b5b3af0239e84ca";

// 🛡️ CORS proxy (example)
const PROXY = "https://corsproxy.io/?";

// 📌 Adsterra Stats API (example endpoint)
const API_URL = "https://api.adsterra.com/v1/statistics";

// 📅 date range
const params = "?date_from=2026-01-01&date_to=2026-01-28";

// Final URL
const finalURL = PROXY + encodeURIComponent(API_URL + params);

fetch(finalURL, {
  headers: {
    "Authorization": "Bearer " + API_KEY,
    "Accept": "application/json"
  }
})
.then(res => res.json())
.then(data => {
  // ⚠️ response structure account-wise different হতে পারে
  document.getElementById("imp").innerText =
    data.total?.impressions || 0;

  document.getElementById("clicks").innerText =
    data.total?.clicks || 0;

  document.getElementById("rev").innerText =
    data.total?.revenue || "0.00";
})
.catch(err => {
  console.error(err);
  alert("API Error / CORS Blocked");
});
