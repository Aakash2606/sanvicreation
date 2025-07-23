document.getElementById("languageSwitcher").addEventListener("change", function () {
  const lang = this.value;

  if (lang === "hi") {
    document.querySelector("h2").textContent = "स्वागत है";
  } else if (lang === "mr") {
    document.querySelector("h2").textContent = "स्वागत आहे";
  } else {
    document.querySelector("h2").textContent = "Welcome";
  }
});
