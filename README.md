# use-browser-storage

> React hook to use browser's storage. Currenlty supported localStoage and sessionStoage.

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

### Options
| Option         | Type                                | Default Value  |
| -------------- |:------------------------------------| ---------------|
| type?          | `localStorage` or `sessionStorage`  | `localStorage` |
| timestamp?     | boolean                             | false          |
| forceUpdate?   | boolean                             | false          |
## License

MIT © [ravid7000](https://github.com/ravid7000)
