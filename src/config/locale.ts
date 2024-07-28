import locale from "i18next";
import enJSON from "../locale/en.json";

locale.init({
  resources: {
    en: { ...enJSON },
  },
  lng: "en",
});

export default locale;
