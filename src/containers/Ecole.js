import React from 'react'
import { Grid, Stack, Typography, Container, ImageList, ImageListItem, } from '@mui/material'

export default function Ecole() {
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
                    A propos de nous
                </Typography>
            </Stack>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12} spacing={2}>
                    <Stack>
                        <Typography
                            variant='h6'
                            textAlign='center'
                            letterSpacing=".1rem"
                            fontFamily="italic"
                            color='primary'
                        >
                            Bienvenue à l'École de Musique Harmonie
                        </Typography>
                        <Typography
                            variant='body1'
                            padding='3%'>
                            Nous croyons en la puissance de la musique pour inspirer, éduquer et transformer des vies. Fondée avec une passion profonde pour l'art musical, notre école s'efforce de fournir une expérience d'apprentissage enrichissante et stimulante à tous ceux qui partagent notre amour de la musique.
                        </Typography>
                        <Typography
                            variant='subtitle1'
                            padding='3%'
                        >
                            Ce que nous offrons :
                        </Typography>
                        <Typography variant='body1'
                            padding='3%'>
                            🎹 Cours de Musique Variés :
                            Des cours de piano aux leçons de guitare en passant par les sessions de chant, notre équipe de professeurs talentueux offre une gamme variée de cours adaptés à tous les niveaux, des débutants aux musiciens expérimentés.
                        </Typography>
                        <Typography variant='body1'
                            padding='3%'>
                            🎼 Enseignement Personnalisé : Nous comprenons que chaque élève est unique. C'est pourquoi nos cours sont conçus pour répondre aux besoins individuels, permettant à chacun de progresser à son propre rythme.
                        </Typography>
                        <Typography
                            gutterBottom
                            variant='body1'
                            padding='3%'>
                            🎵 Ateliers et Événements : En plus des cours réguliers, nous organisons des ateliers thématiques et des événements musicaux pour enrichir l'expérience de nos élèves et favoriser un sens de communauté au sein de notre école.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Stack>
                        <ImageList variant="masonry" cols={2} gap={5}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Stack>
                </Grid>


            </Grid>
        </Container>
    )
}

const itemData = [

    {
        img: './img/01.jpg',
        title: 'Books',
    },
    {
        img: './img/02.jpg',
        title: 'Sink',
    },
    {
        img: './img/batterie.jpg',
        title: 'Kitchen',
    },
    {
        img: './img/guitare.jpg',
        title: 'Books',
    },
    {
        img: './img/piano.jpg',
        title: 'Sink',
    },
    {
        img: './img/03.jpg',
        title: 'Kitchen',
    },



];
