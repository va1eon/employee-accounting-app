import './employers-add-form.css';

const EmployersAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Добавить нового сотрудника</h3>
      <form className="add-form d-flex">
        <input
          className="form-control new-post-label"
          placeholder="Имя сотрудника"
          type="text"
        />
        <input
          className="form-control new-post-label"
          placeholder="З/П сотрудника в $"
          type="text"
        />
        <button
          className="btn btn-outline-light"
          type="submit"
        >Добавить</button>
      </form>
    </div>
  );
}

export default EmployersAddForm;