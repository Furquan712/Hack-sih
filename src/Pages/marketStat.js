import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import HeaderMainPage from '../components/Header/HeaderPage'
import { useState } from 'react';

import {
  Box,
  Typography,
  TextField,
  Button
} from '@mui/material';

import {
  BackendMarketApi
} from '../Backend';

import axios from "axios";

export default function Crop() {

  const [marketStats, setMarketStats] = useState(null);

  const [stateName, setStateName] = useState(null);
  const [cropName, setCropName] = useState(null);

  const updateStateName = (e) => {
    setStateName(e.target.value);
  }

  const updateCropName = (e) => {
    setCropName(e.target.value);
  }

  function getIndexValues(data, index = 0) {
    let indexValues = [];
    for (let i = 0; i < data.length; i++) {
      indexValues.push(data[i][index]);
    }
    return indexValues;
  }

  const submitForm = () => {
    const data = {
      'state': stateName,
      'crop': cropName || ''
    };

    axios.post(BackendMarketApi(), { crop_attributes: data })
      .then(res => {
        setMarketStats({
          labels: getIndexValues(res.data.prediction, 1),
          datasets: [
            {
              label: `Market stats for crops in ${res.data.crop_attributes.state}`,
              data: getIndexValues(res.data.prediction, 2),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
          ]
        })
      })
      .catch(err => {
        alert(err);
      })
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

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
            marginTop: `50px`,
          }}>
            Find out the most suitable crop to grow in your farm
          </Typography>

          <TextField type="text" placeholder="State Name" variant="outlined" label="State Name" value={stateName} onChange={updateStateName} />
          <br />

          <TextField type="text" placeholder="Crop Name" variant="outlined" label="Crop Name" value={cropName} onChange={updateCropName} />
          <br />

          <Button onClick={submitForm} sx={{
            margin: `20px 0`,
          }}>
            Get Market Stats!
          </Button>

          {
            marketStats && (
              <>
                <Button onClick={() => {
                  setMarketStats(null)
                }} sx={{
                  marginBottom: `20px`,
                }}>
                  Clear Market Stats
                </Button>
                <Bar data={marketStats} />
              </>
            )
          }
        </Box>
      </Box >
    </>
  )
}