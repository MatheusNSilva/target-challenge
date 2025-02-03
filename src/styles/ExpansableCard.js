import React from "react";
import { 
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpansableCard = ({ title, children, sx }) => {
    return (
        <Box sx={{ width: '100%', marginBottom: 2, ...sx}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                <Typography variant="subtitle1">{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default ExpansableCard;
