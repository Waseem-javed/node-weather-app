const axios = require("axios");

exports.getHomePage = (req, res, next) => {
  res.render("home", { title: "Home",data:'',msg:'' });
};

exports.PostHomePage = (req, res, next) => {
  if (!req.body.city == "") {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=854aea542bc8e6b0ca73436e10e1434a`
      )
      .then((response) => {
        let data = response.data;
        res.render("home",{data:data ,title:"Home"})
      })
      .catch((error) => {
        res.render("home", {data:'',msg:error.message,title:"Home"});
      });
  } else {
    // console.log("Enter city Name..");
    res.render("home", { msg: 'Enter city Name..',data:'', title: "Home" });
  }
};
