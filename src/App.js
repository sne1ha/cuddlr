
import React, {Component} from 'react';
import Appbar from './components/Appbar/Appbar';
import HeaderPane from './components/HeaderPane/HeaderPane';
import Petlist from './components/petlist/petlist';
import { AccountBox } from './components/accountBox';
import Album from './components/album/Album';
import theme from './components/album/theme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import HomeCard from './pages/homepage';
import LoginCard from './pages/loginregister';
import PetCard from './pages/petlistpage';
import PetViewCard from './pages/petviewpage';
import BlogList from './pages/blogpage';
import PetQuiz from './pages/petquizpage';
import PetProfCard from './pages/petprofpage';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component{

    render(){
        return(
              <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Button> // Maybe?
                   <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav> */}

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <LoginCard />
            </Route>
            <Route path="/pet-list">
              <PetCard />
            </Route>
            <Route path="/pet-view">
              <PetProfCard />
            </Route>
            <Route path="/blog">
              <BlogList />
            </Route>
            <Route path="/quiz">
              <PetQuiz />
            </Route>

            <Route path="/">
              <HomeCard />
            </Route>
            
          </Switch>
        </div>
      </Router> 
            
        );
    }

}







export default App;
