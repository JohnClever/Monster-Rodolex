import React, {Component} from 'react'
import './App.css'
import Cardlist from './component/card-list/card-list.component';
import Searchbox from './component/SearchBox/Searchbox.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      jay: [],
      searchField: ''
    }
  }
  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({jay:data}))
  }
render(){
  const {jay, searchField} = this.state;
  const filteredMonsters = jay.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return(
    <div className="App">
      <h1>Monstor Rodolex</h1>
      <Searchbox 
        placeholder="search monsters"
        handleChange={e => this.setState({searchField:e.target.value})}
      />
      <Cardlist monsterName={filteredMonsters}/>
    </div>
  )
}
}

export default App;