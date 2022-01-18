import './employers-list-item.css';

const EmployersListItem = () => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="list-group-item-label">Иван Иванов</span>
      <input type="text" className="list-group-item-input" defaultValue="1000$"/>
      <div className='d-flex justify-content-center align-items-center'>
        <button
          className="btn-cookie btn-sm"
          type="button"
        >
          <i className="fas fa-cookie" />
        </button>
        <button
          className="btn-trash btn-sm"
          type="button"
        >
          <i className="fas fa-trash" />
        </button>
        <i className="fas fa-star" />
      </div>
    </li>
  );
}

export default EmployersListItem;