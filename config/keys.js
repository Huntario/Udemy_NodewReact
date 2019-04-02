// keys.js figure out what set of credts to return
if (process.env.NODE_ENV === 'production'){
  // return production keys
  module.exports = require('./prod');
} else {
  // return dev keys	
  module.exports = require('./dev');
}
