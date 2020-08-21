import React,{useState} from 'react';
import 'components/css/style.css';
import {useLocation} from 'react-router-dom';
import axios from 'axios'; 

function Boardwrite(){
	//window.scrollTo(0,0);
	
	const location = useLocation();
	
	let params = {
		
		id : '',
		name : '',
		title : '',
		memo : ''
	
		
	}
	
	if(location.params){
		params = location.params.data;
	}
	
	const [inputs , setInputs] = useState({
		
		id : params.id,
		wr_name : params.name,
		wr_title : params.title,
		wr_content : params.memo 
		
	});
	
	const onChange = (e)=>{
		
		const {name, value } = e.target;
		
		setInputs({
			...inputs,
			[name] : value
		});
		
	}
	
	// 게시판 작성 및 수정 api 호출
	
	const onSubmit = () => {
		
		if(inputs.wr_name !== ''&& inputs.wr_title !== '' && inputs.wr_content !== '' ){
				console.log('inputs');
				console.log(inputs);
				axios.post('http://52.78.51.214:3001/upsertBoard',{
					...inputs
				}).then(function(response){
					
					
					if(response.data){
						
						if(!params.id){
							alert('작성되었습니다.');
						}else{
							alert('수정되었습니다.');
						}
						
						window.location.href = '/boardlist';
						
					}
					
					
				}).catch(function(error){
					
					console.log(error);
					
				});
			
		}else{
			alert('빈 칸을 작성해주세요.');
		}
		
		
	}
	
	return (
		<>
		
			<div id="container-nonebg" style={{height:"164px", background:"url(../img/sub-visual03.png) no-repeat top center"}}>	
				<div className="container" style={{padding:"0px 0 0px 0"}}>	

				</div>
			</div>
			
			<div id="container-nonebg" style={{background:"#ffffff"}}>	
				<div className="container" style={{padding:"70px 0 120px 0"}}>
			

			<section id="bo_w">
				<h2 id="container_title">Q&A 글답변</h2>

				
				<form  style={{width:"100%"}}>

				<div className="tbl_frm01 tbl_wrap">
					<table>
					<tbody>
					<tr>
						<th scope="row"><label forhtml="wr_name">이름<strong className="sound_only">필수</strong></label></th>
						<td><input type="text" name="wr_name" defaultValue={params.name} id="wr_name" required className="frm_input required" size="10" maxLength="20" onChange = {onChange} /></td>
					</tr>
					
					
					<tr>
						<th scope="row"><label forhtml="wr_title">제목<strong className="sound_only">필수</strong></label></th>
						<td>
							<div id="autosave_wrapper">
								<input type="text" name="wr_title" defaultValue={params.title} id="wr_title" required className="frm_input required" size="50" maxLength="255" onChange = {onChange} />
												</div>
						</td>
					</tr>

					<tr>
						<th scope="row"><label forhtml="wr_content">내용<strong className="sound_only">필수</strong></label></th>
						<td className="wr_content">
											<span className="sound_only">웹에디터 시작</span><script>document.write("<div className='cke_sc'><button type='button' className='btn_cke_sc'>단축키 일람</button></div>");</script>
						<script src="../plugin/editor/smarteditor2/js/HuskyEZCreator.js"></script>
						<script>var g5_editor_url = "../plugin/editor/smarteditor2/index.html", oEditors = [], ed_nonce = "e472045e3f";</script>
						<script src="../plugin/editor/smarteditor2/config.js"></script>
						<textarea id="wr_content" name="wr_content" className="smarteditor2" maxLength="65536" style={{width:"100%",height:"300px"}} onChange = {onChange} defaultValue ={params.memo}  ></textarea>
						<span className="sound_only">웹 에디터 끝</span>                            </td>
					</tr>

					</tbody>
					</table>
				</div>

				<div className="btn_confirm">
					<input type="button" defaultValue="작성완료" id="btn_submit" className="btn_submit" onClick={onSubmit} />
					<a href="/boardlist" className="btn_cancel">취소</a>
				</div>
				</form>

				
			</section>
				</div>

			</div>
		
		</>
	
	);
	
	
}

export default Boardwrite;


