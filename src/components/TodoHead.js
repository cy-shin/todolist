import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";


const TodoHeadBlock = styled.div`
    display: flex;
    align-items: end;
    margin-top: 20px;
    h1{
        font-size: 45px;
        margin: 0;
        color: #202020;
    }
    .date{
        width: 380px;
    }
    .goals-left{
        font-size: 30px;
        font-weight: 600;
        color: #202020;
    }
    .bar{
        border: 1px solid black;
        box-shadow: 0 0 5px 0 rgba(0,0,0,0.3);
        width: 300px;
        height: 30px;
        border-radius: 10px;
        margin: 20px 0px 20px;
    }
`

function TodoHead(){
    const todos = useTodoState();
    const leftTodos = todos.filter(todo => !todo.check);
    const today = new Date();
    const todayToString = today.toLocaleDateString('ko-KR',{
        month: 'long',
        day: 'numeric'
    });        
    return (
        <TodoHeadBlock>
            <div className="date">
                <h1>{todayToString}</h1>
            </div>
            <div className="goals-left">남은 할 일 : {leftTodos.length}개</div>
        </TodoHeadBlock>
    ) 
}

export default TodoHead;