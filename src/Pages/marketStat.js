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
  Button,
  Autocomplete
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
              label: `Market stats for Grains in ${res.data.crop_attributes.state}`,
              data: getIndexValues(res.data.prediction, 2),
              backgroundColor: 'green',
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
            }} />

            <Inner>
              <Typography variant="h5" sx={{
                marginTop: `50px`,
              }}>
                <br />
                <br />
                <br />
                Find out the most profitable crop to grow in your state
              </Typography>
              <br />
              <br />

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={
                  ["Andhra Pradesh",
                    "Arunachal Pradesh",
                    "Assam",
                    "Bihar",
                    "Chhattisgarh",
                    "Goa",
                    "Gujarat",
                    "Haryana",
                    "Himachal Pradesh",
                    "Jammu and Kashmir",
                    "Jharkhand",
                    "Karnataka",
                    "Kerala",
                    "Madhya Pradesh",
                    "Maharashtra",
                    "Manipur",
                    "Meghalaya",
                    "Mizoram",
                    "Nagaland",
                    "Odisha",
                    "Punjab",
                    "Rajasthan",
                    "Sikkim",
                    "Tamil Nadu",
                    "Telangana",
                    "Tripura",
                    "Uttarakhand",
                    "Uttar Pradesh",
                    "West Bengal",
                    "Andaman and Nicobar Islands",
                    "Chandigarh",
                    "Dadra and Nagar Haveli",
                    "Daman and Diu",
                    "Delhi",
                    "Lakshadweep",
                    "Puducherry"]
                }
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Choose state..." />}
                onChange={(event, option) => { setStateName(option) }}
              />

              {/* <TextField type="text" placeholder="Crop Name" variant="outlined" label="Crop Name" value={cropName} onChange={updateCropName} /> */}
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