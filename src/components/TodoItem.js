import React from "react";
import styled, {css} from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEdit, useModal, useTodoDispatch } from "../TodoContext";

const TodoItemBlock = styled.div`
    background: white;
    width: 720px;
    height: 50px;

    margin-bottom: 10px;
    padding: 10px 20px;
    border-radius: 10px;

    box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;

    // cursor: pointer;
    // &:hover{
    //     filter: brightness(90%);
    // }
`
const TodoCheck = styled.div`
    font-size: 30px;
    cursor: pointer;
    &:hover{
        color: green;
    }
    ${props =>
        props.check && css`color: green`
    }
`
const TodoContent = styled.div`
    // background: red;
    font-size: 25px;
    width: 580px;
    margin-left: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    ${props =>
        props.check && css`text-decoration: line-through`
    }
`
const TodoDue = styled.div`
    color: #777;
    font-size: 25px;
    margin-left: 15px;
`
const TodoEdit = styled.div`
    font-size: 25px;
    margin-left: 15px;
    cursor: pointer;
    &:hover{
        color: blue;
    }
`
const TodoDelete = styled.div`
    font-size: 25px;
    margin-left: 15px;
    cursor: pointer;
    &:hover{
        color: red;
    }
`

function TodoItem( {id, check, content, due} ){
    const dispatch = useTodoDispatch();
    const onCheck = () => dispatch( { type : 'CHECK', id } )
    const onDelete = () => dispatch( { type : 'DELETE', id } )

    const [, setModal] = useModal();
    const [, setEdit] = useEdit();

    const onEdit = () => {
        setModal(true);
        setEdit({id:id, content:content})
    }

    return(
        <TodoItemBlock>
            <TodoCheck onClick={onCheck} check={check}><FontAwesomeIcon icon={faCircleCheck} /></TodoCheck>
            <TodoContent check={check}>{content}</TodoContent>
            <TodoDue>{due}</TodoDue>
            <TodoEdit onClick={onEdit}><FontAwesomeIcon icon={faPenToSquare} /></TodoEdit>
            <TodoDelete onClick={onDelete}><FontAwesomeIcon icon={faTrash} /></TodoDelete>
        </TodoItemBlock>
    )
}

export default TodoItem;