import React from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Home from './Home';
import './App.css';
import Artist from './Components/Artist';

function App() {
    return (
        
        <div className='app'>
            <div className='content'>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/:id' component={Artist} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}



export default App;
