import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    margin-top: 30px;
    margin-left: 30px;
    height: 610px;
    width: 760px;
    border-radius: 15px;
    // box-shadow: 0 0 5px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    overflow: auto;

    ::-webkit-scrollbar {
    display: none;
    }
`


function TodoList(){
    const todos = useTodoState();
    return(
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id}
                    id={todo.id}
                    content={todo.content}
                    check={todo.check}
                    due={todo.due}
                />
            ))}
            
        </TodoListBlock>
    )
}

export default TodoList;