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

import axios from "axios";

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
          <Typography variant="h5" sx={{
            marginBottom: `50px`,
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