export const getURLParams = (url, value) => {
  const currentParam = url
    .replace('?', '')
    .split('&')
    .find((query) => query.startsWith(value));
  return currentParam ? currentParam.replace(`${value}=`, '') : '';
};
