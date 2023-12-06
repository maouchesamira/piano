import React from "react";
import { Card, CardMedia, Typography, Box, Divider, Button, Stack, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'
// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Lessons from "./Lessons";
import Professeurs from "./Professeurs";
import Footer from "../components/Footer";


export default function Home() {
    return (
        <div>
            <Card sx={{ borderRadius: "0" }}>
                <div style={{ position: "relative" }}>
                    <CardMedia
                        sx={{ height: "540px", width: '100%', opacity: '0.90' }}
                        component="img"
                        image={"./img/main.jpg"}
                        alt="Pianiste" />
                    <div
                        style={{
                            position: "absolute",
                            color: "white",
                            marginTop: "7%",
                            top: 5, left: "50%",
                            transform: "translateX(-50%)",
                        }}>
                        <Box sx={{
                            opacity: '0.7',
                            backgroundColor: 'black',
                            padding: '5%'
                        }}>
                            <Typography
                                variant="h6"
                                m="4%"
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
                            <Typography variant="subtitle1" mb="6%" letterSpacing=".2rem">
                                Vous pouvez compter sur nous pour vous transmettre un élan de joie à chaque vibration.
                            </Typography>
                            <Stack>
                                <Button>
                                    < Link component={RouterLink} to='/lessons' >
                                        <KeyboardArrowDownIcon fontSize="large" sx={{ color: "yellow" }} />
                                    </Link>
                                </Button>
                            </Stack>
                        </Box>
                    </div>
                </div>
            </Card >
            <Lessons />
            <Professeurs />
            <Footer />
        </div>
    )
}



