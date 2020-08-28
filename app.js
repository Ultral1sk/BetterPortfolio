require('dotenv').config()
const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const path        = require('path')
const cors        = require('cors');
const PORT        = process.env.PORT || 3001
const nodemailer  = require('nodemailer');



// Body parser outter middleware of Express
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());

if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('frontend/build'));

  app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });
}


app.post('/contact', (req, res) => {
  const output = `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li> 
    <li>Email: ${req.body.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
  });
  
  var mailOptions = {
      name : req.body.name,
      from : req.body.email,
      to :   `zealotservice@gmail.com`,
      subject : 'nodemailer test',
      text : req.body.message,
      html : output
  }
  
  transporter.sendMail(mailOptions, function ( err, res ) {
    if( err ) {
      return err
  
    } else{
      return
    }
  })
  res.status(200).json({message : "email sent"});
})


app.listen(PORT, () => console.log(`Portfolio APP server is listening the ${PORT} port`));
