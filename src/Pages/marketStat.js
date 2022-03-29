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
import img from '../img/agri.png';
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
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Inner = styled.div`
  display: flex;
  flex-direction: column;

`

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
        width: `100%`,
        height: `100vh`
      }}>
        <Box sx={{
          display: `grid`,
          placeItems: `center`,
          paddingTop: `50px`,
          // height: `100vh`,
          // marginTop: `1.123rem`
        }}>
          <Container>

            <img src={img} alt="" style={{
              width: "30vw"
            }}/>

            <Inner>
              <Typography variant="h5" sx={{
                marginTop: `50px`,
              }}>
                <br />
                <br />
                <br />
                Find out the most suitable crop to grow in your farm
              </Typography>
              <br />
              <br />


              <TextField type="text" placeholder="State Name" variant="outlined" label="State Name" value={stateName} onChange={updateStateName} sx={{
                margin: `0`,
              }} />
              <br />

              <TextField type="text" placeholder="Crop Name" variant="outlined" label="Crop Name" value={cropName} onChange={updateCropName} />
              <br />

              <Button onClick={submitForm} sx={{
                margin: `20px 0`,
              }}>
                Get Market Stats!
              </Button>
            
            </Inner>
          
              
          </Container>
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
                <Box sx={{
                  width: `80%`,
                  margin: `0 10%`
                }}>
                  <Bar data={marketStats} />
                </Box>
              </>
            )
          }
        </Box>
      </Box >
    </>
  )
}