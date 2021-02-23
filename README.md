# use-browser-storage

> React hook to use browser's storage. Currenlty supporting localStorage and sessionStorage.

[![NPM](https://img.shields.io/npm/v/use-browser-storage.svg)](https://www.npmjs.com/package/use-browser-storage) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-local-storage
```

## Usage

```tsx
import * as React from 'react'

import { useBrowserStorage } from 'use-browser-storage'

const Component = () => {
  const { getItem, setItem, removeItem } = useBrowserStorage({ forceUpdate: true });

  React.useEffect(() => {
    window.setTimeout(() => {
      setItem('welcome', 'Hi Dev, welcome!')
    }, 1000);
  }, [])

  return (
    <div>
      {getItem('welcome')}
    </div>
  )
}
```

## Options
| Option         | Type                                | Default Value  | Defination |
| :------------- |:----------------------------------- | :------------- | :--------- |
| type?          | `localStorage` or `sessionStorage`  | `localStorage` | Specify type of browser storage. |
| timestamp?     | boolean                             | false          | Store values with timestamp. |
| forceUpdate?   | boolean                             | false          | Update react component after calling setItem and removeItem |

Note: `?` denotes optional property
## License

MIT © [ravid7000](https://github.com/ravid7000)
