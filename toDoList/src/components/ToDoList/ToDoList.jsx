import React, { useState } from "react";
import CrossIcon from "../../Images/CrossIcon.svg";
import EditIcon from "../../Images/EditIcon.svg";
import DeleteIcon from "../../Images/DeleteIcon.svg";
import DeleteModal from "../deleteModal/modal.jsx";
import ConfirmIcon from "../../Images/verificar.png";
import "../ToDoList/index.scss";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [deleteTodoId, setDeleteTodoId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    setTodos([...todos].concat(newTodo));
    setTodo("");
  };

  //Delete the todo item
  const deleteTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  //Edit the todo item
  const editTodo = (id) => {
    if (editingText.trim().length !== 0) {
      //prevents empty input
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: editingText };
        }
        return todo;
      });
      setTodos(updatedTodos);
      setTodoEditing(null);
      setEditingText("");
    }
  };

  return (
    <div className="pageWrap">
      <div className="pageWrap__body">
        <h3 className="pageWrap__heading">Tarefa</h3>
        <h3 className="pageWrap__heading">Status</h3>
        <h3 className="pageWrap__heading">Opções</h3>
      </div>
      <div className="todoList">
        <div className="todoList__functions">
          {todos.map((todo) => (
            <div className="todoList__functions--div" key={todo.id}>
              {todoEditing === todo.id ? (
                <input
                  className="todoList__form--input"
                  placeholder="Digite a nova tarefa"
                  type="text"
                  maxLength={15}
                  onChange={(e) => setEditingText(e.target.value)}
                  value={editingText}
                />
              ) : (
                <div className="todoElement">{todo.text}</div>
              )}
              <div className="item--checkbox">
                <input
                  className="todoList__functions--checkbox"
                  type="checkbox"
                />
              </div>
              <div className="todoList__buttonsGroup">
                <button
                  className="todoList__functions--button"
                  onClick={() => {
                    setDeleteTodoId(todo.id);
                    setOpenModal(true); // Open the modal
                  }}
                >
                  <img src={DeleteIcon} alt="" />
                </button>
                {todoEditing === todo.id ? (
                  <button
                    className="todoList__functions--button"
                    onClick={() => editTodo(todo.id)}
                  >
                    <img src={ConfirmIcon} alt="" className="ConfirmIcon" />
                  </button>
                ) : (
                  <button onClick={() => setTodoEditing(todo.id)}>
                    <img src={EditIcon} alt="" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="todoList__form--input"
            maxLength={14}
            placeholder="Nova tarefa..."
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit" className="todoList__form--button">
            <img className="crossImg" src={CrossIcon} alt="" />
          </button>
        </form>
        <DeleteModal
          className="overlay"
          open={openModal}
          onClose={() => setOpenModal(false)}
          onDelete={() => {
            deleteTodo(deleteTodoId);
            setOpenModal(false);
          }}
          deleteTodo={deleteTodo}
          taskText={todos.find((t) => t.id === deleteTodoId)?.text}
        />
      </div>
    </div>
  );
}

export default ToDoList;
