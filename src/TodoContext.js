import React, { createContext, useReducer, useContext, useRef, useState } from "react";

const initialTodos = [
    {
        id: 1,
        content: '라멘집 가기',
        check: true,
        due: '03.09'
    },
    {
        id: 2,
        content: '국밥집 가기',
        check: false,
        due: '03.09'
    },
    {
        id: 3,
        content: '돈까쓰집 가기',
        check: false,
        due: '03.09'
    },
    {
        id: 4,
        content: '햄버거집 가기',
        check: false,
        due: '03.09'
    }

];

function todoReducer(state, action){
    switch(action.type){
        case 'CREATE':
            return [...state, action.todo]
        case 'CHECK':
            return  state.map(todo => 
                todo.id === action.id ? {...todo, check: !todo.check } : todo  
            );
        case 'DELETE':
            return state.filter(todo => todo.id !== action.id);
        case 'EDIT':
            return state.map(todo => (
                todo.id === action.todo.id ? { ...todo, content: action.todo.content } : todo 
            ));
        default:
            throw new Error(`Unhandled action type`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();;
const TodoNextIdContext = createContext();
const ModalContext = createContext();
const EditContext = createContext();

export function TodoProvider( {children} ){
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
    const modal = useState(false);
    const edit = useState({
        id:'', content:''
    })

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    <ModalContext.Provider value={modal}>
                        <EditContext.Provider value={edit}>
                            {children}
                        </EditContext.Provider>
                    </ModalContext.Provider>
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useModal(){
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useEdit(){
    const context = useContext(EditContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}
