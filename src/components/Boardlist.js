import React from 'react';
import 'components/css/style.css';
import {Link} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '/data/webapp/react-pj/node_modules/bootstrap/dist/css/bootstrap.css';
import '/data/webapp/react-pj/node_modules/react-bootstrap-table/css/react-bootstrap-table-all.min.css'


function Boardlist(param){
	
	
	const board = {
		index : param.props.index
	}

	
	return(
	
		<>
			<div id="container-nonebg" style={{height:"164px", background:"url(../img/sub-visual03.png) no-repeat top center"}}>	
			<div className="container" style={{padding:"0px 0 0px 0"}}>	
				
			</div>
			</div>

	
			<div id="container-nonebg" style={{background:"#ffffff"}}>	
			<div className="container" style={{padding:"70px 0 120px 0"}}>



			<h2 id="container_title">Q&A<span className="sound_only"> 목록</span></h2>

			<div id="bo_list" style={{width:"100%"}}>


				<div className="bo_fx">
					<div id="bo_list_total">
						
					</div>
							
				</div>
			

				<form name="fboardlist" id="fboardlist" >


				<div className="tbl_head01 tbl_wrap">
					
							 
								<Tablerow props = {board}/>
							 
				
				</div>

					<div className="bo_fx">
					
							<ul className="btn_bo_user">
									<li><Link to="/boardwrite"><button className="btn_submit">글쓰기</button></Link></li></ul>
						</div>
					</form>
			</div>



				</div>

			</div>
		</>
	); 
	
}

function Tablerow(param){
	
	const options =  {
		sizePerPage: 10,
		hideSizePerPage: true,
		onRowClick: function(row) {
			
			
	  }
		
	};
	
	
	
	const {index} = param.props;
	
	const cellFormat = (cell, row) => {
		
		return <Link to={{
							pathname : "/board",
							params : {
								
								data : row
								
							}
							}}>{cell}</Link>;
	}

	
	return (
				<>
					<BootstrapTable data={index} options = {options} pagination>
					  <TableHeaderColumn isKey dataField='id'>번호</TableHeaderColumn>
					  <TableHeaderColumn dataField='title' dataFormat={cellFormat}>제목</TableHeaderColumn>
					  <TableHeaderColumn dataField='name'>글쓴이</TableHeaderColumn>
					  <TableHeaderColumn dataField='maketime'>날짜</TableHeaderColumn>
					  <TableHeaderColumn dataField='count'>조회</TableHeaderColumn>
				  </BootstrapTable>
				</>
		
	);
}

export default Boardlist;

