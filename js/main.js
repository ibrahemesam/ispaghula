translate_ui();
var pdf_container = document.getElementById("pdf-container"),
  iframe_pdf = document.getElementById("iframe-pdf"),
  lang_switch = document.getElementById("language-toggle-label"),
  language_toggle_input = document.getElementById("language-toggle-input"),
  patient_user = document.getElementById("i-am-patient"),
  doctor_user = document.getElementById("i-am-doctor"),
  contact_us_btn = document.getElementById("contact-us-btn");

function set_pdf(user_type = null, lang = null) {
  user_type = user_type ? user_type : get_user_type();
  lang = lang ? lang : window.language;
  pdf_container.setAttribute("hidden", false);
  var current_pdf = `${user_type}.${lang}.pdf`;
  if (document.body.getAttribute("current-pdf") != current_pdf) {
    document.body.setAttribute("current-pdf", current_pdf);
    iframe_pdf.setAttribute(
      "src",
      `assets/pdf_js/web/viewer.html?file=../../${current_pdf}`
    );
  }
}

if (
  (window.language == "en" && language_toggle_input.value != "on") ||
  (window.language == "ar" && language_toggle_input.value != "off")
) {
  lang_switch.click();
}
lang_switch.addEventListener("click", () => {
  if (window.language == "en") {
    set_lang("ar");
  } else {
    set_lang("en");
  }
  if (get_user_type()) set_pdf();
});

contact_us_btn.onclick = () => {
  alert("Tel: +20 1061 929 763");
};

doctor_user.onclick = () => {
  localStorage.setItem("user-type", "dr");
  set_pdf("dr", window.language);
};
patient_user.onclick = () => {
  localStorage.setItem("user-type", "pt");

  set_pdf("pt", window.language);
};
function get_user_type() {
  return localStorage.getItem("user-type");
}
window.user_type = get_user_type();
if (user_type == "dr") doctor_user.click();
else if (user_type == "pt") patient_user.click();
