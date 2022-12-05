const style = {
  backgroundColor: "#ff93c9",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
      <p className="title">INCOMPLETE</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>COMPLETE</button>
              <button onClick={() => onClickDelete(index)}>DELETE</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};