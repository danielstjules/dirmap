var path = require('path');
var fs   = require('fs');

/**
 * Accepts a dir path and returns an object mapping file names to their full
 * path. If dropExtension is true, the file extension is dropped from the
 * object keys. Does not recurse into directories.
 *
 * @param   {string}  dir
 * @param   {boolean} dropExtension
 * @returns {object}
 */
module.exports = function(dir, dropExtension) {
  return fs.readdirSync(dir).reduce(function(res, file) {
    var key = (dropExtension) ? file.replace(/(.{1})\..*/, '$1') : file;
    res[key] = path.resolve(dir, file);
    return res;
  }, {});
};
