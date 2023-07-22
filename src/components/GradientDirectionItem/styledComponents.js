import styled from 'styled-components'

export const List = styled.li`
  list-style-type: none;
  margin-right: 20px;
  margin-bottom: 20px;
`
export const Direction = styled.button`
  height: 42px;
  width: 120px;
  color: #000;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  border-radius: 4px;
  border: 0px solid;
  background-color: #fff;
  opacity: ${props => props.opacity};
  cursor: pointer;
  outline: none;

  @media screen and (max-width: 576px) {
    height: 30px;
    width: 80px;
    margin-right: 20px;
  }
`
