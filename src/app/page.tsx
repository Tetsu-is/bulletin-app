'use client'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const tweetArray = [
    {
      id: 1,
      title: 'test1',
    },
    {
      id: 2,
      title: 'test2',
    },
    {
      id: 3,
      title: 'test3',
    },
  ]
  
  const [tweetArrayState, setTweetArrayState] = useState([]);

  const fetchTweet = async () => {
    try {
      // Make a GET request to the /ping endpoint
      const response = await axios.get('http://localhost:8080/tweets');
  
      // Handle the response
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error('Error making API request!!!!:', error);
    }
  }

  const submitTweet = async () => {
    const uniqueId = uuidv4();
    try {
      // Make a GET request to the /ping endpoint
      const response = await axios.post('http://localhost:8080/tweets', {
        id: uniqueId,
        title: 'test4',
      });
  
      // Handle the response
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error('Error making API request!!!!:', error);
    }
  }

  return (
    <article className='flex flex-col items-center'>
      <h1 className='text-x font-bold'>Home</h1>
      {tweetArray.map((tweet) => (
        <p key={tweet.id}>{tweet.title}</p>
      ))
      }
      <button onClick={fetchTweet}>Tweet取得</button>
      <button onClick={() => submitTweet()}>SUBMIT RANDOM</button>
    </article>
  )
}

export default Home