import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.components';
import './App.css';
import {SearchBox} from './components/search-Box/search-box.components';


class App extends Component {
   constructor(){
    super();

  this.state = {
   monsters: [],
  searchField: '',
};

   }  
  //  LIFE CYCLE METHOD
 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
         .then(resp => resp.json())
         .then(users => this.setState({monsters: users}));
 }


  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
     monster.name.toLowerCase().includes(searchField.toLowerCase()) );
  return (
    <div className="App">
      <h1 className="mons-logo">🦖 Monsters Rolodex 🐉</h1>
      <SearchBox
       placeholder='search monsters'
         handleChange={e => this.setState({searchField: e.target.value})}
          />

     <CardList  monsters={filteredMonsters}/> 
        
             
    </div>
  );
}
}
export default App;
