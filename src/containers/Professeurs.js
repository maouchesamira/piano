import React from 'react'
import {
    Box,
    Divider,
    Stack,
    Card,
    CardContent, CardMedia,
    Typography
} from '@mui/material'
import './Lesson.css';


export default function Professeurs() {
    return (
        <>
            <Box sx={{ marginLeft: '4%', marginRight: '4%' }}>
                <Stack>
                    <Typography
                        paddingBottom='3%'
                        variant='h6'
                        marginTop='4%'
                        textAlign='center'
                        letterSpacing=".3rem"
                        fontFamily="italic"
                        textTransform="uppercase"
                    >
                        Notre équipe-our team
                    </Typography>
                </Stack>
                <Box sx={{ margin: '4%' }}>
                    <Card sx={{ display: 'flex', border: "none", boxShadow: "none", background: '#e7e7e7' }}>
                        <Box sx={{ display: 'flex', width: "80%", flexDirection: 'column' }}>
                            <CardContent >
                                <Typography
                                    component="div"
                                    variant="h6"
                                    letterSpacing=".rem"
                                    fontFamily="italic"
                                    textTransform="uppercase"
                                >
                                    Victor Razwa
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Professeur de Piano
                                </Typography>
                                <Typography variant='body1'>
                                    Formé au Conservatoire de Musique de Paris,
                                    Victor Razwa se distingue rapidement par sa
                                    technique exceptionnelle et son interprétation profonde.
                                    Ses mentors louent non seulement sa virtuosité, mais aussi
                                    sa capacité à transmettre des émotions à travers chaque
                                    note, faisant de lui un interprète hors pair.
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 185 }}
                            src='https://randomuser.me/api/portraits/men/73.jpg'
                            alt="Live from space album cover"
                        />
                    </Card>
                    <Divider />
                    <Card sx={{ display: 'flex', border: "none", boxShadow: "none", background: '#e7e7e7' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 185 }}
                            src='https://randomuser.me/api/portraits/women/79.jpg'
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', width: "80%", flexDirection: 'column' }}>
                            <CardContent >
                                <Typography
                                    component="div"
                                    variant="h6"
                                    letterSpacing=".rem"
                                    fontFamily="italic"
                                    textTransform="uppercase"
                                >
                                    Eleanor Rodoui
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Professeur de guitare
                                </Typography>
                                <Typography variant='body1'>
                                    Eleanor Rodoui entame ses études musicales au Conservatoire de Musique de Marseille, où elle se distingue rapidement par son talent exceptionnel pour la guitare. Son parcours académique la mène à obtenir un diplôme en pédagogie musicale, définissant ainsi sa vocation d'éducatrice.
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                    <Divider />
                    <Card sx={{ display: 'flex', border: "none", boxShadow: "none", background: '#e7e7e7' }}>
                        <Box sx={{ display: 'flex', width: "80%", flexDirection: 'column' }}>
                            <CardContent >
                                <Typography
                                    component="div"
                                    variant="h6"
                                    letterSpacing=".rem"
                                    fontFamily="italic"
                                    textTransform="uppercase"
                                >
                                    Alex Ramiraz
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Professeur de batterie
                                </Typography>
                                <Typography variant='body1'>
                                    Alex Ramiraz, né le 10 novembre 1980 à Rio de Janeiro, s'est imposé comme une figure éminente dans le monde de l'éducation musicale en tant que professeur de batterie percutante. Dès son plus jeune âge, Gabriel a été attiré par le rythme et la percussion, captivé par la puissance expressive de la batterie.
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 185 }}
                            src='https://randomuser.me/api/portraits/men/76.jpg'
                            alt="Live from space album cover"
                        />
                    </Card>
                    <Divider />
                </Box>
            </Box >
        </>



    )
}


