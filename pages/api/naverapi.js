import React from 'react';
import axios from 'axios';

export default async function handler(req, res) {

  if (req.method === 'GET') {
    try {
      const response = await axios.get('https://openapi.naver.com/v1/search/local.json', {
        headers: {
          'X-Naver-Client-Id': process.env.NAVER_API_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.NAVER_API_KEY_SECRET,
        },
        params: req.query,
      });

      const data = response.data;

      // console.log(data);

      if (data.items && data.items.length > 0) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: "No places found" });
      }

    } catch (error) {
      console.error('Error fetching data from Naver API:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}