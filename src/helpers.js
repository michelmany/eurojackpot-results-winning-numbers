//== Returns the time in am/pm format with suffix. ==//
export const getDateOnly = (fullDate) => fullDate.split(",")[0];

//== Returns the time in am/pm format with suffix. ==//
export const getTimeOnly = (fullDate) => {
  let time = fullDate.split(", ")[1];
  time = time.split(":")[0];
  const suffix = time > 12 ? "pm" : "am";

  return `${time % 12}${suffix}`;
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
