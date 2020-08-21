import React,{useState} from 'react';
import 'components/css/style.css';
import {useHistory} from 'react-router-dom';
import axios from 'axios'; 

const Register_form = (param) =>{
	
	const history = useHistory();
	
	const {info} = param.session;
		
	const [inputs, setInputs] = useState({
		 idx : info.id || '',
		 mb_id : info.user_id || '',
		 mb_password : '',
		 mb_name : info.name ||'',
		 mb_nick : info.nickname || '', 
		 mb_email : info.email || '',
		 mb_zip : info.address || '',
		 mb_addr1 : '', 
		 mb_addr2 : '',  
	});
	
	 
	const {mb_id, mb_name, mb_nick, mb_email, mb_zip} = inputs;
	
	const onChange = (e) =>{
		 
		 const {name,value} = e.target;
		 
		 setInputs({
			 ...inputs,
			 [name] : value,
			 
		 });
		 
 
 
	 }
	 
	 
	 //회원가입 api 호출
	 
	const onSubmit = () => {
		 
		if( inputs.mb_id === '' || inputs.mb_password === '' || inputs.mb_name === '' || inputs.mb_nick === '' || inputs.mb_email === '' || inputs.mb_zip === '' || inputs.mb_addr1 === '' || inputs.mb_addr2 === ''){
			
		}
		else{
			
			
			if(inputs.idx == ''){
				
				axios.post('http://52.78.51.214:3001/register_form_insert', {
   		 
					...inputs
				   
				})
				 .then(function (response){ 
					
					let abc = JSON.parse(response.config.data);
					localStorage.setItem('test',abc.mb_id);
					let params = { user : {
						
						id : abc.idx,
						user_id : abc.mb_id ,
						name : abc.mb_name ,
						nickname : abc.mb_nick ,
						email : abc.mb_email
						
					}};
					param.props(params);
					
					
				
					 history.push({
						 
						 pathname: '/register_result',
						 state : { 
							name : abc.mb_name
						 },
						 name : abc.mb_name + '111'
					 
					 });
					
				}) 
				  .catch(function (error) {
					  console.log(error);
				});
				
			
			
			}else{
				
				
				axios.post('http://52.78.51.214:3001/register_form_update', {
		 
				...inputs
			   
				})
				 .then(function (response){ 
					
					let abc = JSON.parse(response.config.data);
					console.log(abc);
					localStorage.setItem('test',abc.mb_id);
					let params = { user : {
						
						id : abc.idx,
						user_id : abc.mb_id ,
						name : abc.mb_name ,
						nickname : abc.mb_nick ,
						email : abc.mb_email
						
					}};
					param.props(params);
					
					alert('회원 정보가 수정 되었습니다.');
					history.push('/');
					
				}) 
				  .catch(function (error) {
					  console.log(error);
				});
			}
			
			
			
			
		}

	 }
	 
	
	
	return(
	
	
	<div>
	<div id="container-nonebg" style={{height:"164px", backgroundImage:"url(../img/sub-visual05.png)",backgroundRepeat : "no-repeat", backgroundPosition : "center"}}>	
		<div className="container" style={{padding:"0px 0 0px 0"}}>

		</div>
	</div>
		<div id="container-nonebg" style={{background:"#ffffff"}}>
		<div className="container" style={{padding:"70px 0 120px 0"}}>
		<div className="mbskin">

		
		
		<form id="fregisterform" name="fregisterform"  autoComplete="off">
		<input type="hidden" name="w" value="" />
		<input type="hidden" name="agree" value="1" />
		<input type="hidden" name="agree2" value="1" />
		<input type="hidden" name="cert_type" value="" />
		<input type="hidden" name="cert_no" value="" />
		<input type="hidden" name="mb_sex" value="" />    
		<div className="tbl_frm01 tbl_wrap">
			<table>
			<caption>사이트 이용정보 입력</caption>
			<tbody>
			<tr>
				<th scope="row"><label htmlFor="reg_mb_id">아이디<strong className="sound_only">필수</strong></label></th>
				<td>
					<span className="frm_info">영문자, 숫자, _ 만 입력 가능. 최소 3자이상 입력하세요.</span>
					<input type="text" name="mb_id"  id="reg_mb_id" required="" className="frm_input required " minLength="3" maxLength="20" onChange = {onChange} value = {mb_id}  />
					<span id="msg_mb_id"></span>
				</td>
			</tr>
			<tr>
				<th scope="row"><label htmlFor="reg_mb_password">비밀번호<strong className="sound_only">필수</strong></label></th>
				<td><input type="password" name="mb_password" id="reg_mb_password" required="" className="frm_input required" minLength="3" maxLength="20" onChange = {onChange} /></td>
			</tr>
			<tr>
				<th scope="row"><label htmlFor="reg_mb_password_re">비밀번호 확인<strong className="sound_only">필수</strong></label></th>
				<td><input type="password" name="mb_password_re" id="reg_mb_password_re" required="" className="frm_input required" minLength="3" maxLength="20" /></td>
			</tr>
			</tbody>
			</table>
		</div>

		<div className="tbl_frm01 tbl_wrap">
			<table>
			<caption>개인정보 입력</caption>
			<tbody>
			<tr>
				<th scope="row"><label htmlFor="reg_mb_name">이름<strong className="sound_only" >필수</strong></label></th>
				<td>
					<input type="text" id="reg_mb_name" name="mb_name" value = {mb_name} required="" className="frm_input required " size="10" onChange = {onChange}  />
				 </td>
			</tr>
			<tr>
				<th scope="row"><label htmlFor="reg_mb_nick">닉네임<strong className="sound_only">필수</strong></label></th>
				<td>
					<span className="frm_info">
						공백없이 한글,영문,숫자만 입력 가능 (한글2자, 영문4자 이상)<br />
						닉네임을 바꾸시면 앞으로 60일 이내에는 변경 할 수 없습니다.
					</span>
					<input type="hidden" name="mb_nick_default" value="" />
					<input type="text" name="mb_nick" value = {mb_nick} id="reg_mb_nick" required="" className="frm_input required nospace" size="10" maxLength="20" onChange = {onChange} />
					<span id="msg_mb_nick"></span>
				</td>
			</tr>
			
			<tr>
				<th scope="row"><label htmlFor="reg_mb_email">E-mail<strong className="sound_only">필수</strong></label></th>
				<td>
					<input type="hidden" name="old_email" value=""/>
					<input type="text" name="mb_email" value={mb_email} id="reg_mb_email" required="" className="frm_input email required" size="70" maxLength="100" onChange = {onChange} />
				</td>
			</tr>

			
			
			<tr>
				<th scope="row"><label htmlFor="reg_mb_hp">휴대폰번호</label></th>
				<td>
				<input type="text" name="mb_hp" defaultValue="" id="reg_mb_hp" className="frm_input " maxLength="20" onChange = {onChange} />
				</td>
			</tr>
			
			<tr>
				<th scope="row">
					주소
								</th>
				<td>
					<label htmlFor="reg_mb_zip" className="sound_only">우편번호</label>
					<input type="text" name="mb_zip" value={mb_zip	} id="reg_mb_zip" className="frm_input " size="5" maxLength="6" onChange = {onChange} />
					<button type="button" className="btn_frmline" >주소 검색</button><br/>
					<input type="text" name="mb_addr1" defaultValue="" id="reg_mb_addr1" className="frm_input frm_address " size="50" onChange = {onChange} />
					<label htmlFor="reg_mb_addr1">기본주소</label><br/>
					<input type="text" name="mb_addr2" defaultValue="" id="reg_mb_addr2" className="frm_input frm_address" size="50" onChange = {onChange} />
					<label htmlFor="reg_mb_addr2">상세주소</label>
					<br/>
					
					<input type="hidden" name="mb_addr_jibeon" value="" />
				</td>
			</tr>
			 </tbody>
			</table>
		</div>

		<div className="tbl_frm01 tbl_wrap">
			<table>
			<caption>기타 개인설정</caption>
			<tbody>
			
			
			
			<tr>
				<th scope="row"><label htmlFor="reg_mb_mailling">메일링서비스</label></th>
				<td>
					<input type="checkbox" name="mb_mailling"  id="reg_mb_mailling" defaultChecked  />
					정보 메일을 받겠습니다.
				</td>
			</tr>

					<tr>
				<th scope="row"><label htmlFor="reg_mb_sms">SMS 수신여부</label></th>
				<td>
					<input type="checkbox" name="mb_sms" id="reg_mb_sms" defaultChecked  />
					휴대폰 문자메세지를 받겠습니다.
				</td>
			</tr>
			
					<tr>
				<th scope="row"><label htmlFor="reg_mb_open">정보공개</label></th>
				<td>
					<span className="frm_info">
						정보공개를 바꾸시면 앞으로 0일 이내에는 변경이 안됩니다.
					</span>
					<input type="hidden" name="mb_open_default" value="" />
					<input type="checkbox" name="mb_open"   id="reg_mb_open" defaultChecked />
					다른분들이 나의 정보를 볼 수 있도록 합니다.
				</td>
			</tr>
			
			
		   
			</tbody>
			</table>
		</div>

		<div className="btn_confirm">
			<button type="button"  accessKey="s" onClick={onSubmit} ><img src="../img/btn-join-step01.png" alt=''/></button>
			<a href="http://52.78.51.214:3000/"><img src="../img/btn-join-step02-cancel.png" alt=''/></a>
		</div>
		</form>

		</div>
		</div>
		</div>

</div>
	
	
	);
	
}

export default Register_form;