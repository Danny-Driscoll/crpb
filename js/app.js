const express = require('express');
const app = express();
//const tracer = require('dd-trace').init();


app.get("/", async (_, res) => {
  console.log("[test] sample log for / route test");
  console.log("This is Danny's log, with some tags");
  res.status(200).json({"msg":"Hello world!"});
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Application is now ready, listening to: ${port} randomId: ${Math.random()}`));
