import { yupEnglishLocale } from "src/idiomas/idiomasYup/yupPortuguese";
import * as Yup from "yup";

export const setLocaleYup = (language: string) => {
  switch (language) {
    default:
      Yup.setLocale(yupEnglishLocale);
  }
};

export default Yup;
