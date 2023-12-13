import * as React from 'react'
import { Stack, Box, Typography, Grid, Container, CardMedia, Divider } from '@mui/material';


export default function Professeurs() {
    return (
        <Container>
            <Stack sx={{
                padding: '5%',

            }}>
                <Typography
                    variant='h6'
                    textAlign='center'
                    letterSpacing=".3rem"
                    fontFamily="italic"
                    textTransform="uppercase"
                >
                    Nos professeurs-ours teachers
                </Typography>
            </Stack>
            <Box>
                <Grid container
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        padding: '3%'
                    }}>
                    <Grid
                        item md={4}
                        xs={12}
                    >
                        <CardMedia
                            sx={{
                                height: "13rem", width: '80%', padding: '2%', justifyContent: "center",
                                alignItems: "center",
                            }}
                            component="img"
                            src='https://randomuser.me/api/portraits/men/73.jpg'
                            alt="Pianiste"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
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
                    </Grid>
                </Grid>
                <Divider sx={{ marginLeft: "11%", marginRight: '11%' }} />
                {/* ************************************************************************* */}
                <Grid container sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    padding: '3%'
                }}>
                    <Grid
                        item md={4}
                        xs={12}
                    >
                        <CardMedia
                            sx={{
                                height: "13rem", width: '80%', padding: '2%',
                            }}
                            component="img"
                            src='https://randomuser.me/api/portraits/women/79.jpg'
                            alt="Pianiste"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
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
                    </Grid>
                </Grid>
                <Divider sx={{ marginLeft: "11%", marginRight: '11%' }} />
                {/* ********************************************************************************************************* */}
                <Grid container sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    padding: '3%'
                }}>
                    <Grid
                        item md={4}
                        xs={12}
                    >
                        <CardMedia
                            sx={{
                                height: "13rem", width: '80%', padding: '2%',
                            }}
                            component="img"
                            src='https://randomuser.me/api/portraits/men/76.jpg'
                            alt="Pianiste"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
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
                    </Grid>
                </Grid>
                <Divider sx={{ marginLeft: "11%", marginRight: '11%' }} />
            </Box>
        </Container>

    );
}