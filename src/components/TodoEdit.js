import React from "react";
import styled from "styled-components";
import { useEdit, useModal, useTodoDispatch } from "../TodoContext";

const TodoEditBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(3px);

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    z-index: 100;
`
const TodoEditBlock = styled.div`
    box-sizing: border-box;
    background: white;
    width: 400px;
    height: 200px;
    padding: 0px 30px;
    
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);

    display: flex;
    flex-direction: column;
    align-items: center;
`
const InputBlock = styled.div`
    background: #EEE;
    width: 100%;
    height: 40px;
    margin-bottom: 20px;

    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0px 10px;
`
const Input = styled.input`
    background: transparent;
    width: 100%;
    height: 30px;
    font-size: 25px;
    border: none;
    outline: none;
`
const ButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .confirm{
        background: #2C89F7;
        color: white;
        &:hover{
            filter: brightness(80%);
        }
    }
    .cancel{
        background: #737373;
        color: white;
        &:hover{
            filter: brightness(80%);
        }
    }
`
const Button = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 15px;
    border: none;
    // background: transparent;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
`

function TodoEdit(){
    const [modal, setModal] = useModal();
    const [edit, setEdit] = useEdit();

    const dispatch = useTodoDispatch();
    // const todos = useTodoState();
    // const dispatch = useTodoDispatch();

    // const currentId = edit.id;
    // console.log(edit.id);

    const onChange = e => {
        setEdit({id:edit.id, content:e.target.value});
    }
    const onClose = () => {
        setEdit({id:'', content:''});
        setModal(false);
    }
    const onUpdate = () => {
        dispatch({
            type: 'EDIT',
            todo: {
                id: edit.id,
                content: edit.content
            }
        })
        setEdit({id:'', content:''});
        setModal(false);
    }
    return (
        <>
        {modal && 
            <TodoEditBackground>
                <TodoEditBlock>
                    <h2>수정하기</h2>
                    <InputBlock>
                        <Input onChange={onChange} id={edit.id} value={edit.content} autoFocus />
                    </InputBlock>
                    <ButtonBlock>
                        <Button onClick={onClose} className="cancel">취소</Button>
                        <Button onClick={onUpdate} className="confirm">확인</Button>
                    </ButtonBlock>
                </TodoEditBlock>
            </TodoEditBackground>
        }
        </>
    )
}


export default TodoEdit;