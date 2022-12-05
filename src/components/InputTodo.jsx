const style = {
  backgroundColor: "#ddd",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input disabled={disabled} placeholder="INPUT TODO" value={todoText} onChange={onChange}></input>
      <button disabled={disabled} onClick={onClick}>ADD</button>
    </div>
  );
};