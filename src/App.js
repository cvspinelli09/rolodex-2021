import React, { Component } from 'react';
import Logo from '../src/logo1.png'
import './App.css';

import CardList from './componentes/card-list/card-list.componente.jsx';
import SearchBox from './componentes/search-box/search-box.component.jsx';

class App extends Component {

  constructor() {
    super();

    this.state = {
      produtos: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ produtos: users }))
  } 

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { produtos, searchField } = this.state;
    const produtosFiltrados = produtos.filter(produto => 
      produto.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <div>
        <img src={Logo} width='250'  alt='logo'/>
        </div>
        <SearchBox 
          placeholder='procurar produtos'
          handleChange={this.handleChange}
        />
        <CardList produtos={produtosFiltrados} />  
      </div>
  );
  }
}

export default App;

//<img src={Logo} width='250' alt='logo'  />