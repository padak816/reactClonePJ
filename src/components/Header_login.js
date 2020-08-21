import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Header_login = () => {
	
	// 로그아웃 api session , localstorage 삭제
	
	const onClick = () =>{
		axios.get('http://52.78.51.214:3001/logout',{ 
		
			
		}).then(function(response){
			
		
			localStorage.removeItem('test');
						
			window.location.href = 'http://52.78.51.214:3000';
				
			
			
		}).catch(function(error){
			
			console.log(error);
			
		});
		
				
		
		
		
	}
	
	
    return (
        <div>
			<div id="header-gnb">
				<div className="container">
					<div className="pull-right02">
						<ul>
							<li><Link to="/" onClick={onClick}>LOGOUT</Link></li>
							<li><Link to="/infoCheck">INFO</Link></li>
							<li><a href="/">MY PAGE</a></li>
							<li><Link to="/cart">CART</Link></li>
							<li><a href="/">SITEMAP</a></li>
						</ul>				
					</div>
				</div>
			</div>

			<div id="header-logo">
				<div className="container">
					<div className="logo">
						<Link to="/"><img src="img/logo.png" alt="Wenziday" /></Link>
					</div>
				</div>
			</div>

			<div id="header">
				<div className="bg-nav-sub"></div>
				
				<div className="container">
					
						
					
					<div id="nav">
						<ul className="pull-left">
							<li><a href="/"><img src="img/top-nav01.png" alt="SHOP" /></a></li>
							<li><a href="/"><img src="img/top-nav02.png" alt="BUSINESS"/></a></li>
							<li><Link to="/boardlist"><img src="img/top-nav03.png" alt="COMMUNITY"/></Link></li>
							<li><a href="/"><img src="img/top-nav04.png" alt="ABOUT"/></a></li>
						</ul>			
					</div>

				</div>
				
			</div>
        </div>
    );
};

export default Header_login;