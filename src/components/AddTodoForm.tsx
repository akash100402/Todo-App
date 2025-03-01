import { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    setInput("");
  }
  return (
    <form className="flex h-8" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-white p-2 rounded-s-md grow border border-gray-400"
        type="text"
        placeholder="What needs to be done?"
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-black text-white hover:bg-slate-800"
      >
        Add
      </button>
    </form>
  );
}
