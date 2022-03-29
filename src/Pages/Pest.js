import React from 'react'
import HeaderMainPage from '../components/Header/HeaderPage'
import styled from 'styled-components'
import img1 from '../assets/img/farm1.png'
import img2 from '../assets/img/farm2.png'


const Box= styled.div`
  ${'' /* margin-top: 5rem; */}
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export default function Pest() {

  return (
    <>
      <HeaderMainPage />
      <Box>

      <h3>Oops!! We are working on it</h3>
      </Box>
    </>
  )
}
