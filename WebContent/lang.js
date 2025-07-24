document.getElementById("languageSwitcher").addEventListener("change", function () {
  const lang = this.value;

  const translations = {
    en: {
      title: "Sanvi Creation",
      subtitle: "Traditional Maharashtrian Handmade Jewelry",
      navHome: "Home",
      navAbout: "About",
      navGallery: "Gallery",
      navContact: "Contact",
      welcome: "Welcome",
      heroText: "Explore our collection of authentic, handcrafted Maharashtrian jewelry – made with love and tradition at Sanvi Creation.",
      aboutHeading: "About Us",
      aboutText: "Sanvi Creations is a passion project born out of love for tradition and craftsmanship.",
      contactHeading: "Contact Us",
      contactText: "Have questions or custom orders? Message us anytime!"
    },
    hi: {
      title: "सान्वी क्रिएशन",
      subtitle: "पारंपरिक महाराष्ट्रीयन हस्तनिर्मित आभूषण",
      navHome: "मुखपृष्ठ",
      navAbout: "हमारे बारे में",
      navGallery: "गैलरी",
      navContact: "संपर्क करें",
      welcome: "स्वागत है",
      heroText: "हमारे हाथ से बने महाराष्ट्रीयन गहनों का संग्रह देखें – प्रेम और परंपरा से बने।",
      aboutHeading: "हमारे बारे में",
      aboutText: "सान्वी क्रिएशन परंपरा और शिल्प के प्रेम से उत्पन्न एक जुनूनी परियोजना है।",
      contactHeading: "संपर्क करें",
      contactText: "प्रश्न हैं या कस्टम ऑर्डर? कभी भी हमें संदेश भेजें!"
    },
    mr: {
      title: "सान्वी क्रिएशन",
      subtitle: "परंपरागत महाराष्ट्रीयन हस्तनिर्मित दागिने",
      navHome: "मुख्यपृष्ठ",
      navAbout: "आमच्याबद्दल",
      navGallery: "गॅलरी",
      navContact: "संपर्क",
      welcome: "स्वागत आहे",
      heroText: "आमच्या हाताने बनवलेल्या महाराष्ट्रीयन दागिन्यांचा संग्रह पाहा – प्रेमाने व परंपरेने बनवलेले.",
      aboutHeading: "आमच्याबद्दल",
      aboutText: "सान्वी क्रिएशन ही परंपरा आणि कारागिरीच्या प्रेमातून साकारलेली एक कल्पना आहे.",
      contactHeading: "संपर्क",
      contactText: "प्रश्न आहेत? कस्टम ऑर्डरसाठी कधीही संपर्क साधा!"
    }
  };

  const selected = translations[lang];

  for (const id in selected) {
    const el = document.getElementById(id);
    if (el) el.textContent = selected[id];
  }
});
