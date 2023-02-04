import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(Field)`
  margin: 0;
  outline: none;
  width: 200px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #333340;
  border-radius: 5px;
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 150px;
  height: 40px;
  color: #fff;
  font-size: 15px;
  font-style: italic;
  font-weight: bold;
  border: 1px solid #333340;
  border-radius: 10px;
  background: rgb(63,160,251);
  background: radial-gradient(circle, rgba(63,160,251,1) 0%, rgba(0,0,0,1) 95%);
  cursor: pointer;
  box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.65);
`;
