const Header = ({ notes, sortBy, onSort }) => {
  return (
    <div className="note-header ">
      <h1>
        My notes (<span>{notes.length}</span>)
      </h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">latest</option>
        <option value="earliest">earliest</option>
        <option value="completed">completed</option>
      </select>
    </div>
  );
};

export default Header;
