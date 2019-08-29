A simple loading bar as a webcomponent without externel dependencies (~3KB).

[JSFiddle](https://jsfiddle.net/razoth/cdet9o7q/3/) | 
[Preview](https://unpkg.com/simple-loading-bar@1.0.2/index.html)

<!--
```
<custom-element-demo>
  <template>
    <script src="main.js"></script>
    <simple-loading-bar end="2300" color="lightyellow" height="20" backgroundColor="lightgray"></simple-loading-bar>
    <script>
      s = document.querySelector('simple-loading-bar')
      setInterval(function(){
        if (s.addProgress(10) == 2300){
          s.reset()
        }
      }, 100)
    </script>
  </template>
</custom-element-demo>
```
-->

# Installation

```
npm install simple-loading-bar
```


# Usage

import the module depending on envirement. Exmpl.:
```javascript
require('simple-loading-bar')
```

It can be used by creating a new element and setting appropriate starting values (end is the most important one, describing 100%):
```javascript
let loadingbar = document.createElement('simple-loading-bar')

loadingbar.end = 2000;
loadingbar.width = 400;
loadingbar.height = 20;
loadingbar.color = 'lightgreen';
loadingbar.backgroundColor = 'lightgray';

document.body.append(loadingbar)
```
Start values should  be set before adding it to the DOM.

Finally you can add progress by calling:
```javascript
loadingbar.addProgress(100)
```

It automatically stops at 100%.


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
