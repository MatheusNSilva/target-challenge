import React from "react";
import { Container, Box } from "@mui/material";

const PageContainer = ({ children, sx }) => {
    return (
        <Container maxWidth='md'>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 2,
                    ...sx,
                }}
            >
                {children}
            </Box>
        </Container>
    )
};

export default PageContainer;
