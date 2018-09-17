import React from 'react'
import styled from 'styled-components'

const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  &::focus {
    outline: none;
  }
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADhJREFUeNpi/P//PwOtARMDHQBdLGFBYtMq3BiHT3DRPU4YR4NrNAmPJuHRJDyahEeT8Ii3BCDAAF0WBj5Er5idAAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
`

const ButtonLine = styled.div`
  width: 30px;
  height: 3px;
  background: white;
  @supports (-moz-appearance: none) {
    .toggle-button__line {
      margin: 1px 0 5px 0;
    }
  }
`

const drawerToggleButton = props => (
  <ToggleButton className="toggle-button" onClick={props.click} />
)

export default drawerToggleButton
