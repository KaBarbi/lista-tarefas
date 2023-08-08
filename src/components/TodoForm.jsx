import { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(value, category);
        if (!value || !category) return;
        addTodo(value, category);
        setCategory("");
        setValue("");
    };

    return (
        <div className="todo-form">
            <h2>Criar Formulario</h2>
            <form onSubmit={handlesubmit}>
                <input
                    type="text"
                    placeholder="Digite o titulo"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar tarefas</button>
            </form>
        </div>
    );
};

export default TodoForm;
