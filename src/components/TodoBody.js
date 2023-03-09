import React from "react";
import styled from "styled-components";
import TodoBox from "./TodoBox";
import TodoList from "./TodoList";

const TodoBodyBlock = styled.div`
    display: flex;
    height: 100%;
`
function TodoBody(){
    return (
        <TodoBodyBlock>
            <TodoBox/>
            <TodoList/>
        </TodoBodyBlock>
    )
}

export default TodoBody;