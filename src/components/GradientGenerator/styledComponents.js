import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${props =>
    `linear-gradient(to ${props.selectedDirection}, ${props.bgFirst}, ${props.bgSecond})`};
`
export const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const AppHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #fff;

  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`
export const Info = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #fff;

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const SelectColor = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const DisplayColorContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ColorPickContainer = styled(MainContainer)`
  padding: 10px;
  margin-right: 20px;
`
export const ColorCode = styled(Info)`
  font-size: 16px;
`
export const ColorPicker = styled.input`
  border: 0px solid;
  border-radius: 2px;
  height: 50px;
  width: 100px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`
export const Generate = styled.button`
  height: 50px;
  width: 100px;
  font-family: 'Roboto';
  border: 0px solid;
  font-weight: bold;
  font-size: 13px;
  color: #1e293b;
  background-color: #00c9b7;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  margin-top: 20px;

  @media screen and (max-width: 576px) {
    height: 40px;
    width: 86px;
    font-size: 12px;
  }
`
