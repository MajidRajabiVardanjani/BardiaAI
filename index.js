const axios = require("axios");
const base = "hapi.majidapi.ir/bardia"
module.exports = {
    gpt: (model = "GPT-4", prompt = "") => {
        let v = "4";
        switch (model) {
            case "GPT-4":
                v = "4";
                break;
            case "GPT-3":
                v = "3";
                break;
            case "GPT-3.5-turbo":
                v = "3-5/turbo";
                break;
            default:
                v = "4";
        }
        return new Promise((resolve, reject) => {
            axios.get(`${base}/gpt/${v}?q=${prompt}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    reject("An error has occurred");
                });
        })

    }
}