var express = require('express');
var router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
    
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Shecodes",
    user: "Simba",
    added: new Date()
  },
  {
    text: "Hello Klaire",
    user: "Oblack",
    added: new Date()
  }
];

JSON.stringify(messages)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages:messages });
});

/* GET new . */
router.get('/new', function(req, res, next) {
  res.render('form', {title: "Mini Messageboard", messages:messages});
});

router.post('/new', function(req, res, next) {
const data = req.body
console.log(data)
messages.push(data);
console.log(messages)
res.redirect('/')
});

module.exports = router;
