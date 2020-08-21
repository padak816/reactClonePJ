import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios'; 

function Infocheck(a){
	
	const history = useHistory();
	
	const {session, info} = a.session;
	
	
	const [inputs,setInputs] = useState({
		
		mb_id : session,
		mb_password : '',
		
	});	
	
	const onChange = (e) => {
		
		const {name, value} = e.target;
		
		setInputs({
			...inputs,
			[name] : value
		});
		
	}
	
	// 회원 비밀번호 재확인
	
	const onSubmit = () => {
		
		axios.post('http://52.78.51.214:3001/login',{
			...inputs
		}).then(function(response){
			
			
			
			if(response.data){
				
				
				history.push({
				 
				 pathname: '/register_form',
				 name : info
			 
				});
				
				
			}else{
				alert('비밀번호가 틀립니다.');
			}
			
		}).catch(function(error){
			
			console.log(error);
			
		});
		
		
	}
	
	
	
	return (
	
		<div id="container-nonebg" style={{background:"#ffffff"}}>	
			<div className="container" style={{padding:"70px 0 120px 0"}}>
	
			<div id="mb_confirm" className="mbskin">
				<h1>회원 비밀번호 확인</h1>

				<p>
					<strong>비밀번호를 한번 더 입력해주세요.</strong>
							회원님의 정보를 안전하게 보호하기 위해 비밀번호를 한번 더 확인합니다.
						</p>

				<form name="fmemberconfirm" >
				<input type="hidden" name="mb_id" value={session}/>
				

				<fieldset>
					회원아이디
					<span id="mb_confirm_id">{session}</span>

					<label htmlFor="confirm_mb_password">비밀번호<strong className="sound_only">필수</strong></label>
					<input type="password" name="mb_password" id="confirm_mb_password" required className="required frm_input" size="15" maxLength="20" onChange={onChange} />
					<input type="button" value="확인" className="btn_submit"  onClick={onSubmit} />
				</fieldset>

				</form>

				<div className="btn_confirm">
					<a href="http://52.78.51.214:3000/">메인으로 돌아가기</a>
				</div>

			</div>


			</div>

			</div>

		
	);
	
}

export default Infocheck;