const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sessionParser = require('express-session');
const port = process.env.PORT || 3001;
const dateFormat = require('dateformat');
//const route = require('./routes/index');

process.once("SIGHUP", function () {
  process.exit();
})


//http://52.78.51.214:3000/

const mysql = require('mysql');
const dbconfig   = require('./db/mysql_config.js');
const dbconn = mysql.createConnection(dbconfig); //< DB Connection~!!

let test = '';
let cookieTemp = '';


dbconn.connect();
app.use(sessionParser({
	secret: 'secret123',  //쿠키에 저장할 connect.sid값을 암호화할 키값 입력
	resave: true,   //세션을 언제나 저장할 지 정하는 값 false를 권장하지만 필요에 따라 true로 설정
	saveUninitialized: true,   //세션이 저장되기전에 uninitialized 상태로 미리 만들어 저장.
	//cookie: { maxAge: 600000 }
	cookie: { maxAge: 60000  }
	

}));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());


 //app.set('views', './views');
 app.set('views', './public/bbs');
 app.set('view engine', 'ejs');

let session='';


// 로그인 체크 
app.get('/logincheck', (req, res)=> {
	
	//session = req.session;
	
	if(!session.user){
		console.log('user 세선 없음');
		console.log(session);
		//console.log(req.session);
		res.json({status : true , data : session});
		
		
	}else{
		console.log('user 세선 있음');
		console.log(session);
		//console.log(req.session);
		res.json({status : true , data : session});
	}
	
	
});

//로그인

app.post('/login', (req, res)=>{
	
	session = req.session;
	
	//console.log(req.param("mb_id"));
	test = req.body;
	
	console.log(session);
	
	 //let timetemp=dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
	
	let sql = "SELECT id,user_id,password, name, nickname, email, address FROM customer WHERE user_id = ? LIMIT 1";
	
	let params = [test.mb_id, test.mb_password];
	
	dbconn.query(sql,params,function(err,rows,fields){
		if(err){
			console.log(err);
			
		}else{
			
			if(rows.length > 0){
				
				
				if(test.mb_password === rows[0].password){
				
				
					req.session.user ={
						
						id : rows[0].id,
						user_id : rows[0].user_id,
						name : rows[0].name,
						nickname : rows[0].nickname,
						email : rows[0].email,
						address : rows[0].address
						
						
					};
					
					session = req.session;
					
				
				
					console.log('login success');
					console.log(session);
					
					res.send(session);
					

				
				}else{
					console.log('login fail');
					res.send(false);

				}
				
			}else{
				console.log('login fail');
				res.send(false);

			}
			
			
			
		}
	});
	
	
	
	

	
});

//로그아웃
app.get('/logout', (req, res)=>{
	console.log('삭제전');
	console.log(req.session);
	
	req.session.destroy(function(){
		req.session;
		session = '';
	});
	console.log('삭제후');
	console.log(req.session);
	

	res.send(false);
	
});

//index ejs -> session data
app.get('/', (req, res)=>{
	session = req.session;
	console.log('session,,,');
	console.log(session);
	
	res.render("index",{
					session : session
				});

});


//회원가입

app.post('/register_form_insert', (req, res)=>{
	
	session = req.session;
	

	test = req.body;
	
	 
	let timetemp = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
	
	 let sql = "INSERT INTO customer(user_id, PASSWORD, NAME, nickname, email, address, sms_check, info_check, MAKETIME, email_check, status) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
	 let params = [test.mb_id, test.mb_password, test.mb_name, test.mb_nick, test.mb_email ,test.mb_zip + test.mb_addr1 + test.mb_addr2 ,'Y','Y', timetemp ,'Y' ,'Y'];
	
	dbconn.query(sql,params,function(err,rows,fields){
		if(err){
			console.log(err);
			
		}else{

			console.log(rows.insertId);
			
			req.session.user ={
				
				id : rows.insertId,
				user_id : test.mb_id,
				name : test.mb_name,
				nickname : test.mb_nick,
				email : test.mb_email,
				address : test.mb_zip + test.mb_addr1 + test.mb_addr2
				
				
			};
			
			session = req.session;
			
		}
	});
	console.log(req.body);
	res.json({status : true});

	
	
	
});

//회원정보수정

