import { Trash } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItems({
  todo,
  onCompletedChange,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center">
      <label className="flex items-center border gap-2 p-2 border-gray-300 bg-white hover:bg-green-100 grow rounded-md">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className="scale-125"
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)} className="p-2">
        <Trash size={20} className="text-gray-500" />
      </button>
    </div>
  );
}
