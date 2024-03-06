import { Button, Box } from '@mui/material';
import { useState } from 'react'

const Content = () => {
  const [price, setPrice] = useState(100);
  const Inc = () => {setPrice((price)=> price + 1)}
  const Dec = () => {setPrice((price)=> price - 1)}
  
  return (
    <Box className='flex items-center justify-center bg-sky-950'
    sx={{ height: `calc(100vh - 120px)`, width: "100wv" }}>
      <>
        <div className="card flex flex-col w-8 items-center">
          <Button variant="outlined" onClick={Inc}>+</Button>
          <p>{price}</p>
          <Button variant="outlined" onClick={Dec}>-</Button>
        </div>
      </>
    </Box>
  )
}

export default Content