import React from 'react';
import {useLocation} from 'react-router-dom';

const Register_result = (data) => {
	
	const location = useLocation();
	
	return(
	
		<div id="reg_result" className="mbskin" style={{textAlign:"center" ,fontSize:"14px"}}>

			<p style={{padding:"0 0 20px 0", fontSize:"20px"}}>
				<strong>{location.state.name}</strong>님의 회원가입을 진심으로 축하합니다.<br/>
			</p>

			
			<p style={{padding:"0 0 20px 0"}}>
				회원님의 비밀번호는 아무도 알 수 없는 암호화 코드로 저장되므로 안심하셔도 좋습니다.<br/>
				아이디, 비밀번호 분실시에는 회원가입시 입력하신 이메일 주소를 이용하여 찾을 수 있습니다.
			</p>

			<p>
				회원 탈퇴는 언제든지 가능하며 일정기간이 지난 후, 회원님의 정보는 삭제하고 있습니다.<br/>
				감사합니다.
			</p>

			
			<div className="btn_confirm">
				<a href="http://52.78.51.214:3000/" className="btn02">메인으로</a>
			</div>

		</div>
	);
}

export default Register_result;