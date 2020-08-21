import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios'; 

function Login(param){
	
	const history = useHistory();
		
	const [inputs, setInputs] = useState({
		
		mb_id : '',
		mb_password : '',
		
	});
	
	const onChange =(e)=>{
		
		const {name , value} = e.target;
		
		
		setInputs({
		...inputs,
		
		[name] : value
		
		});
			
	}
	
	// 로그인 api 호출
	
	const onSubmit = () => {
		
		axios.post('http://52.78.51.214:3001/login',{
			...inputs
		}).then(function(response){
			
			
			
			if(response.data){
				param.props(response.data);
				localStorage.setItem('test',response.data.user.user_id);
				history.push('/');
				
			}else{
				alert('가입된 회원아이디가 아니거나 비밀번호가 틀립니다.\n비밀번호는 대소문자를 구분합니다.');
			}
			
		}).catch(function(error){
			
			console.log(error);
			
		});
				
		
	
	}
	
	
	return(
		<div>
			<div id="container-nonebg" style={{height:"164px", backgroundImage:"url(../img/sub-visual05.png)",backgroundRepeat : "no-repeat", backgroundPosition : "center"}}>	
				<div className="container" style={{padding:"0px 0 0px 0"}}>
				</div>
			</div>
			
		<div id="container-nonebg" style={{background:"#ffffff"}}>	
		
			<div className="container" style={{padding:"70px 0 120px 0"}}>


			<form name="flogin" >
			<input type="hidden" name="url" value=""/>
			<table width="367" align="center"  border="0" cellSpacing="0" cellPadding="0" style={{paddingBottom:"50px"}}>
			<thead></thead>
			<tbody>
			  <tr>
				<td><input type="text" name="mb_id" id="login_id" required style={{width:"350px" , height:"46px", paddingLeft:"15px" ,fontSize:"16px", border:"1px solid #d7d7d7"}} maxLength="20" placeholder="아이디" onChange={onChange} /></td>
			  </tr>
			  <tr>
				<td height="14"></td>
			  </tr>
			  <tr>
				<td><input type="password" name="mb_password" id="login_pw" required style={{width:"350px" ,height:"46px", paddingLeft:"15px", fontSize:"16px", border:"1px solid #d7d7d7"}} maxLength="20" placeholder="비밀번호" onChange={onChange} /></td>
			  </tr>
			  <tr>
				<td height="24"></td>
			  </tr>
			  <tr>
				<td><button type="button" onClick={onSubmit}><img src="../img/btn-login.png" alt=''/></button></td>
			  </tr>
			  <tr>
				<td><img src="../img/login-bottom-img.png" border="0" useMap="#Map_login-bottom" alt=''/></td>
			  </tr>
			
			</tbody>
			</table>
			<map name="Map_login-bottom">
			<area shape="rect" coords="0,18,179,51" href="password_lost.html" target="_blank" id="login_password_lost" alt=''/>
			<area shape="rect" coords="184,84,367,133" href="register.html" alt=''/>
			</map>
			</form>



			
			<div id="mb_login" className="mbskin">
			
					
					
				<div className="btn_confirm">
					<a href="../index.html">메인으로 돌아가기</a>
				</div>

			</div>
						
						
					</div>

			</div>
		
		</div>
	
	);
}


export default Login;