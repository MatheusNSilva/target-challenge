import React from 'react';
import { questions } from '../../mock/questions';
import { Typography, List, ListItem } from '@mui/material';

const Questions = () => {
    return (
        <div>
            <div style={{ marginBottom: 10 }}>
                <Typography variant="h6" style={{ fontWeight: 600, color: "#f57320" }}>Exercício 1</Typography>
                <Typography variant="subtitle1">{questions[0].statement?.main}</Typography>
                <List 
                    sx={{ 
                        border: "1px solid #f36b14c2",
                        borderRadius: 1, 
                        color: "#272121"
                    }}>
                    <ListItem>{questions[0].statement?.list?.itemA}</ListItem>
                    <ListItem>{questions[0].statement?.list?.itemB}</ListItem>
                    <ListItem>{questions[0].statement?.list?.itemC}</ListItem>
                </List>
                <Typography variant="subtitle1">{questions[0].statement?.sub}</Typography>
            </div>
            <div style={{ marginBottom: 10 }}>
                <Typography variant="h6" style={{ fontWeight: 600, color: "#f57320" }}>Exercício 2</Typography>
                <Typography variant="subtitle1" style={{ marginBottom: 5 }}>{questions[1].statement?.main}</Typography>
                <Typography variant="subtitle1">{questions[1].statement?.sub}</Typography>
            </div>
            <div style={{ marginBottom: 10 }}>
                <Typography variant="h6" style={{ fontWeight: 600, color: "#f57320" }}>Exercício 3</Typography>
                <Typography variant="subtitle1">{questions[2].statement?.main}</Typography>
                <List>
                    <ListItem>{questions[2].statement?.list?.itemA}</ListItem>
                    <ListItem>{questions[2].statement?.list?.itemB}</ListItem>
                    <ListItem>{questions[2].statement?.list?.itemC}</ListItem>
                </List>
                <Typography variant="subtitle1">{questions[2].statement?.subList?.obs}</Typography>
                <List>
                    <ListItem>{questions[2].statement?.subList?.subItemA}</ListItem>
                    <ListItem>{questions[2].statement?.subList?.subItemB}</ListItem>
                </List>
            </div>
            <div style={{ marginBottom: 10 }}>
                <Typography variant="h6" style={{ fontWeight: 600, color: "#f57320" }}>Exercício 4</Typography>
                <Typography variant="subtitle1">{questions[3].statement?.main}</Typography>
                <List>
                    <ListItem>{questions[3].statement?.list?.itemA}</ListItem>
                    <ListItem>{questions[3].statement?.list?.itemB}</ListItem>
                    <ListItem>{questions[3].statement?.list?.itemC}</ListItem>
                    <ListItem>{questions[3].statement?.list?.itemD}</ListItem>
                    <ListItem>{questions[3].statement?.list?.itemE}</ListItem>
                </List>
                <Typography variant="subtitle1">{questions[3].statement?.sub}</Typography>
            </div>
            <div style={{ marginBottom: 10 }}>
                <Typography variant="h6" style={{ fontWeight: 600, color: "#f57320" }}>Exercício 5</Typography>
                <Typography variant="subtitle1" style={{ marginBottom: 5 }}>{questions[4].statement?.main}</Typography>
                <Typography variant="subtitle1">{questions[4].statement?.list?.obs}</Typography>
                <List>
                    <ListItem>{questions[4].statement?.list?.itemA}</ListItem>
                    <ListItem>{questions[4].statement?.list?.itemB}</ListItem>
                </List>
            </div>
        </div>
    )
};

export default Questions;
