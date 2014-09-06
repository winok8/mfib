
module.exports = (function() {

  var actions = {};

  /*
  var actions = new Array();

  function add(name, type, func) {
    var d = {
      'name': name,
      'type': type
    };

    actions.push();
  };

  add('/getall', ['get','post'], function() {

  });
  */

  actions['/getall'] = function() {

      console.log('getall');
      return true;
  };

  actions['/get/(.*)'] = function() {
      console.log('get/1')

      return true;
  };

	return {
    actions : actions
  };

})();
