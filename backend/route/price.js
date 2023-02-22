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

module.exports = router