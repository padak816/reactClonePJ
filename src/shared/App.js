import React, { Component }  from 'react';
import { Route } from 'react-router-dom';
import  {Header, Header_login, Main, Footer, Register, Register_form, Register_result, Login, Infocheck, Boardlist , Boardwrite, Board , Cart, Item1,Item2}  from 'components';
import axios from 'axios';

class App extends Component {
	
	
	//컴포넌트가 처음 만들어 질 때 실행되는 생성자
    
	constructor(props) {
    	super(props);
        this.state = {
				session : '',
				info: '',
				index : []
				
		};
		

    };
	
	// 컴포넌트가 만들어지고 첫 렌더링을 마친 후 실행되는 메소드 
	
	async componentDidMount(){
		
		const that = this;
		
		// 로그인체크 => session 에 정보 확인 후 전역변수에 session 값 set 
		
		const testapi = await axios.get('http://52.78.51.214:3001/logincheck', {
			   
		}).then(function (response){ 
			
			if(response.data.data ===''){
				localStorage.removeItem('test');
			}else{
				that.setState({
					...that.state,
					info : response.data.data.user
				});
			}		
			
		}).catch(function (error) {
			 console.log(error);
		});
		
		
		 
		 // 게시판 리스트 가져오기 
		 
		const testapi2 =  await axios.get('http://52.78.51.214:3001/getByBoardlist/0', {
   		 
			   
		}).then(function (response){ 
			
			that.setState({
					...that.state,
					index : response.data
					
			});
			
			
			
		}).catch(function (error) {
			 console.log(error);
		});
		
		
		// localStorage에 값 체크해서 로그인 유지 
		
		 if(localStorage.getItem('test')){
			 this.setState({
						...this.state,
						session : localStorage.getItem('test')
					
			});
		 }else{
			 this.setState({
						info : '',
						session : ''
					
			});
		 }
		 
		 
	}
	
	// 로그인 했을때 전역변수에 session 값 set

	loginset = (data) =>{

		
		if(data.user){
			
			this.setState({
					...this.state,
					session : data.user.user_id,
					info : data.user
					
				});
			
		}
			
			
		
	}
	
	//컴포넌트 렌더링
	
    render() {
        return (
            <div>
				
                {!this.state.session? <Header param={this.state} /> : <Header_login param={this.state}/>  }
				
				<Route exact path="/" component={Main}/>
				<Route
					exact path="/register"
					component={() => <Register session={this.state}  />}/>
				<Route
					exact path="/register_form"
					component={() => <Register_form props={this.loginset} session={this.state}  />}/>
				<Route
					exact path="/register_result"
					//component={Register_result}/>
					component={() => <Register_result  />}/>
				<Route
					exact path="/login"
					component={() => <Login props={this.loginset} />}/>
					
				<Route
					exact path="/infoCheck"
					component={() => <Infocheck session={this.state} />}/>	
					
				<Route
					exact path="/boardlist"
					component={()=> <Boardlist props={this.state} />}/>	
				<Route
					exact path="/boardwrite"
					component={()=> <Boardwrite />}/>
				<Route
					exact path="/board"
					component={()=> <Board props={this.state} />}/>
				<Route
					exact path="/cart"
					component={()=> <Cart props={this.state} />}/>	
				<Route
					exact path="/item1"
					component={()=> <Item1 props={this.state} />}/>	
				<Route
					exact path="/item2"
					component={()=> <Item2 props={this.state} />}/>	
					
				<Footer/>
            </div>
        );
    }
}

export default App;