export function loadGoogleTranslate() {
  // Prevent loading the script multiple times
  if (document.getElementById("google-translate-script")) return;

  const script = document.createElement("script");
  script.id = "google-translate-script";
  script.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

  document.body.appendChild(script);

  // Global callback required by Google
  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        includedLanguages: "en,sv",
      },
      "google_translate_element"
    );
  };
}
