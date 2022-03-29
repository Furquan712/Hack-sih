import HeaderMainPage from '../components/Header/HeaderPage'
import { useState } from 'react';

import {
  Box,
  Typography,
  TextField,
  Button
} from '@mui/material';

import {
  BackendFertilizerApi
} from '../Backend';

import styled from 'styled-components';


import axios from "axios";
import img1 from '../assets/img/farm1.png'
import img2 from '../assets/img/farm2.png'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 
`

export default function Crop() {

  const [fertilizer, setFertilizer] = useState(null);

  const [cropName, setCropName] = useState(null);
  const [nitrogen, setNitrogen] = useState(null);
  const [phosphorus, setPhosphorus] = useState(null);
  const [pottasium, setPottasium] = useState(null);

  const updateCropName = (e) => {
    setCropName(e.target.value);
  }

  const updateNitrogen = (e) => {
    setNitrogen(e.target.value);
  }

  const updatePhosphorus = (e) => {
    setPhosphorus(e.target.value);
  }

  const updatePottasium = (e) => {
    setPottasium(e.target.value);
  }

  const submitForm = () => {
    const data = {
      'cropname': cropName,
      nitrogen,
      phosphorus,
      pottasium,
    };

    console.log(data);

    axios.post(BackendFertilizerApi(), { crop_attributes: data })
      .then(res => {
        setFertilizer(res.data.prediction);
      })
      .catch(err => {
        alert(err);
      })
  }

  return (

    <>
      <HeaderMainPage />
      <Box sx={{
        width: `100%`
      }}>
        <Box sx={{
          display: `grid`,
          placeItems: `center`,
          paddingTop: `50px`,
          height: `100vh`,
        }}>
          <Container>
            <img src={img1} alt="" style={{
              width: "15rem",
              marginBottom: "2rem"
            }} />
            <Inner>
              <Typography variant="h5" sx={{
                marginBottom: `50px`,
                width: `30vw`
              }}>
                Find out the most suitable crop to grow in your farm
              </Typography>
              <TextField type="text" placeholder="Crop Name" variant="outlined" label="Crop Name" value={cropName} onChange={updateCropName} />
              <br />

              <TextField type="number" placeholder="Nitrogen" variant="outlined" label="Nitrogen" value={nitrogen} onChange={updateNitrogen} />
              <br />

              <TextField type="number" placeholder="Phosphorous" variant="outlined" label="Phosphorous" value={phosphorus} onChange={updatePhosphorus} />
              <br />

              <TextField type="number" placeholder="Pottasium" variant="outlined" label="Pottasium" value={pottasium} onChange={updatePottasium} />
              <br />

              <Button onClick={submitForm} sx={{
                margin: `20px 0`,
              }}>

                Predict My Fertilizer!
              </Button>
            </Inner>

            <img src={img2} alt="" style={{
              width: "20rem"
            }} />
          </Container>


          {
            fertilizer && (
              <>
                <Button onClick={() => {
                  setFertilizer(null)
                }} sx={{
                  marginBottom: `20px`,
                }}>
                  Clear fertilizer
                </Button>
                <Typography variant="h5" sx={{
                  marginBottom: `20px`,
                }}>
                  <div style={{
                    borderRadius: `3px`,
                    backgroundColor: `#E1BBC9`,
                    width: `60%`,
                    margin: `0 20%`,
                    padding: `50px`,
                  }} dangerouslySetInnerHTML={{ __html: fertilizer }} />
                </Typography>
              </>
            )
          }
        </Box>
      </Box >
    </>
  )
}