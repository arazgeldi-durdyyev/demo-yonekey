import React from 'react'
import { ScaleLoader } from 'react-spinners';

const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderColor: "red",
};

const Loader = () => {
    const color = '#CF0909'
  return (
    <ScaleLoader 
        color={color} 
        cssOverride={override} 
        loading={true}
        height={49}
        width={5}
        aria-label='Loading Spinner'
        data-testid='loader'
    />
  )
}

export default Loader