
const translatte = require("translatte");

function translatedText(data) {
    return translatte(data, { to: "en" })
      .then((res) => {
        return res.text;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  

  module.exports = {
    translatedText
};