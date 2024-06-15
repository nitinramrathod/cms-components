"use client"

import styled from '@emotion/styled'
import React from 'react'


const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 4rem 0;
    /* background: red; */
    border-radius: 6px;
    border: 1px solid #75757545;
`

const ImageSelector = ({
    name ='image',
    label="Select image",
    value,
    onChange,
    onBlur,
    error,
    id='image-selector'
  
}) => {
  return (
    <Wrapper>
        <label htmlFor={id}>{label}</label>
        <input type="file" id={id} name={name}/>
    </Wrapper>
  )
}

export default ImageSelector