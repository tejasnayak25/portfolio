let express = require("express");
let app = express();
let path = require("path");

const PORT = process.env.PORT;

app.use(express.static(__dirname));

app.route("/")
.get((req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT || 3000);