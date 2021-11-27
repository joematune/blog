---
title: "About Me in 60 Seconds"
excerpt: "Originally from Ohio (`us-east-2`), I'm currently living and working in sunny Cape Town South Africa (`af-south-1`). There's quite a story behind that move, but I'll save it for another day. I love working in software and sharing that passion with others."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2021-11-27T12:11:00.322Z"
author:
  name: Joe Matune
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.

```json
{
  "joe": "matune",
  "age": 33
}
```

Ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

```typescript
type Pokemon = {
  name: string;
  caught: Date;
  lastLevelUp?: Date;
};

const charzard: Pokemon = {
  name: "Charzard",
  caught: new Date(),
};

// This is the 🔥
type KeysOfType<T extends {}, S> = NonNullable<
  {
    [P in keyof T]: T[P] extends S ? P : never;
  }[keyof T]
>;

const getDate = <T extends Pokemon, K extends KeysOfType<T, Date>>(
  pokemon: T,
  dateKey: K
) => {
  const date: Date = pokemon[dateKey];
  return date.toISOString();
};

getDate(charzard, "caught");
```

## Lorem Ipsum

Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.
