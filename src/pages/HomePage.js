import { PageContainer } from "../styles";
import { Typography } from "@mui/material";
// import WorkBook from "../../public/images/workbook.jpeg";

const HomePage = () => {
    return (
        <PageContainer sx={{ backgroundColor: '#f5f5f5', borderRadius: 1, height: "100vh" }}>         
            <Typography variant="h4" sx={{ color: "#f57320", marginTop: 5 }}>Bem-vindo ao Caderno de Exercícios</Typography>
            <Typography variant="subtitle1">Use a navegação acima para acessar as perguntas e respostas.</Typography>
            <img 
                src="/images/workbook.png" 
                alt="" 
            />
        </PageContainer>
    )
};

export default HomePage;
