var test = require('tape');
var Config = require('./config');

test('Config for test env', function (assert) {
  var env = 'test';  
  config = Config.for(env);

  assert.plan(2);

  assert.equal(config.base_url, 'localhost.com')
  assert.equal(config.client_id, 'a_client_id')
});

test('Config for test2 env', function (assert) {
  var env = 'test2';
  config = Config.for(env);

  assert.plan(2);

  assert.equal(config.base_url, 'not_local_host')
  assert.equal(config.client_id, 'another client id')
});
