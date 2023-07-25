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

      console.log(data);

      res.status(200).json(data)
    } catch (error) {
      console.error('Error fetching data from Naver API:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}