import React, { useRef, useState } from "react";
import styled, {css} from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const TodoCreateBlock = styled.div`
    box-sizing: border-box;
    background: white;
    border-radius: 10px;
    width: 760px;
    height: 50px;
    position: absolute;
    bottom: 30px;
    right: 30px;
    padding: 15px;

    display: flex;
    align-items: center;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
`

const Input = styled.input`
    font-size: 20px;
    border: none;
    outline: none;
    width: 680px;
    height: 30px;
`

const TodoClearButton = styled.button`
    background: transparent;
    border: none;
    font-size: 25px;
    width: 40px;
    height: 38px;
    text-align: end;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
    ${props => {
        props.view && css`display: none;`
    }}

`
const InsertForm = styled.form`

`

function makeTodayString(){
    const today = new Date();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    if(month < 10){month = '0' + month}
    if(date < 10){date = '0' + date};
    return month + '.' + date;
}

function TodoCreate(){
    let todayString = makeTodayString();
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false);

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const inputText = useRef();

    const onChange = e => {
        setValue(e.target.value);
        if(inputText.current.value.trim().length > 0){
            setShow(true);
        } else {
            setShow(false);
        }
    }
    const onSubmit = e => {
        e.preventDefault();
        if(inputText.current.value.trim().length>0){
            dispatch({
                type: 'CREATE',
                todo: {
                    id: nextId.current,
                    content: value,
                    check: false,
                    due: todayString
                }
            })
            setValue('');
            nextId.current += 1;
            setShow(false);
        } else {
            alert('내용을 입력해주세요.');
        }
    }

    const onClear = () => {
        setValue('');
        setShow(false);
    }

    return(
        <TodoCreateBlock>
            <InsertForm onSubmit={onSubmit}>
                <Input
                    onChange={onChange}
                    autoFocus
                    value={value} 
                    placeholder="입력 후 Enter를 눌러 추가"
                    ref={inputText}
                />
            </InsertForm>
            { show && (
                <TodoClearButton onClick={onClear}>
                    <FontAwesomeIcon icon={faXmark} />
                </TodoClearButton>
            )}
            </TodoCreateBlock>
    )
}

export default React.memo(TodoCreate);