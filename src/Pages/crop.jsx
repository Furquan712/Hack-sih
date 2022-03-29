import { useState } from 'react';
import HeaderMainPage from '../components/Header/HeaderPage'
import {
  Box,
  Typography,
  TextField,
  Button
} from '@mui/material';

import {
  BackendCropApi
} from '../Backend';

import axios from "axios";
import styled from 'styled-components';
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

  const [crop, setCrop] = useState(null);

  const [nitrogen, setNitrogen] = useState(null);
  const [phosphorus, setPhosphorus] = useState(null);
  const [pottasium, setPottasium] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [rainfall, setRainfall] = useState(null);
  const [ph, setPh] = useState(null);

  const updateNitrogen = (e) => {
    setNitrogen(e.target.value);
  }

  const updatePhosphorus = (e) => {
    setPhosphorus(e.target.value);
  }

  const updatePottasium = (e) => {
    setPottasium(e.target.value);
  }

  const updateTemperature = (e) => {
    setTemperature(e.target.value);
  }

  const updateHumidity = (e) => {
    setHumidity(e.target.value);
  }

  const updateRainfall = (e) => {
    setRainfall(e.target.value);
  }

  const updatePh = (e) => {
    setPh(e.target.value);
  }

  const submitForm = () => {
    const data = Object.values({
      nitrogen,
      phosphorus,
      pottasium,
      temperature,
      humidity,
      ph,
      rainfall
    });

    axios.post(BackendCropApi(), { crop_attributes: data })
      .then(res => {
        setCrop(res.data.prediction);
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
        }}>
          <Container>

          <img src={img1} alt="" style={{
              width: "15rem",
              marginBottom: "2rem"
            }} />
            <Inner>


              <Typography variant="h5" sx={{
                marginBottom: `50px`,
              }}>
                Find out the most suitable crop to grow in your farm
              </Typography>
              <TextField type="number" placeholder="Nitrogen" variant="outlined" label="Nitrogen" value={nitrogen} onChange={updateNitrogen} />
              <br />

              <TextField type="number" placeholder="Phosphorous" variant="outlined" label="Phosphorous" value={phosphorus} onChange={updatePhosphorus} />
              <br />

              <TextField type="number" placeholder="Pottasium" variant="outlined" label="Pottasium" value={pottasium} onChange={updatePottasium} />
              <br />

              <TextField type="number" placeholder="Temperature" variant="outlined" label="Temperature" value={temperature} onChange={updateTemperature} />
              <br />

              <TextField type="number" placeholder="Humidity" variant="outlined" label="Humidity" value={humidity} onChange={updateHumidity} />
              <br />
              <TextField type="text" placeholder="State" variant="outlined" label="state" />
              <br />

              <TextField type="number" placeholder="pH level" variant="outlined" label="pH level" value={ph} onChange={updatePh} />
              <br />

              <TextField type="number" placeholder="Rainfall (mm)" variant="outlined" label="Rainfall (mm)" value={rainfall} onChange={updateRainfall} />
              <br />

              <Button onClick={submitForm} sx={{
                margin: `20px 0`,
              }}>
                Predict My Crop!
              </Button>
            </Inner>

            <img src={img2} alt="" style={{
              width: "20rem"
            }} />
          </Container>
          {
            crop && (
              <>
                <Button onClick={() => {
                  setCrop(null)
                }} sx={{
                  marginBottom: `20px`,
                }}>
                  Clear Crop
                </Button>
                <Typography variant="h5" sx={{
                  marginBottom: `20px`,
                }}>
                  <div style={{
                    borderRadius: `3px`,
                    backgroundColor: `#E1BBC9`,
                    width: `100%`,
                    padding: `20px`,
                    fontSize: `25px`,
                  }} dangerouslySetInnerHTML={{ __html: "You can grow <b>" + crop + "</b> in your farm." }} />
                </Typography>
              </>
            )
          }
        </Box>
      </Box >
    </ >
  )
}