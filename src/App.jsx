import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
    return (
    <>
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path ='/' component={Home}/>
                <Route exact path ='/about' component={About}/>
                <Route exact path ='/contact' component={Contact}/>
                <Route exact path ='/services' component={Services}/>
                <Redirect to='/'/>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
       
    </>
    );
}

export default App;