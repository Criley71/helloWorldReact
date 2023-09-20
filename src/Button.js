import React from 'react'
import styled from 'styled-components'


function Button() {
    const styleButton = styled.button`
    background-color: DeepSkyBlue;
    padding: 10px 20px;
    font-size: 20px
    border-radius: 10px;
    padding 3px 10px;
    outline: 0;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover{
        background-color: Aquamarine;
    }
    `
  return (
    <styleButton>
        <button>Submit</button>
    </styleButton>
  )
}

export default Button