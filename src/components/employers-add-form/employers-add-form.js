import {Component} from 'react';
import './employers-add-form.css';

class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  onValueChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    if(this.state.name.length > 3 && this.state.salary) {
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
        name: '',
        salary: ''
      });
    }
  }

  render() {
    const {name, salary} = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавить нового сотрудника</h3>
        <form
          className="add-form d-flex"
          onSubmit={this.onSubmit}
        >
          <input
            className="form-control new-post-label"
            placeholder="Имя сотрудника"
            type="text"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            className="form-control new-post-label"
            placeholder="З/П сотрудника в $"
            type="number"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />
          <button
            className="btn btn-outline-light"
            type="submit"
          >Добавить</button>
        </form>
      </div>
    );
  }
}

export default EmployersAddForm;