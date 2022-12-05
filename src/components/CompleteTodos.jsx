const style = {
  backgroundColor: "#93ffc9",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={style}>
      <p className="title">COMPLETE</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>RETURN</button>
            </div>              
          );
        })}
      </ul>
    </div>
  );
};