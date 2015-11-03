'use strict';

module.exports = function promisify(thisArg, func) {
  return function () {
    var args = Array.prototype.slice.call(arguments);

    return new Promise(function (resolve, reject) {
      func.apply(thisArg, args.concat(function (error) {
        var values = Array.prototype.slice.call(arguments, 1);

        if (error) {
          reject(error);
        } else {
          resolve(values);
        }
      }));
    });
  };
}

// vim: et ts=2 sw=2
