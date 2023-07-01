export function TodoItem( { completed, id, text, toggleTodo, deleteTodo}) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} 
        onChange={e => toggleTodo(id, e.target.checked)}
        />
        {text}
      </label>
      <button 
        onClick={() => deleteTodo(id)} 
        className="btn btn-danger">
          Delete
      </button>
    </li>
  )
}