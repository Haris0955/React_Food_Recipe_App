import React from 'react'
import { useEffect ,useState } from 'react';
import { styled } from 'styled-components';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Veggie = () => {
  const [veggie, setVeggie]= useState([]);

  useEffect(()=>{
    getVeggie();
  },[])

  const getVeggie= async()=>{

    const check= localStorage.getItem('veggie');

    if(check){
      setVeggie(JSON.parse(check));
    }else{
      const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.React_App_API_Key}&number=8&tags=vegetarian`);

      const data = await api.json();
      
      localStorage.setItem("veggie",JSON.stringify(data.recipes));

      setVeggie(data.recipes);
    }

   

  }
  return (
    <div><Wrapper>
    <h3>Our Vegetarian Picks</h3>
      <Splide options={
        {perPage:3,
          arrows:false,
          pagination:false,
          gap:"5rem",
          drag:"free",

        }
      }>
      {veggie.map((recipie)=>{
       return(
       <SplideSlide key={recipie.id}>
       <Card>
          <p>{recipie.title}</p>
          <img src={recipie.image} alt={recipie.title}></img>
          <Gradient></Gradient>
        </Card>
       </SplideSlide>
       );
      })}
      </Splide>
      </Wrapper></div>
  )
}
const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card= styled.div`
min-height:25rem;
border-radius :2rem;
overflow:hidden;
position: relative;

  img{
    border-radius :2rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit: cover;

  }

  p{
    position: absolute;
    z-index:10;
    left:5%;
    bottom:0%;
   
    color:white;
    width:90%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justfy-content: center;
    align-items: center;
      }
`; 

const Gradient =styled.div`
  z-index:3;
  position: absolute;
  width:100%;
  height:100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6));
`
export default Veggie