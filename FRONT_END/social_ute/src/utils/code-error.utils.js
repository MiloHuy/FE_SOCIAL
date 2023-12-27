export const CheckCodeInArray = (array, code) => {
  if (!array || !code) return;

  array.map((obj) => {
    if (obj.code === code) {
      return obj.label;
    }
  });
};
