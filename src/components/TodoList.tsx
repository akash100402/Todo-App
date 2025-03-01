import TodoItems from "./TodoItems";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[]; // Fix: Changed `todo` to `todos`
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({
  todos,
  onCompletedChange,
  onDelete,
}: TodoListProps) {
  // Fix: Create a copy of the todos array before sorting
  const todoSorted = [...todos].sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id; // Sort by ID in descending order if completion status is the same
    }
    return a.completed ? 1 : -1; // Sort incomplete todos first
  });

  return (
    <>
      <div className="space-y-2">
        {todoSorted.map((todo) => ( // Fix: Use `todoSorted` instead of `todos`
          <TodoItems
            key={todo.id}
            todo={todo}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 && ( // Fix: Keep this as `todos` to check if the original list is empty
        <p className="text-center text-gray-500 text-sm">
          There is no Todos yet....
        </p>
      )}
    </>
  );
}