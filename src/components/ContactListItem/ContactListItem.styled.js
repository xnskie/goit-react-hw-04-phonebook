import styled from '@emotion/styled';


export const ListItem = styled.li`
display: flex;
gap: 40px;
align-items: center;
`;


export const Button = styled.button`
  padding: 5px 20px;
  color: #333340;
  background-color: transparent;
  border: 1px solid #333340;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms;
  &&:hover{
    background-color: gray;
    color: white;
  }
`;

