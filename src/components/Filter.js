import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as actions from "../actions/filter";
const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.div`
  width: min-content;
  padding: 5px 10px;
  margin-right: 10px;
  background-color: ${(props) => (props.active ? "#FFFFB9" : "#B9B9FF")};
  border: none;
  border-bottom: 2px solid #3c5d95;
  border-radius: 3px 3px 0 0;
  color: black;
  letter-spacing: 0.1em;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #F5727E;
  }
`;
function Filter(props) {
    const dispatch = useDispatch();
    return (
        <ButtonContainer>
            <Button active={props.selected === "SHOW_ALL"} onClick={() => dispatch(actions.setFilter("SHOW_ALL"))}>
                ALL
            </Button>
            <Button active={props.selected === "SHOW_TODO"} onClick={() => dispatch(actions.setFilter("SHOW_TODO"))}>
                TODO
            </Button>
            <Button active={props.selected === "SHOW_DONE"} onClick={() => dispatch(actions.setFilter("SHOW_DONE"))}>
                DONE
            </Button>
        </ButtonContainer>
      );
    }
    
    export default Filter;