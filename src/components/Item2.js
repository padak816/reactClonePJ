import React from 'react';
import 'components/css/style.css';


function Item2(){
	
	const onClick = () => {
		
		let object = {
			id : 2,
			image : "http://wenziday.com/data/item/1539136719/thumb-1000653GRAY_570x372.jpg",
			name : 'Better Together LAPTOP 15',
			count : '1',
			price : '59,000',
			
			
		}
		
		localStorage.setItem('item2', JSON.stringify(object));
		window.location.href='http://52.78.51.214:3000/cart';
		
	}
	
	
	return (
		<>
			<div id="sit_ov_wrap">
					
					<div id="sit_pvi">
						<div id="sit_pvi_big">
						<a href="largeimagee791.html?it_id=1553136048&amp;no=1" target="_blank" className="popup_item_image">
						<img src="../data/item/1539136719/thumb-1000653GRAY_134x108.jpg" width="570" height="372" alt=""/></a>
						<a href="largeimage91f5.html?it_id=1553136048&amp;no=2" target="_blank" className="popup_item_image">
						<img src="../data/item/1539136719/thumb-1000653BROWN_134x108.jpg" width="570" height="372" alt=""/></a>
						<a href="largeimagebae2.html?it_id=1553136048&amp;no=3" target="_blank" className="popup_item_image">
						<img src="../data/item/1539136719/thumb-1000653MINT_134x108.jpg" width="570" height="372" alt=""/></a>
						<a href="largeimage5814.html?it_id=1553136048&amp;no=4" target="_blank" className="popup_item_image">
						<img src="../data/item/1539136719/thumb-1000653IN_134x108.jpg" width="570" height="372" alt=""/></a>       
					</div>
					
						<ul id="sit_pvi_thumb"><li ><a href="largeimagee791.html?it_id=1553136048&amp;no=1" target="_blank" className="popup_item_image img_thumb">
						<img src="../data/item/1539136719/thumb-1000653GRAY_134x108.jpg" width="134" height="108" alt=""/>
						<span className="sound_only"> 1번째 이미지 새창</span></a></li><li ><a href="largeimage91f5.html?it_id=1553136048&amp;no=2" target="_blank" className="popup_item_image img_thumb">
						<img src="../data/item/1539136719/thumb-1000653BROWN_134x108.jpg" width="134" height="108" alt=""/>
						<span className="sound_only"> 2번째 이미지 새창</span></a></li><li ><a href="largeimagebae2.html?it_id=1553136048&amp;no=3" target="_blank" className="popup_item_image img_thumb">
						<img src="../data/item/1539136719/thumb-1000653MINT_134x108.jpg" width="134" height="108" alt=""/>
						<span className="sound_only"> 3번째 이미지 새창</span></a></li><li className="li_last"><a href="largeimage5814.html?it_id=1553136048&amp;no=4" target="_blank" className="popup_item_image img_thumb">
						<img src="../data/item/1539136719/thumb-1000653IN_134x108.jpg" width="134" height="108" alt=""/>
						<span className="sound_only"> 4번째 이미지 새창</span></a></li></ul>    
					</div>
					

					
					<section id="sit_ov">
						<h2 id="sit_title">Better Together LAPTOP 15 <span className="sound_only">요약정보 및 구매</span></h2>
						<p id="sit_desc"></p>
								<p id="sit_opt_info">
							상품 선택옵션 1 개, 추가옵션 0 개
						</p>
								
						<table className="sit_ov_tbl">
						<colgroup>
							<col className="grid_3"/>
							<col/>
						</colgroup>
						<tbody>
								<tr>
							<th scope="row">제조사</th>
							<td>wenziday</td>
						</tr>
						
								<tr>
							<th scope="row">원산지</th>
							<td>korea</td>
						</tr>
						
								<tr>
							<th scope="row">브랜드</th>
							<td>WENZIDAY</td>
						</tr>
						
						
								
						<tr>
							<th scope="row">판매가격</th>
							<td>
								53,000원               <input type="hidden" id="it_price" value="53000"/>
							</td>
						</tr>
						
						
								<tr>
							<th scope="row">포인트</th>
							<td>
								290점            </td>
						</tr>
										<tr>
							<th>배송비결제</th>
							<td>주문시 결제</td>
						</tr>
										</tbody>
						</table>

								
						<section>
							<h3>선택옵션</h3>
							<table className="sit_ov_tbl">
							<colgroup>
								<col className="grid_3"/>
								<col/>
							</colgroup>
							<tbody>
							<tr>
				<th><label htmlFor="it_option_1">COLOR</label></th>
				<td><select id="it_option_1" className="it_option">
				<option value="">선택</option>
				<option value="NAVY,0,9999">NAVY&nbsp;&nbsp;+ 0원</option>
				<option value="PINK,0,9999">PINK&nbsp;&nbsp;+ 0원</option>
				<option value="CYAN BLUE,0,9999">CYAN BLUE&nbsp;&nbsp;+ 0원</option>
				</select>
				</td>
				</tr>
							</tbody>
							</table>
						</section>

						
						

						<section id="sit_sel_option">
							<h3>선택된 옵션</h3>
									</section>



						<div id="sit_tot_price"></div>
						
						
						<div id="sit_ov_btn">
							
										
							<input type="image" src="../img/btn-item-cart.png" onClick={onClick} value="장바구니" id="sit_btn_cart" style={{paddingRight:"4px"}} alt='' />
							<input type="image" src="../img/btn-item-buy.png" value="바로구매" id="sit_btn_buy" alt =''/>
													
												</div>

						
					</section>
					
						<div id="sit_siblings">
							<a href="item5456.html?it_id=1539136719" id="siblings_next">다음 상품<span className="sound_only"> Better Together LAPTOP 15"</span></a>
						</div>
						
				</div>
			
		</>
		
	);
}

export default Item2;
