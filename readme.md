[JSFiddle](https://jsfiddle.net/razoth/cdet9o7q/3/)

# Installation

```
npm install simple-loading-bar
```


# Usage

import the module depending on envirement. Exmpl.:
```javascript
require('simple-loading-bar')
```

afterwards it can be used by creating a new element and be manipulated:
```javascript
let loadingbar = document.createElement('simple-loading-bar')

loadingbar.end = 2000;
loadingbar.width = 400;
loadingbar.height = 20;
loadingbar.color = 'lightgreen';
loadingbar.backgroundColor = 'lightgray';
```

# License 

Copyright 2019, Protronic GmbH

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
