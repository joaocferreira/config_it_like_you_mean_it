var Config = {
  for: function(env) {
    return require(`./config/${env}.json`);
  }
}

module.exports = Config;
