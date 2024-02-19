export const selectLang = (data: any, lang: string) => {
  return data.find((el: any) => el.lang === lang);
};
