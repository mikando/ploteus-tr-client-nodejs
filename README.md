## NodeJS Client for Ploteus Turkey Integration Pool

##$ An example to check xml status from pool:

```javascript
client = new PloteusTRClient("USER_NAME", "PASSWORD");

function serviceResponseCallback(error, response, body) {
    ///.....
}
client.getXmlStatus("97DF71C4-9E37-40A7-A906-91FC4E2EA8B9", serviceResponseCallback);
```
