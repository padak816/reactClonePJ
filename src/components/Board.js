import React,{useEffect} from 'react';
import 'components/css/style.css';
import axios from 'axios'; 
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';


function Board(a){
	
	const location = useLocation();
	
	// 조회수 업데이트 
	// 컴포넌트가 랜더되었을때 
	
	useEffect(() => {
		
		axios.put('http://52.78.51.214:3001/searchcount',{
					count : location.params.data.count,
					id : location.params.data.id
				}).then(function(response){
					
					
				}).catch(function(error){
					
					console.log(error);
					
				});
    
	},[]);
	
	
	// 게시글 삭제 api 호출
	
	const deleteButton = () => {	
	
				axios.put('http://52.78.51.214:3001/deleteBoard',{
					id : location.params.data.id
				}).then(function(response){
					
					
					if(response.data){
						
						alert('삭제되었습니다.');
						window.location.href = '/boardlist';
						
					}
					
					
				}).catch(function(error){
					
					console.log(error);
					
				});
		
	}
	
	const onClick = () => {
		
		window.location.href = '/boardlist';
		
	}
	
	
	return (
		<>
			
			<div id="container-nonebg" style={{height:"164px", background:"url(../img/sub-visual03.png) no-repeat top center"}}>	
				<div className="container" style={{padding:"0px 0 0px 0"}}>	
					
				</div>
			</div>



			<div id="container-nonebg" style={{background:"#ffffff"}}>	
				<div className="container" style={{padding:"70px 0 120px 0"}}>



				<div id="bo_v_bot">
					<div id="bo_list" style={{width:"100%"}}>


				<div className="bo_fx">
					<div id="bo_list_total">
						
					</div>
							
				</div>
			

				<form name="fboardlist" id="fboardlist" >


				<div className="tbl_head01 tbl_wrap">
					<table>
						<thead>
							<tr>
								<th scope="col">{location.params.data.title}</th>
								
							</tr>
						</thead>
						<tbody>
							 <tr>
								<td>{location.params.data.memo}</td>
							 </tr>
								
							 
						</tbody>
					</table>
				</div>

					<div className="bo_fx">
					
							
									<button type ='button' onClick={onClick}>목록</button>
									<Link to={{
							pathname : "/boardwrite",
							params : {
								
								data : location.params.data
								
							}
							}}><button>수정</button></Link>
									<button type='button' onClick={deleteButton}>삭제</button>
						</div>
					</form>
			</div>		

				</div>


			

				</div>

			</div>


		</>
		
	);
	
}

export default Board;


