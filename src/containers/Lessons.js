import React from 'react'
import {
    Box, Grid, Stack, Avatar, Typography, Card, CardContent,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider
} from '@mui/material'
import './Lesson.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function Lessons() {
    return (
        <>
            <Stack>
                <Typography
                    variant='h6'
                    textAlign='center'
                    letterSpacing=".3rem"
                    fontFamily="italic"
                    padding="2%"
                    marginTop='3%'
                    marginBottom="2%"
                    textTransform="uppercase"
                >
                    Nos cours-ours courses
                </Typography>
            </Stack>
            <Box ml={5} mr={5} mt={2} mb={4}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Card elevation={24} sx={{ borderRadius: "0", padding: "2px", backgroundColor: "#f6f6f6" }}>
                            <CardContent>
                                <Stack bgcolor='#800000' color="White" p="1.5%">
                                    <Typography
                                        variant="subtitle1"
                                        fontFamily="italic"
                                        textAlign="center"
                                        letterSpacing='.2rem'
                                    >
                                        Lesson de Piano
                                    </Typography>
                                </Stack>
                                <Stack spacing={2} mt="5%" sx={{ position: 'center' }}>
                                    <List
                                        sx={{
                                            width: '100%',
                                            maxWidth: 360,
                                        }}
                                    >
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src='https://randomuser.me/api/portraits/men/73.jpg'
                                                    alt='Victor Razwa'
                                                ></Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Professeur" secondary="Victor Razwa" />
                                        </ListItem>
                                        <Divider sx={{ backgroundColor: '#800000' }} variant="inset" component="li" />
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar sx={{ backgroundColor: '#800000' }} >
                                                    <CalendarMonthIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Horaire" secondary="Sam/Dim, 10h-12h" />
                                        </ListItem>
                                        <Divider sx={{ backgroundColor: '#800000' }} variant="inset" component="li" />
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar sx={{ backgroundColor: '#800000' }}>
                                                    <MonetizationOnIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Prix" secondary="15$/h" />
                                        </ListItem>
                                    </List>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card elevation={24} sx={{ borderRadius: "0", padding: "2px", backgroundColor: "#f6f6f6" }}>
                            <CardContent>
                                <Stack bgcolor='#800000' color="White" p="1.5%">
                                    <Typography
                                        variant="subtitle1"
                                        fontFamily="italic"
                                        textAlign="center"
                                        letterSpacing='.2rem'
                                    >
                                        Lesson de Guitare
                                    </Typography>
                                </Stack>
                                <Stack spacing={2} mt="5%" sx={{ position: 'center' }}>
                                    <List
                                        sx={{
                                            width: '100%',
                                            maxWidth: 360,
                                        }}
                                    >
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src='https://randomuser.me/api/portraits/women/79.jpg'
                                                    alt='Eleanor Rodoui'
                                                ></Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Professeur" secondary="Eleanor Rodoui" />
                                        </ListItem>
                                        <Divider sx={{ backgroundColor: '#800000' }} variant="inset" component="li" />
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar sx={{ backgroundColor: '#800000' }} >
                                                    <CalendarMonthIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Horaire" secondary="Sam/Dim, 10h-12h" />
                                        </ListItem>
                                        <Divider sx={{ backgroundColor: '#800000' }} variant="inset" component="li" />
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar sx={{ backgroundColor: '#800000' }}>
                                                    <MonetizationOnIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Prix" secondary="15$/h" />
                                        </ListItem>
                                    </List>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card elevation={24} sx={{ borderRadius: "0", padding: "2px", backgroundColor: "#f6f6f6" }}>
                            <CardContent>
                                <Stack bgcolor='#800000' color="White" p="1.5%">
                                    <Typography
                                        variant="subtitle1"
                                        fontFamily="italic"
                                        textAlign="center"
                                        letterSpacing='.2rem'
                                    >
                                        Lesson de Batterie
                                    </Typography>
                                </Stack>
                                <Stack spacing={2} mt="5%" sx={{ position: 'center' }}>
                                    <List
                                        sx={{
                                            width: '100%',
                                            maxWidth: 360,
                                        }}
                                    >
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src='https://randomuser.me/api/portraits/men/76.jpg'
                                                    alt='Alex Ramiraz'
                                                ></Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Professeur" secondary="Alex Ramiraz" />
                                        </ListItem>
                                        <Divider sx={{ backgroundColor: '#800000' }} variant="inset" component="li" />
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar sx={{ backgroundColor: '#800000' }} >
                                                    <CalendarMonthIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Horaire" secondary="Sam/Dim, 15h-17h" />
                                        </ListItem>
                                        <Divider sx={{ backgroundColor: '#800000' }} variant="inset" component="li" />
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar sx={{ backgroundColor: '#800000' }}>
                                                    <MonetizationOnIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Prix" secondary="14$/h" />
                                        </ListItem>
                                    </List>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>



    )
}
