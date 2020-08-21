import React,{useState} from 'react';
import 'components/css/style.css';
import {useHistory} from 'react-router-dom';

//import './css/react-bootstrap-table-all.min.css';
import '/data/webapp/react-pj/node_modules/bootstrap/dist/css/bootstrap.css';
import '/data/webapp/react-pj/node_modules/react-bootstrap-table/css/react-bootstrap-table-all.min.css'


function Cart(){

	function countFormat(count){
		if(count===0) return 0;
	 
		let reg = /(^[+-]?\d+)(\d{3})/;
		let n = (count + '');
	 
		while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
	 
		return n;
	};
	
	
	
	const [state , setState] = useState({
		
			check : true,
			item1 : true,
			item2 : true,
		
	});	
		
	const index = [];
	const history = useHistory();
	let amount = 0 ;
	
	if(!localStorage.getItem('item1') && !localStorage.getItem('item2')){
		
		
	}else{
		
		if(localStorage.getItem('item1')){
			index.push(JSON.parse(localStorage.getItem('item1')));
			console.log(index);
		}
		if(localStorage.getItem('item2')){
			index.push(JSON.parse(localStorage.getItem('item2')));
			console.log(index);
		}
		
	}
	
	if(index.length >0 ){
		index.forEach(row =>
			amount += parseInt(row.price.replace(',' ,''), 10)
			);
			
		
		
	}
	
	// 합계 금액 , 찍기 
	
	amount = countFormat(amount);
	
	
	// localStorage 비우기
	
	const allDelete = () => {
		localStorage.removeItem('item1');
		localStorage.removeItem('item2');
		history.push('/cart');
	}
	
	
	// change 이벤트 체크 확인
	
	const toggleChange = (e) => {
		
		const {name} = e.target;
		
		setState({
			...state,
			[name] : state.check,
		});
		
		
		if (e.target.name === 'item1') {
			setState({
			...state,
			item1 : !state.item1,
			});

		}
		
		if (e.target.name === 'item2') {
			setState({
			...state,
			item2 : !state.item2,
			});

		}
	}
	
	const checkDelete = () => {
		
		
		if(state.item1){
			
			localStorage.removeItem('item1');
			history.push('/cart');
		}
		if(state.item2){
			
			localStorage.removeItem('item2');
			history.push('/cart');
		}
		
	}
	
	
	
	
	return(
	
		<>
			
			<div id="container-nonebg" style={{height:"164px", background:"url(../img/sub-visual06.png) no-repeat top center"}}>	
				<div className="container" style={{padding:"0px 0 0px 0"}}>	
				</div>
			</div>





			<div id="container-nonebg" style={{height:"80px", background:"#e9e9e9"}}>	
				<div className="container" style={{padding:"0px 0 0px 0"}}>
					
					<img src="../img/sub-mypage-tab03.png" useMap="#Map_sub-mypage-tab" alt=''/>

				</div>
			</div>




			<div id="container-nonebg" style={{background:"#ffffff"}}>	
				<div className="container" style={{padding:"70px 0 120px 0"}}>



			<div id="sod_bsk">

				<form name="frmcartlist" id="sod_bsk_list" method="post" action="http://wenziday.com/shop/cartupdate.php">
				<div className="tbl_head01 tbl_wrap">
					<table>
						<thead>
							<tr>
								<th scope="col">상품이미지</th>
								<th scope="col">상품명</th>
								<th scope="col">총수량</th>
								<th scope="col">판매가</th>
								<th scope="col">소계</th>
								<th scope="col">포인트</th>
								<th scope="col">배송비</th>
								<th scope="col">
									<label htmlFor="ct_all" className="sound_only">상품 전체</label>
									<input type="checkbox" name="ct_all" value="1" id="ct_all" defaultChecked={state.check} onChange = {toggleChange}/>
								</th>
							</tr>
						</thead>
						<tbody>
						{index.length === 0 && <tr><td colSpan="8" className="empty_table">장바구니에 담긴 상품이 없습니다.</td></tr> }
						<Cartitem index = {index} state = {state} toggleChange = {toggleChange}/>
						</tbody>
					</table>
				</div>

				
					<div id="default">
						{index.length === 0 ? <a href="/" className="btn01">쇼핑 계속하기</a> : 
						<><dl id="value">
        
				
							<dt className="sod_bsk_cnt">총계 가격/포인트</dt>
							<dd className="sod_bsk_cnt"><strong> {amount}원 / 0 점</strong></dd>
							
						</dl>
						
						<div id="sod_bsk_act">
							<input type="hidden" name="url" value="./orderform.php"/>
							<input type="hidden" name="records" value="1"/>
							<input type="hidden" name="act" value=""/>
							<a href="/" className="btn01">쇼핑 계속하기</a>
							<button type="button" className="btn_submit">주문하기</button>
							<button type="button"  className="btn01" onClick = {checkDelete} >선택삭제</button>
							<button type="button"  className="btn01" onClick = {allDelete} >비우기</button>
						</div></>
						
						}
					</div>
				
					
						

				</form>

			</div>


				</div>

			</div>
		</>
	
	);
}


function Cartitem({index , state, toggleChange}){
	
	
	// const index = [
	
		// {
		// id : 1,
		// image : "http://wenziday.com/data/item/1553136048/thumb-1000653_70x70.jpg",
		// name : 'Better Together TABLET 11',
		// count : '1',
		// price : '29,000',
		
		// },
		// {
		
		// id : 2,
		// image : "http://wenziday.com/data/item/1491189166/thumb-1000653BLACK_70x70.jpg",
		// name : 'better together SOLID WALLET',
		// count : '1',
		// price : '24,000',
		
		// },
	// ];
	
	
	
	const item = index.map(row => 
	
			<tr key={row.id}>
				<td className="sod_img"><img src={row.image} width="70" height="70" alt=""/></td>
				<td>
					<a href="./item.php?it_id=1491189166"><b>{row.name}</b></a><div className="sod_opt"><ul>
					<li>color:navy {row.count}개 </li>
					</ul></div><div className="sod_option_btn"><button type="button" className="mod_options">선택사항수정</button></div>            
				</td>
				<td className="td_num">{row.count}</td>
				<td className="td_numbig">{row.price}</td>
				<td className="td_numbig"><span id="sell_price_0">{row.price}</span></td>
				<td className="td_numbig">0</td>
				<td className="td_dvr">무료</td>
				<td className="td_chk">
					<label htmlFor="ct_chk_0" className="sound_only">상품</label>
					<input type="checkbox" name={'item'+row.id} value="1" id="ct_chk_0" defaultChecked={state.check} onChange = {toggleChange} />
				</td>
			</tr>
	
	
	);
	
	
	return(
			
			<>
				{item}
				
				
			</>
		
		
	);
	
}

export default Cart;