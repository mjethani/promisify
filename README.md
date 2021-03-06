## Installation

```console
$ npm i node-style-promisify
node-style-promisify@0.1.1 node_modules/node-style-promisify
$ 
```

## Example

```javascript
import fs from 'fs';

import promisify from 'node-style-promisify';

const readFile = promisify(fs, fs.readFile);

readFile('file.txt', 'utf8').then(([ data ]) => {
  process.stdout.write(data);
}).catch(error => {
  console.error(error.toString());
});
```

## API

### promisify(thisArg, func)

 *  `thisArg` The value of `this` to be passed to `func` when it is called
 *  `func` The function to call via the wrapper

Returns a wrapper around `func` that returns a `Promise` object when called.

