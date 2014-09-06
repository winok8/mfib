/**
 * todo: 需要考虑增加http util, 继承, ['get','post','delete'] 机制
 */
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

  add('getall', ['get','post'], function() {

  });
  */

  actions['getall'] = function(v) {

      return v.response.write('getall');
  };

  actions['get/(.*)'] = function(v) {
      return v.response.write('get');
  };

	return {
    actions : actions
  };

})();
