import React from "react";
import { Link } from "react-router-dom";
import { 
    AppBar,
    Toolbar,
    Typography,
    Button
 } from "@mui/material";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" component={Link} to="/">Caderno</Button>
                <Button color="inherit" component={Link} to="/questions">Perguntas</Button>
                <Button color="inherit" component={Link} to="/answers">Respostas</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
