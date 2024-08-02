import enJSON from "../locale/en.json";
import locale from "i18next";

locale.init({
  resources: {
    en: { ...enJSON },
  },
  lng: "en",
});

export default locale;
