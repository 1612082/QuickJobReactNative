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

export const prettierDateAgo = (date) => {
  let postDate = new Date(date);
  let today = new Date();
  const diffTime = Math.abs(today - postDate);
  const diffMinutes = Math.ceil(diffTime / (1000 * 60));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffMinutes < 60) return diffMinutes + " phút trước";
  else if (diffMinutes < 60 * 24)
    return Math.ceil(diffMinutes / 60) - 1 + " giờ trước";
  else if (diffDays <= 30) return diffDays + " ngày trước";
  else if (diffDays < 365)
    return Math.ceil(diffDays / 30.4375) - 1 + " tháng trước";
  else return Math.ceil(diffDays / 365.25) - 1 + " năm trước";
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
