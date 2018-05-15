module.exports = function(config) {
  config.set({
    testRunner: "karma",
    mutator: "javascript",
    transpilers: [],
    reporter: ["html", "clear-text", "progress"],
    testFramework: "jasmine",
    coverageAnalysis: "off",
    mutate: ["js/app.js"],
    karmaConfigFile: "karma.conf.js"
  });
};
