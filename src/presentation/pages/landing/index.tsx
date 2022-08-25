/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

//##Compañeros de grupo Karen Tatiana Jaimes, Andrey Sarria, Poldark Diaz

//##API que se utilizo es el seguiente https://jsonplaceholder.typicode.com/posts/1

import axios from "axios";
import React from "react";
//assets

// style
// component
import Header from '../../components/header/index';
import Footer from '../../components/footer';
import Slider from '../../components/slider';

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function landing() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log('Respuesta del API -->', response.data);
      setPost(response.data.title);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
       <Header />
          <Slider />
          <h1>Respuesta del API</h1>
          <p>{post}</p>
        <Footer />  
    </div>
  );
}