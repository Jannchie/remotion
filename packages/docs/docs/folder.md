---
title: <Folder />
id: folder
---

_Available from v3.0.1_

By wrapping a [`<Composition />`](/docs/composition) inside a `<Folder />`, you can visually categorize it in your sidebar, should you have many compositions.

## Example

```tsx twoslash
import React from "react";
const Component: React.FC = () => null;
// ---cut---
import { Composition, Folder } from "remotion";

export const Video = () => {
  return (
    <>
      <Folder name="Visuals">
        <Composition
          id="CompInFolder"
          durationInFrames={100}
          fps={30}
          width={1080}
          height={1080}
          component={Component}
        />
      </Folder>
      <Composition
        id="CompOutsideFolder"
        durationInFrames={100}
        fps={30}
        width={1080}
        height={1080}
        component={Component}
      />
    </>
  );
};
```

will create a tree structure in the sidebar that looks like this:

<img src="/img/folders.png"/>

## Folder behavior

- Folder names can only contain `a-z`, `A-Z`, `0-9` and `-`.
- Folders can be nested.
- They only visually change the sidebar in the preview.

## See also

- [`<Composition />`](/docs/composition)
