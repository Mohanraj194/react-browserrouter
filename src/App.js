import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Comment from './component/Comment';
import Landing from './component/Landing'
import Header from './component/Nav';
import Post from './component/Post';
import User from './component/User';

class App extends Component {
  
  render() { 
    return (
      
     <BrowserRouter>
        <div>
           <Header/>
          <Switch>
             <Route exact path='/' component={Landing}/>
             <Route path='/post/:id' component={Post}/>
             <Route path='/user/:id' component={User}/>
             <Route path='/comment/:id' component={Comment}/>
             <Route path='*' component={()=><h1 className="text-center mt-5">404 Page Not Founded</h1>}/>
          </Switch>
        </div>
    </BrowserRouter> 
      );
  }
}
 
export default App;
