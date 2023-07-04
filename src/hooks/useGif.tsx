import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY: string | undefined = process.env.REACT_APP_GIPHY_API_KEY;
const url: string = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

interface GifData {
  data: {
    images: {
      downsized_large: {
        url: string;
      };
    };
  };
}

interface GifHookResult {
  gif: string;
  loading: boolean;
  fetchData: (tag?: string) => Promise<void>;
}

const useGif = (tag?: string): GifHookResult => {
  const [gif, setGif] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (tag?: string): Promise<void> => {
    setLoading(true);

    const { data } = await axios.get<GifData>(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  };

  useEffect(() => {
    fetchData('car');
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;

