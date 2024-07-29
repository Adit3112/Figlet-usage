const figlet = require("figlet");

figlet("Figlet is working!", function (err, data) {
    if (err) {
        console.log("Hey! Aditi this side.");
        console.dir(err);
        return;
    }
    console.log(data);
});