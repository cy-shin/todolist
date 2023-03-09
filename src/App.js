import { createGlobalStyle } from "styled-components";
import TodoBody from "./components/TodoBody";
import TodoCreate from "./components/TodoCreate";
import TodoEdit from "./components/TodoEdit";
import TodoHead from "./components/TodoHead";
import TodoLayout from "./components/TodoLayout";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body{
    background: #C9E0F0;
  }
`
function App() {
  return (
    <TodoProvider>
      <GlobalStyle/>
      <TodoEdit />
      <TodoLayout>
        <TodoHead/>
          <TodoBody>
          </TodoBody>
          <TodoCreate/>
      </TodoLayout>
    </TodoProvider>
  );
}

export default App;
