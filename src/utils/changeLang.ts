export const selectLang = (data, lang: string) => {
  return data.find((el) => el.lang === lang);
};
