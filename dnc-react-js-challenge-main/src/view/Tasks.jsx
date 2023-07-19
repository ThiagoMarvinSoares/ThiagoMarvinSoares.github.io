import React from "react";
import Header from "../components/Header/Header.jsx";
import "./Index.scss";
import "../components/ToDoList/ToDoList.jsx";
import ToDoList from "../components/ToDoList/ToDoList.jsx";

const Tasks = () => {
  return (
    <section className="page">
      <Header />
      <div className="page__body">
        <h1 className="page__title">
          Otimize seu tempo e se organize com o nosso Planejador Diário.
        </h1>
      </div>
      <div className="containerUl">
        <ToDoList />
      </div>
    </section>
  );
};

export default Tasks;
