import React from "react";
import { Card, CardMedia, Typography, Box, Divider, Button, Stack, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'
// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Lessons from "./Lessons";
import Professeurs from "./Professeurs";
import Footer from "../components/Footer";
import Ecole from "./Ecole";


export default function Home() {
    return (
        <div>
            <Card sx={{ borderRadius: "0" }}>
                <div style={{ position: "relative" }}>
                    <CardMedia
                        sx={{ height: "550px", width: '100%', opacity: '0.90' }}
                        component="img"
                        image={"./img/main.jpg"}
                        alt="Pianiste" />
                    <Box
                        style={{
                            position: "absolute",
                            color: "white",
                            marginTop: "6%",
                            padding: '1%',
                            top: 5, left: "50%",
                            transform: "translateX(-50%)",
                            width: "60%"
                        }}>
                        <Box sx={{
                            padding: '2%',
                            opacity: '0.7',
                            backgroundColor: 'black',
                            margin: '2 %',
                        }}>
                            <Typography
                                variant="h6"
                                m="4%"
                                pt='2%'
                                letterSpacing=".3rem"
                                fontFamily="italic"
                                textAlign="center"
                                textTransform="uppercase"
                                sx={{
                                    color: "yellow",
                                    '&:hover': {
                                        color: "yellow",
                                    },
                                }}
                            >
                                Nous vouant un culte à la music
                            </Typography>
                            <Divider color="white" />
                            <Typography
                                variant="h6"
                                m="4%"
                                letterSpacing=".3rem"
                                fontFamily="italic"
                                textAlign="center"
                            >
                                Nous l'enseignant avec passion </Typography>
                            <Typography
                                variant="subtitle1"
                                mb="6%" letterSpacing=".2rem"
                                textAlign="center"
                            >
                                Vous pouvez compter sur nous pour vous transmettre un élan de joie à chaque vibration.
                            </Typography>
                            <Stack>
                                <Button>
                                    < Link component={RouterLink} to='/Ecole' >
                                        <KeyboardArrowDownIcon fontSize="large" sx={{ color: "yellow" }} />
                                    </Link>
                                </Button>
                            </Stack>
                        </Box>
                    </Box>
                </div>
            </Card >
            <Ecole />
            <Lessons />
            <Professeurs />
            <Footer />
        </div>
    )
}



