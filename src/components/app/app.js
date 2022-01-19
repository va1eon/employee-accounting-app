import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Иван Иванов', salary: 800, increase: false, rise: true, id: 1},
        {name: 'Петр Ноев', salary: 3000, increase: true, rise: false, id: 2},
        {name: 'Ник Сергеев', salary: 2500, increase: false, rise: false, id: 3}
      ]
    }
    this.maxId = 4;
  }

  deleteItem = id => {
    this.setState(({data}) => ({
      data: data.filter(item => item.id !== id)
    }));
  }

  addItem = (name, salary) => {
    const newItem = {
      id: this.maxId++,
      name,
      salary,
      increase: false,
      rise: false,
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  onToggleProp = (id, prop) => {
    /*this.setState(({data}) => {
      const index = data.findIndex(el => el.id === id);
      const oldItem = data[index];
      const newItem = {...oldItem, increase: !oldItem.increase}
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr,
      }
    });*/
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      }),
    }));
  }

  /*onToggleRise = id => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, rise: !item.rise}
        }
        return item;
      }),
    }));
  }*/

  render() {
    const {data} = this.state;
    const employees = data.length;
    const increased = data.filter(item => item.increase).length;
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <EmployersList
          data={data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployersAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;