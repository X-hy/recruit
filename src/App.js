import React from 'react';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Banner from './Components/Banner'
import Swiper from './Components/Swiper'
import Aside from './Components/Aside'
import './App.css';

class App extends React.Component{
  render(){
    return <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="w">
          <Swiper></Swiper>
          <Aside></Aside>
        </div>
      {
        this.props.children
      }
      <Footer></Footer>
    </div>
  }
}

export default App;
