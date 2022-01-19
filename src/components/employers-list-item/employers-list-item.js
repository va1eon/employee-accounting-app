import './employers-list-item.css';

const EmployersListItem = (props) => {
  const {name, salary, onDelete, onToggleProp, increase, rise} = props;

  let classNames = 'list-group-item d-flex justify-content-between';
  if(increase) {
    classNames += ' increase';
  }
  if(rise) {
    classNames += ' like';
  }

  return (
    <li className={classNames}>
        <span
          className="list-group-item-label"
          data-toggle="rise"
          onClick={onToggleProp}
        >{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
      <div className='d-flex justify-content-center align-items-center'>
        <button
          className="btn-cookie btn-sm"
          type="button"
          data-toggle="increase"
          onClick={onToggleProp}
        >
          <i className="fas fa-cookie" />
        </button>
        <button
          className="btn-trash btn-sm"
          type="button"
          onClick={onDelete}
        >
          <i className="fas fa-trash" />
        </button>
        <i className="fas fa-star" />
      </div>
    </li>
  );
}

export default EmployersListItem;