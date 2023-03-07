import TaskList from "./TaskList";
import AddTask from "./AddTask";
import styled from "styled-components";
import "./app.css";

const Wrapper = styled.div`
  background-color: rgb(38,38,38,0.5);
  height: 100vh;
  padding-top: 160px;
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-family: 'Tourney', cursive;
  font-weight: bold;
  font-size: 50px;
  letter-spacing: 2px;
  color: #FFFFB9;
`;

function App(){
    return(
        <Wrapper>
            <Title>Todolist</Title>
            <AddTask />
            <TaskList />
      </Wrapper>
    );
}

export default App;