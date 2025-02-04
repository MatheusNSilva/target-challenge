import React from "react";
import PageContainer from "../styles/PageContainer";
import { Typography } from "@mui/material";
import { Questions } from "../components";

const QuestionsPage = () => {
    return (
        <PageContainer sx={{ backgroundColor: '#f5f5f5', borderRadius: 1 }}>
            <Typography style={{ fontWeight: 600 }} variant='h5'>Perguntas</Typography>
            <Questions />
        </PageContainer>
    )
};

export default QuestionsPage;