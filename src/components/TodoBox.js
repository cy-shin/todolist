import React from "react";
import styled from "styled-components";

const TodoBoxBlock = styled.div`
    box-sizing: border-box;
    background: white;
    width: 350px;
    height: 700px;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    margin-top: 30px;
    border-radius: 15px;
    padding: 10px;

    .category{
        width: 290px;
        height: 35px;
        
        margin-bottom: 10px;
        padding: 10px 20px;
        border-radius: 10px;


        font-size: 18px;
        font-weight: 900;
        
        display: flex;
        align-items: center;

        cursor: pointer;
        &:hover{
            box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
            background: #E8E8E8;
        } 
    }
    .checked{
        background: #F0F0F0;
    }
`
function TodoBox(){
    return (
        <TodoBoxBlock>
            <div className="box">
                <div className="category checked">전체</div>
                <div className="category">장보기</div>
                <div className="category">미팅</div>
                <div className="category">운동</div>
            </div>
        </TodoBoxBlock>
    )
}

export default TodoBox;