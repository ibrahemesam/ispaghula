function get_default_lang() {
  return (navigator.language || navigator.userLanguage).startsWith("ar")
    ? "ar"
    : "en";
}
function get_user_lang() {
  var lang = localStorage.getItem("language");
  return lang ? lang : get_default_lang();
}
window.language = get_user_lang();
var lang_dict = {
  "i-am": {
    en: "I am: ",
    ar: " :أنا",
  },
  patient: {
    en: "Patient",
    ar: "عميل",
  },
  doctor: {
    en: "Doctor",
    ar: "طبيب",
  },
  "contact-us": {
    en: "Contact us",
    ar: "للاتصال بنا",
  },
  "report-issue": {
    en: "Report issue",
    ar: "إبلاغ عن مشكلة",
  },
};
function translate_word(word, lang = null) {
  return lang_dict[word][lang ? lang : window.language];
}
function translate_ui(lang = null) {
  document.querySelectorAll("[data-word]").forEach((e) => {
    e.innerText = translate_word(e.getAttribute("data-word"), lang);
  });
}

function set_lang(lang) {
  window.language = lang;
  localStorage.setItem("language", lang);
  translate_ui();
}
