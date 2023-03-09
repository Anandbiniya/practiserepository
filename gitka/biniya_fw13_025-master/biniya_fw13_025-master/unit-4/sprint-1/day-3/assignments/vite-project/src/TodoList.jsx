import { TodoItem } from "./Todoitem"

const TodoList = (props) => {
    return (
        <ul style={{color:"Black", fontFamily:"arial",width:"20%",margin:"auto",justifyContent:"space-around"}} >
            {props.data.map((e) => {
                return <TodoItem data={e} />
            })}
            {/* <button>-</button> */}
        </ul>
    )
}

export { TodoList }