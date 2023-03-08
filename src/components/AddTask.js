import addIcon from "../assets/icon/add.png";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../actions/todos";
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 25px auto 40px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background-color: rgb(255, 255, 255, 0.3);
  border: 2px white;
  border-bottom: 2px solid #333;
  width: 300px;
  font-size: 16px;
  letter-spacing: 0.05em;

  &::placeholder {
    color: white;
  }
`;

const AddBtn = styled.button`
  padding: 0;
  border: none;
  height: 27px;
  width: 27px;
  background-color: inherit;

  img {
    cursor: pointer;
    height: 27px;
    width: 27px;
  }
`;
function AddTask() {
    const dispatch = useDispatch();
    const [newTask, setnewTask] = useState("");
    const handleChange = (event) =>{
        setnewTask(event.target.value);
    };
    const handleClick = (event) => {
        if(newTask === "") return;
        dispatch(actions.addTask(newTask));
        setnewTask("");
      };
    return (
        <Wrapper>
            <Input
            name="addtask"
            type="text"
            placeholder={"add new task"}
            value={newTask}
            onChange={handleChange}
            />
        <AddBtn onClick={() => handleClick()}>
            <img src={addIcon} alt=""/>
        </AddBtn>
    </Wrapper>
    );
  }
  
  export default AddTask;