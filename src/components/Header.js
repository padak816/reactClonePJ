import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    
    return (
        <div>
		
			<div id="header-gnb">
				<div className="container">
					<div className="pull-right02">
						<ul>
							<li><Link to="/login">LOGIN</Link></li>
							<li><Link to="/register">JOIN</Link></li>
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

export default Header;