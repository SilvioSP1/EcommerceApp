import React from 'react'
import { Box } from '@mui/material'
import { Outlet, Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import ReplyIcon from '@mui/icons-material/Reply';
import { Colors } from "../styles/theme/theme";


const LayaoutSecundary = () => {
  return (
    <>
        <Link to={`/`} aria-label="Go to my Cart">
            <Button variant='contained' sx={{ width: "8rem", margin: "10px", borderRadius:'1rem', backgroundColor:Colors.primary }}>
                <ReplyIcon sx={{color:Colors.white, fontSize:'2.5rem'}}/>
                    <Typography sx={{ display:'flex', color:Colors.white}}>
                        Back
                    </Typography>
            </Button>
        </Link>
        <Box>
            <Outlet />
        </Box>
    </>
  )
}

export default LayaoutSecundary