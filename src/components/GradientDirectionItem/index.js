import {Direction, List} from './styledComponents'

const GradientDirectionItem = props => {
  const {direction, selectedDirection, changeDirection} = props

  const {value, displayText} = direction

  const onClickDirection = () => {
    changeDirection(value)
  }

  const opacity = selectedDirection === value ? 1 : 0.5

  return (
    <List>
      <Direction
        type="button"
        value={value}
        opacity={opacity}
        onClick={onClickDirection}
      >
        {displayText}
      </Direction>
    </List>
  )
}

export default GradientDirectionItem
