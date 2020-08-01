import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import AiPage from "./components/AiPage/AiPage";
import Faqs from "./components/Faqs/Faqs";
import AboutUs from "./components/AboutUs/AboutUs";

class App extends React.Component {

  render(){
    return (
      <BrowserRouter >
	  		
				
				<Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/aipage" component={AiPage} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/about-us" component={AboutUs} />
      
				</Switch>
				
			</BrowserRouter>
    );
  }
 
}

export default App;
