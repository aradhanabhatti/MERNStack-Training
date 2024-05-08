var express = require ('express')
const mongoose=require('mongoose')
const user=require('./user')

var app = express();
var cookieParser = require('cookie-parser')
var session = require('express-session')
app.set('view engine' , 'ejs')

mongoose.set('strictQuery' , true)
mongoose.connect('mongodb://localhost:27017/mongodb',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const oneDay = 1000*60*60*24;
app.use(session({
    secret: "thisismysecretekeysdf3456se",
    saveUninitialized:true,
    cookie:{maxAge:oneDay},
    resave:false
}))
app.set('view engine' , 'ejs')
app.get('/' , async function  (req, res)  {
    const session = req.session;
    if(session.loguser)
    {
        res.render('home' , {uname: session.loguser, st :true})
    }
    else{
        res.render('home' , {uname:'' , st:false})
    }
})

app.get('/insert' , async function  (req, res)  {
    const session=req.session;
    if(req.query.submit){
        const un=req.query.un;
        const p=req.query.p
        user.findOne({uname:un}).then(result=>
            {
                if(result)
                {
                    res.render('insert', {msg: un + ' Already Exists ', uname:session.loguser})
                }
                else{
                    const newUser = new user({uname:un , password:p});
                    return newUser.save();
                }
            }).then(result=>
                {
                    res.render('insert' , {msg: un + ' Saved succesfully with password ' + p, uname:session.loguser })
                })
                .catch(err=>{
                    res.render('error in your code' +err)
                })

    }
    else
    {
        res.render('insert' , {msg:'', uname: session.loguser})
    }
})

app.get('/login',function(req,res){
    if(req.query.login){
            const un=req.query.un;
            const p=req.query.p
            user.findOne({uname:un, password:p})
            .then(result=>{
                if(result){
                    const session=req.session;
                    session.loguser=un;
                    res.redirect('/')
                }
                else{
                    res.render('login',{msg: 'Invalid user and password'})
                }
            })
            .catch(err=>{
                res.render('error in code',err);
            })
    }
    else{
        res.render('login',{msg:''})
    }
})
.listen(5050)