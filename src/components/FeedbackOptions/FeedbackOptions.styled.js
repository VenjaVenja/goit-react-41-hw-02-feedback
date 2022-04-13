import styled from "@emotion/styled";

export const FeedbackOptionsList = styled.ul`
display: flex;
list-style: none;
justify-content: center;
`
export const FeedbackOptionsItem = styled.li`
margin:10px 20px;
`;

export const FeedBackOptionsBtn = styled.button`
border: none;
border-radius: 5px;
background-color: green;
color: white;
font-size: 20px;
width: 150px;
height: 40px;
cursor: pointer;
box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
transform: scale(1);
transition: transform 500ms;
&:hover {
    cursor: pointer;
    transform: scale(0.93);
    background-color: #0000c4;
  }
`;