const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qm7rpk',
  e2e: {
    setupNodeEvents(on, config) {
    },
    
    baseUrl: "http://lojaebac.ebaconline.art.br/",

    chromeWebSecurity: false
  },
});