# dirmap

```
/**
 * Accepts a dir path and returns an object mapping file names to their full
 * path. If dropExtension is true, the file extension is dropped from the
 * object keys. Does not recurse into directories.
 *
 * @param   {string}  dir
 * @param   {boolean} dropExtension
 * @returns {object}
 */
```

## Example

``` javascript
dirmap('.', true);
// { '.git': '/Users/danielstjules/dirmap/.git',
// '.gitignore': '/Users/danielstjules/dirmap/.gitignore',
// LICENSE: '/Users/danielstjules/dirmap/LICENSE',
// README: '/Users/danielstjules/dirmap/README.md',
// index: '/Users/danielstjules/dirmap/index.js',
// package: '/Users/danielstjules/dirmap/package.json' }
```
