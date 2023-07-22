import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  MainContainer,
  AppHeading,
  Info,
  SelectColor,
  ColorPicker,
  ColorPickContainer,
  ColorCode,
  DisplayColorContainer,
  Generate,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    bgFirst: '#8ae323',
    bgSecond: '#014f7b',
    selectedDirection: gradientDirectionsList[0].value,
  }

  changeDirection = value => {
    this.setState({selectedDirection: value})
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  generateBgColor = () => {
    const {firstColor, secondColor} = this.state

    this.setState({bgFirst: firstColor, bgSecond: secondColor})
  }

  render() {
    const {
      firstColor,
      secondColor,
      selectedDirection,
      bgFirst,
      bgSecond,
    } = this.state
    const mainApp = (
      <AppContainer
        bgFirst={bgFirst}
        bgSecond={bgSecond}
        selectedDirection={selectedDirection}
        data-testid="gradientGenerator"
      >
        <MainContainer>
          <AppHeading>Generate a CSS color Gradient</AppHeading>
          <Info>Choose Direction</Info>
          <SelectColor>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                direction={eachDirection}
                selectedDirection={selectedDirection}
                changeDirection={this.changeDirection}
              />
            ))}
          </SelectColor>
          <Info>Pick the Colors</Info>
          <DisplayColorContainer>
            <ColorPickContainer>
              <ColorCode>{firstColor}</ColorCode>
              <ColorPicker
                type="color"
                value={firstColor}
                onChange={this.onChangeFirstColor}
              />
            </ColorPickContainer>
            <ColorPickContainer>
              <ColorCode>{secondColor}</ColorCode>
              <ColorPicker
                type="color"
                value={secondColor}
                onChange={this.onChangeSecondColor}
              />
            </ColorPickContainer>
          </DisplayColorContainer>
          <Generate type="button" onClick={this.generateBgColor}>
            Generate
          </Generate>
        </MainContainer>
      </AppContainer>
    )

    return mainApp
  }
}

export default GradientGenerator
