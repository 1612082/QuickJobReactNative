export const prettierNumber = (number) => {
  let formetedNumber = Number(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  let splitArray = formetedNumber.split(".");
  if (splitArray.length > 1) {
    formetedNumber = splitArray[0];
  }
  return formetedNumber;
};

export const prettierDate = (date) => {
  let newDate = new Date(date);
  let month = newDate.getMonth() + 1;
  return newDate.getDate() + "/" + month + "/" + newDate.getFullYear();
};

export const getImageSrc = (data, imagePlaceholder = null) => {
  if (imagePlaceholder) {
    img = imagePlaceholder;
  }
  if (data !== null) {
    img = "data:image/png;base64," + data;
  }
  return img;
};
