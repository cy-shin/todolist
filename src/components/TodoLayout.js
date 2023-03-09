import React from "react";
import styled from "styled-components";

const TodoLayoutBlock = styled.div`
    box-sizing: border-box;
    width: 1200px;
    height: 870px;
    
    background: #FAFAFA;
    
    padding: 30px;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);

    display: flex;
    flex-direction: column;
    position: relative;
`

function TodoLayout( {children} ){
    return (
        <TodoLayoutBlock>
            {children}
        </TodoLayoutBlock>
    )
    
}

export default TodoLayout;