app.post('/register_form_update', (req, res)=>{
	
	session = req.session;
	
	test = req.body;

	let timetemp = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
	
	 let sql = "UPDATE customer SET PASSWORD = ? ,NAME =? , nickname = ? ,email = ?, address = ? WHERE id = ? ";
	 let params = [test.mb_password, test.mb_name, test.mb_nick, test.mb_email ,test.mb_zip + test.mb_addr1 + test.mb_addr2 , test.idx];
	
	
	
	dbconn.query(sql,params,function(err,rows,fields){
		if(err){
			console.log(err);
			
		}else{
			req.session.user ={
				
				id : test.idx,
				user_id : test.mb_id,
				name : test.mb_name,
				nickname : test.mb_nick,
				email : test.mb_email,
				address : test.mb_zip + test.mb_addr1 + test.mb_addr2
				
				
			};
			
			session = req.session;
		}
	});
	console.log(test);
	res.json({status : true});

	
	
	
});


//게시판 조회
app.get('/getByBoardlist/:userid', (req, res)=>{
	
	
	test = req.body;
	
	
	let sql = "SELECT id,cus_id,phone,title,memo,maketime,count FROM board where id = ?";
	
	let params = [req.params.userid];
	
	
	
	if(req.params.userid === '0'){
		sql = "SELECT id,cus_id,name,phone,title,memo,maketime,count FROM board where status='Y' order by id desc ";
	}
	
	dbconn.query(sql,params,function(err,rows,fields){
		if(err){
			console.log(err);
			
		}else{
			
			if(rows.length > 0){
				res.send(rows);
				
			}else{
				
				res.send(false);
				
			}
			
			
			
		}
	});
	
});

//게시판 추가 및 수정 및 삭제

app.post('/upsertBoard', (req, res)=>{
	
	test = req.body;
	let sql = "INSERT INTO board(cus_id, name , phone, boardtype, title , memo , MAKETIME , STATUS , FILE1, FILE2, link1, link2,count)  VALUES (103,?,'010','',?,?,now(),'Y','','','','',0)";
	let params = [test.wr_name, test.wr_title, test.wr_content];
	
	// update 
	if(test.id){
		sql = 'UPDATE board SET name = ?, title = ? , memo = ? WHERE id = ?';
	
		params.push(test.id);
		
	}
	 
	
	
	dbconn.query(sql,params,function(err,rows,fields){
		if(err){
			console.log(err);
			
		}else{
			
			res.json({status : true, data : params});
			
		}
	});
	
	

	
	
	
}); 

//게시판 삭제

app.put('/deleteBoard', (req, res)=>{
	
	test = req.body;
	let sql = "UPDATE board SET status = 'D' WHERE id = ? ";
	let params = [test.id];
	
	
	dbconn.query(sql,params,function(err,rows,fields){
		if(err){
			console.log(err);
			
		}else{
			console.log('삭제완료');
		}
	});
	
	res.json({status : true, data : sql});

	
	
	
}); 

// 조회수 update

app.put('/searchcount', (req, res)=>{
	
	test = req.body;
	let count = test.count + 1
	let sql = "UPDATE board SET count = ? WHERE id = ? ";
	let params = [count ,test.id];
	
	
	dbconn.query(sql,params,function(err,rows,fields){
		if(err){
			console.log(err);
			
		}else{
			
		}
	});
	
	res.json({status : true, data : true});

	
	
	
}); 


app.post('/deleteBoard', (req, res)=>{
	
	test = req.body;

	 let sql = "UPDATE customer SET PASSWORD = ? ,NAME =? , nickname = ? ,email = ?, address = ? WHERE id = ? ";
	 let params = [test.mb_password, test.mb_name, test.mb_nick, test.mb_email ,test.mb_zip + test.mb_addr1 + test.mb_addr2 , test.idx];
	
	
	
	dbconn.query(sql,params,function(err,rows,fields){
		if(err){
			console.log(err);
			
		}else{
			
		}
	});
	
	res.json({status : true});

	
	
	
}); 



// ID 중복검사
app.get('/id_check', (req, res)=> {
	
	//let id =req.query;
	console.log(req.query.user_id);
	let sql = "SELECT COUNT('a') as count FROM customer WHERE  user_id ='"+ req.query.user_id + "'";
	
	
	
	dbconn.query(sql,function(err,rows,fields){
		if(err){
			console.log(err);	
			
		}else{
			
			res.json({status : true , querycount : rows[0].count});
			
			
		}
	});
	
	
	
});




app.listen(port, ()=>{
	console.log(`express is running on ${port}`);
}) 