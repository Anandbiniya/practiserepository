const TodoItem = (props) => {
    const deleteItem=(props)=>{
        props(data=="")
    }
  return (
    <>
      <li style={{width:"40%",margin:"auto"}}>
        {props.data.title}

        <button style={{width:"10%"}} onClick={props.deleteItem}>-</button>
      </li>
    </>
  );
};

export { TodoItem };
