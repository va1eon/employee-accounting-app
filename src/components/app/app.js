import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

const App = () => {

  const data = [
    {name: 'Иван Иванов', salary: 800, increase: false, id: 1},
    {name: 'Петр Ноев', salary: 3000, increase: true, id: 2},
    {name: 'Ник Сергеев', salary: 2500, increase: true, id: 3}
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList data={data}/>
      <EmployersAddForm />
    </div>
  );
}

export default App;