import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const CategoryItem = ({name, eachCategory}) => {
  return (
    <div>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls='panel1a-content' id='#' sx={{
                    backgroundColor: "rgb(241, 241, 241) !important"
            }}>
                <Typography variant='p'>{name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>Place for some text</p>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default CategoryItem