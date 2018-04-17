const path = require("path");

module.exports = {
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto"
        }
      ]
    }
  },
  theme: {
    fontFamily: {
      base: '"Roboto", sans-serif'
    }
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/wrapper/ThemeWrapper")
  },
  skipComponentsWithoutExample: true
};
