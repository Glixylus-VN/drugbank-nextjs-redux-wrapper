const withPlugins = require("next-compose-plugins");

const nextTranslate = require("next-translate");

const config = {};

module.exports = withPlugins([[nextTranslate]], config);

// module.exports = withPlugins([], config);

