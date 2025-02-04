import { PageContainer } from "../styles";
import { Typography } from "@mui/material";

const HomePage = () => {
    return (
        <PageContainer>            
            <Typography variant="h3">Bem-vindo ao Caderno de Exercícios</Typography>
            <Typography variant="subtitle1">Use a navegação acima para acessar as perguntas e respostas.</Typography>
        </PageContainer>
    )
};

export default HomePage;
