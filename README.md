# BardiaAI

## Install

```bash
npm i bardiaai --save
```

# [GPT](#GPT)

# GPT

[https://hapi.majidapi.ir/bardia/gpt/4?q=Hello](https://hapi.majidapi.ir/bardia/gpt/4?q=Hello)

[https://hapi.majidapi.ir/bardia/gpt/3-5/turbo?q=Hello](https://hapi.majidapi.ir/bardia/3-5/turbo?q=Hello)

[https://hapi.majidapi.ir/bardia/gpt/3?q=Hello](https://hapi.majidapi.ir/bardia/gpt/3?q=Hello)

```javascript
const {gpt} = require("BardiaAI")

gpt({
    model: "GPT-4", // GPT-4, GPT-3.5-turbo, GPT-3
    prompt: "Hello Bardia"
})
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    });
```
