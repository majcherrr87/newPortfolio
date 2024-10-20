export const selectLang = <T extends { lang: string }>(
  data: T[],
  lang: string
): T | undefined => {
  return data.find((el) => el.lang === lang);
};
