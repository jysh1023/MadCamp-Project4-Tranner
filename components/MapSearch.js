import { useState } from "react";
import SearchBar from "../components/SearchBar"
import axios from "axios";

const MapSearch = ({ onLocationSelect }) => {
  const [suggestedKeywords, setSuggestedKeywords] = useState([]);

  const handleSearch = async (keyword) => {
    console.log(keyword);

    if(keyword.trim() != '') {
      try {
        // const response = await axios.get('https://openapi.naver.com/v1/search/local.json', {
        //   headers: {
        //     'X-Naver-Client-Id': process.env.NAVER_API_KEY_ID,
        //     'X-Naver-Client-Secret': process.env.NAVER_API_KEY_SECRET,
        //   },
        //   params: {
        //     query: keyword,
        //   }
        // })

        const response = await axios.get('/api/naverapi', {
          params: {
            query: keyword,
          }
        })

        console.log(response.status);

        if (response.status === 200) {
          const data = await response.data;
          console.log(data);
          setSuggestedKeywords(data.places.map((place) => place.name));
        } else {
          setSuggestedKeywords([])
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
        setSuggestedKeywords([]);
      }
    } else {
      setSuggestedKeywords([]);
    }
  };

  const selectLocationHandler = async (address) => {

    // const response = await axios.get('https://openapi.naver.com/v1/search/local.json', {
    //   headers: {
    //     'X-Naver-Client-Id': process.env.NAVER_API_KEY_ID,
    //     'X-Naver-Client-Secret': process.env.NAVER_API_KEY_SECRET,
    //   },
    //   params: {
    //     query: address,
    //     display: 5,
    //   },
    // })
    const response = await axios.get('/api/naverapi', {
      params: {
        query: address,
        display: 5,
      }
    })
      .then(() => {
        const data =  response.data;
        if (data.addresses && data.addresses.length > 0) {
          const { x, y } = data.addresses[0];
          onLocationSelect(new window.naver.maps.LatLng(y, x));
        }
      })
      .catch((error) => {
        console.error('Error fetching location data:', error);
      });

  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {suggestedKeywords.map((keyword, index) => (
          <li key={index} onClick={selectLocationHandler}>
            {keyword}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MapSearch;