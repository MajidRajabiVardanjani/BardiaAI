# BardiaAI

## Install

```bash
npm i bardiaai --save
```

# [GPT](#GPT)

# [Dalle 3](#Dalle-3)

# [Text To Image](#Text-To-Image)

# GPT

[https://hapi.majidapi.ir/bardia/gpt/4?q=Hello](https://hapi.majidapi.ir/bardia/gpt/4?q=Hello)

##

[https://hapi.majidapi.ir/bardia/gpt/3-5/turbo?q=Hello](https://hapi.majidapi.ir/bardia/3-5/turbo?q=Hello)

##

[https://hapi.majidapi.ir/bardia/gpt/3?q=Hello](https://hapi.majidapi.ir/bardia/gpt/3?q=Hello)

```javascript
const {gpt} = require("bardiaai")

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

# Dalle 3

[https://hapi.majidapi.ir/bardia/dalle3?p=Flower](https://hapi.majidapi.ir/bardia/dalle3?p=Flower)

##

```javascript
const {dalle3} = require("bardiaai")

dalle3({
    prompt: "beautiful flower"
})
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    });
```

# Text To Image

[https://hapi.majidapi.ir/bardia/tti?model=default&p=Flower](https://hapi.majidapi.ir/bardia/tti?model=default&p=Flower)

##

```javascript
const {textToImage} = require("bardiaai")

textToImage({
    model: "default", // default, stablediffusion, dalle, pixart, prodia
    prompt: "beautiful flower"
})
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    });
```

## Donate

### THKC4vmac9u3SB2CevKcmrUhKmdEby8V84 (USDT trc20)