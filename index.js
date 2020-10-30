const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const sgMail = require("@sendgrid/mail");
const app = express();
app.use(bodyParser.json());

app.get("/api/sendEmail", async (req, res) => {
  res.send({ hi: "receive" });
});

sgMail.setApiKey(keys.sendGridKey);

app.post("/api/sendEmail", async (req, res) => {
  console.log(req.body);
  const { name, subject, email, message } = req.body;

  const msg = {
    to: "zizzhangjohn@gmail.com",
    from: `${keys.senderEmail}`,
    subject: `${subject}`,
    html: `<strong>From ${email}</strong><br><strong>${name}:</strong>
    <p>${message}</p>`,
  };
  await sgMail.send(msg);
  res.send({});
});


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }

const PORT = process.env.PORT || 8080;
app.listen(PORT);
