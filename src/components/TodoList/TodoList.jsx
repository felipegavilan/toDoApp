import Todo from "../Todo/Todo"
import TodoFilters from "../TodoFilters/TodoFilters"

const TodoList = ({ todos, handleSetComplete, handleDelete, showAllTodos, showActiveTodos, showCompletedTodos, handleClearComplete, activeFilter }) => {
    return(
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo =>{
                return(
                    <Todo 
                    key={todo.id} 
                    todo={todo} 
                    handleSetComplete={handleSetComplete}
                    handleDelete={handleDelete}
                    />
                )
            })}
            <TodoFilters
            activeFilter={activeFilter}
            total={todos.length}
            showAllTodos={showAllTodos}
            showActiveTodos={showActiveTodos}
            showCompletedTodos={showCompletedTodos}
            handleClearComplete={handleClearComplete}
            />
        </div>
    )
}

export default TodoList