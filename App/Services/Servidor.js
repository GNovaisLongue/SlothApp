const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
// const bodyParser = require("body-parser");// npm i body-parser
// const cookieParser = require("cookie-parser");// npm i cookie-parser
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();

app.use(cors());

const PORT = 19007;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:19007"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "sloth_app", //nome da base de dados
});

//-----------------------------------------------------
//ok - INSERT NEW USERNAME AND PASSWORD
app.post("/register", (req, res) => {
  const username = req.body.username;
  const user_email = req.body.user_email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "INSERT INTO users (username, user_email, password) VALUES (?,?,?)",
      [username, user_email, hash],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        } else {
          res.send({ result, message: "REGISTERED" });
        }
      }
    );
  });
});

//ok - VERIFY USERNAME AND PASSWORD
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE BINARY username = ?",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
          if (response) {
            res.send(result);
          } else {
            res.send({ err: err, message: "Usuario/Senha inválido!" });
          }
        });
      } else {
        res.send({ err: err, message: "User does not exist" });
      }
    }
  );
});

//ok - GET CLASSES LIST
app.get("/activeClasses", (req, res) => {
  db.query("select * from ActiveClasses", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//ok - GET ALL ITEMS
app.get("/registeredItems", (req, res) => {
  db.query("select * from RegisteredItems", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//ok - INSERT ITEM INTO INV //NOT BEING USED ATM
app.post("/userInvInsert", (req, res) => {
  const user_id = req.body.user_id;
  const image_name = req.body.image_name;
  const item_name = req.body.item_name;
  const item_type = req.body.item_type;
  const registered_items_id = req.body.registered_items_id;

  db.query(
    "select * from useritems where user_id=? and item_id=?",
    [user_id, registered_items_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length === 0) {
          console.log("Not here yet. New item can be added");
          db.query(
            "insert into useritems (user_id, item_id, item_name, enable, item_type, image_name) values (?, ?, ?, ?, ?, ?)",
            [
              user_id,
              registered_items_id,
              item_name,
              "unequipped",
              item_type,
              image_name,
            ],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                return res.send({ message: "Item Inserted" });
              }
            }
          );
        } else if (result.length > 0) {
          return res.send({ message: "Item already in there" });
        }
      }
    }
  );
});

//ok - check if item can be added
app.post("/checkUserInv", (req, res) => {
  const user_id = req.body.user_id;
  const registered_items_id = req.body.registered_items_id;

  db.query(
    "select * from useritems where user_id=? and item_id=?",
    [user_id, registered_items_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length === 0) {
          console.log("Not here yet. New item can be added");
          return res.send({ result });
        } else if (result.length > 0) {
          return res.send({ result, message: "You already own this item!" });
        }
      }
    }
  );
});

//ok - COMPARE PRICE AND AMOUNT OF MONEY, INSERT ITEM AND UPDATE MONEY
app.post("/transaction", (req, res) => {
  const user_id = req.body.user_id;
  const image_name = req.body.image_name;
  const item_name = req.body.item_name;
  const item_type = req.body.item_type;
  const registered_items_id = req.body.registered_items_id;

  db.query(
    "select uc.user_money, ri.item_name, ri.registered_items_id, ri.item_price from usercurrency uc, registereditems ri where uc.user_id=? and ri.registered_items_id=? and  uc.user_money >= ri.item_price",
    [user_id, registered_items_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length === 0) {
          console.log("User doesn't have enough money");
          return res.send({ message: "You don't have enough money for that!" });
        } else if (result.length > 0) {
          db.query(
            "insert into useritems (user_id, item_id, item_name, enable, item_type, image_name) values (?, ?, ?, ?, ?, ?)",
            [
              user_id,
              registered_items_id,
              item_name,
              "unequipped",
              item_type,
              image_name,
            ],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                db.query(
                  "update usercurrency uc, registereditems ri set uc.user_money = uc.user_money - ri.item_price where uc.user_id=? and ri.registered_items_id=?",
                  [user_id, registered_items_id],
                  (err, result) => {
                    if (err) {
                      console.log(err);
                    } else {
                      return res.send({
                        message: "Item Bought. Check your inventory!",
                      });
                    }
                  }
                );
              }
            }
          );
        }
      }
    }
  );
});

//ok - GET USER INV
app.post("/userItems", (req, res) => {
  const user_id = req.body.user_id;
  db.query(
    "select * from UserItems where user_id=?",
    [user_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//ok - GET USER XP/MINIGAME POINTS
app.post("/membersScore", (req, res) => {
  const user_id = req.body.user_id;

  db.query(
    "select * from MembersScore where user_id=?",
    [user_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length === 0) {
          console.log("This user doesn't have a Member Score. Let's make one");
          db.query(
            "insert into membersScore (user_id, user_xp, user_lvl, user_xp_time, score_points, rep_time) values (?, ?, ?, ?, ?, ?)",
            [user_id, 50, 1, 0, 0, 0, 0],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                console.log("Account created!");
                db.query(
                  "select * from MembersScore where user_id=?",
                  [user_id],
                  (err, result) => {
                    if (err) {
                      console.log(err);
                    } else {
                      return res.send(result);
                    }
                  }
                );
              }
            }
          );
        } else if (result.length > 0) {
          return res.send(result);
        }
      }
    }
  );
});

//ok - GET USER MONEY
app.post("/userCurrency", (req, res) => {
  const user_id = req.body.user_id;
  console.log(req.body);
  db.query(
    "select * from usercurrency where user_id=?",
    [user_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length === 0) {
          console.log(
            "This user doesn't have a bank account yet. Let's make one"
          );
          db.query(
            "insert into usercurrency (user_id, user_money, last_purchase_ts, user_classes, user_class_reward, user_hosted, user_lotto) values (?, ?, ?, ?, ?, ?, ?)",
            [user_id, 1000, null, 0, 0, 0, null],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                console.log("Bank Account created!");
                db.query(
                  "select * from usercurrency where user_id=?",
                  [user_id],
                  (err, result) => {
                    if (err) {
                      console.log(err);
                    } else {
                      return res.send(result);
                    }
                  }
                );
              }
            }
          );
        } else if (result.length > 0) {
          return res.send(result);
        }
      }
    }
  );
});

//node Servidor.js
app.listen(process.env.PORT || PORT, () => {
  console.log("Connected on port ", PORT);
});
