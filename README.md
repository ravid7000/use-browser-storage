# use-local-storage

> Use local and session storage in react component

[![NPM](https://img.shields.io/npm/v/use-local-storage.svg)](https://www.npmjs.com/package/use-local-storage) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-local-storage
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-local-storage'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [ravid7000](https://github.com/ravid7000)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
