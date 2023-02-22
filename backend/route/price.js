const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/", async (req, res) => {
    const apiKey = '450faf7f-05ac-4f3c-97a3-273f94c66463';
    const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
    
    const requestOptions = {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
    };
    
    try {
      const response = await fetch(apiUrl, requestOptions);
      if (response.status === 200) {
        const data = await response.json();
        res.status(200).send(data);
      } else if (response.status === 500) {
        res.status(500).send('Server error');
      } else {
        res.status(response.status).send('HTTP error');
      }
    } catch (error) {
      console.log('Error:', error);
      res.status(500).send('Internal server error');
    }
});

router.get("/name/:name", async (req, res) => {
  const name = req.params.name;
  const apiKey = '450faf7f-05ac-4f3c-97a3-273f94c66463';
  const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
  
  const requestOptions = {
    headers: {
      'X-CMC_PRO_API_KEY': apiKey,
    },
  };
  try {
    const response = await fetch(apiUrl, requestOptions);
    if (response.status === 200) {
      const data = await response.json();
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].name === name) {
          res.status(200).send(data.data[i]);
          break;
        }else{
          res.status(404).send('Not found');
          break;
        }
        }

    } else if (response.status === 500) {
      res.status(500).send('Server error');
    } else {
      res.status(response.status).send('HTTP error');
    }
  } catch (error) {
    console.log('Error:', error);
    res.status(500).send('Internal server error');
  }
});

router.get("/name/:name", async (req, res) => {
  const name = req.params.name;
  const apiKey = '450faf7f-05ac-4f3c-97a3-273f94c66463';
  const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
  
  const requestOptions = {
    headers: {
      'X-CMC_PRO_API_KEY': apiKey,
    },
  };
  try {
    const response = await fetch(apiUrl, requestOptions);
    if (response.status === 200) {
      const data = await response.json();
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].name === name) {
          res.status(200).send(data.data[i]);
          break;
        }else{
          res.status(404).send('Not found');
          break;
        }
        }

    } else if (response.status === 500) {
      res.status(500).send('Server error');
    } else {
      res.status(response.status).send('HTTP error');
    }
  } catch (error) {
    console.log('Error:', error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router