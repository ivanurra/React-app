import React from 'react'
import './App.css';
import Header from './components/Header'
import Greet from './components/Greet'

class App extends React.Component{

    user = {
      username: "Lisa",
      email: "lisa@lisa.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlI2pyQwKIbtObGtds2SNJaPIc2uCzLUfCw&usqp=CAU"
    }

    checkForAvatar = () =>{
      if(this.user.avatar){
        return <img src={this.user.avatar} alt={this.user.username}/>
      } else {
        return <img src="https://store-images.s-microsoft.com/image/apps.14401.14335195431380456.948477b0-a258-496a-9152-d98ea44e9f2b.06535fad-ae0d-4d70-bc11-d43c315696cc?mode=scale&q=90&h=300&w=300" alt="Default user"/>
      }
    } 

    render(){
      return(
        <div className="App">
        <Header />
        <Greet email={this.user.email} username={this.user.username}/>
        {this.checkForAvatar()}
        <p>{this.user.username === 'Lisa' ? 'Welcome my dear!!' : 'Wecome my darling!'}</p>
      </div>
      )
    }
}

export default App;
