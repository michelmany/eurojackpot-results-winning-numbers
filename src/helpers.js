//== Returns the time in am/pm format with suffix. ==//
export const getDateOnly = (fullDate) => fullDate.split(",")[0];

//== Returns the time in am/pm format with suffix. ==//
export const getTimeOnly = (fullDate) => {
  let time = fullDate.split(", ")[1];
  time = time.split(":")[0];
  const suffix = time > 12 ? "pm" : "am";

  return `${time % 12}${suffix}`;
};

//== Gets the full date from the date object ==//
export const getFullDate = (date) => {
  const yearMonths = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Abr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };
  const weekDays = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };

  const dateObj = new Date(`${date.month}/${date.day}/${date.year}`);
  const fullDate = `${weekDays[dateObj.getDay()]} ${date.day >= 1 && date.day <= 9 && "0"}${
    date.day
  } ${yearMonths[dateObj.getMonth()]} ${date.year}`;

  return fullDate;
};

//== Transforms numbers in Roman Numbers ==//
export const romanize = (num) => {
  const romanNumbers = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    11: "XI",
    12: "XII",
  };

  return romanNumbers[num];
};

//== Formats Currency Numbers ==//
export const formatCurrency = (number, currency = "EUR") =>
  (number / 100).toLocaleString("en", { style: "currency", currency });

//== Formats Number with suffix ==//
export const formatNumber = (number, suffix) => `${number.toLocaleString("en")}${suffix}`;

//== Gets Match values ==//
export const getMatch = (i) => {
  const match = [
    [0, 0],
    [5, 2],
    [5, 1],
    [5, 0],
    [4, 2],
    [4, 1],
    [4, 0],
    [3, 2],
    [2, 2],
    [3, 1],
    [3, 0],
    [1, 2],
    [2, 1],
  ];

  return match[i];
};
