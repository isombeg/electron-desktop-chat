const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1105895",
  key: "9a6d9cb0b5f6bc6cf060",
  secret: "b244dfb40d495d0fbe0c",
  cluster: "us2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
