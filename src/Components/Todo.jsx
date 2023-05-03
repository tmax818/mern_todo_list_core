export const Todo = ({task, handleCheck, handleDelete}) => {
    return (
        <>
            <p style={task.completed?{textDecoration: 'line-through'}: {}}>
            {task.text}:<input type="checkbox" onChange={e => handleCheck(e, task)}/>
                <button onClick={e => handleDelete(e, task)}>Delete</button>
            </p>
        </>
    )
}