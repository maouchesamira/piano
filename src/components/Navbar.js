import { Drawer, Box, Typography, IconButton, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
// import PianoIcon from '@mui/icons-material/Piano';
// import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
// import EmailIcon from '@mui/icons-material/Email';
// import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { useState } from 'react';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <Box bgcolor='#800000' sx={{ borderRadius: "0" }}>
            <IconButton
                sx={{ marginLeft: '2%' }}
                color='secondary'
                size='large'
                edge='start'
                aria-label='logo'
                onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton >
            <Drawer
                // Changer la couleur du drawer
                PaperProps={{
                    sx: {
                        backgroundColor: 'white',
                        color: "black",
                        opacity: '0.7'

                    }
                }}

                anchor='left'
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}>
                <Box pl={10} width='18rem' textAlign='left' role='presentation'>
                    <Typography variant='h6' component='div'>
                        <Stack spacing={2} direction={'column'} marginTop={15}>
                            {/* <Link sx={{ color: 'pink', underline: 'none' }}>
                                <HomeIcon
                                    color="secondary"
                                    sx={{ marginBottom: -.3, marginRight: 2 }}
                                    fontSize='small' />
                                Accueil
                            </Link> */}
                            <Link component={RouterLink} to="/" underline='none' color="black" fontFamily='italic' onClick={() => setIsDrawerOpen(false)}>
                                {/* <HomeIcon

                                    sx={{ marginBottom: -.3, marginRight: 2 }}
                                    fontSize='small' /> */}
                                Accueil
                            </Link>
                            <Link component={RouterLink} to='/Ecole' underline='none' color="black" fontFamily='italic' onClick={() => setIsDrawerOpen(false)}>
                                A propos de nous
                            </Link>
                            <Link component={RouterLink} to='/Lessons' underline='none' color="black" fontFamily='italic' onClick={() => setIsDrawerOpen(false)}>
                                Lessons
                            </Link>
                            <Link component={RouterLink} to='/Professeurs' underline='none' color="black" fontFamily='italic' onClick={() => setIsDrawerOpen(false)}>
                                Professeurs
                            </Link>
                            <Link component={RouterLink} to='/Contact' underline='none' color="black" fontFamily='italic' onClick={() => setIsDrawerOpen(false)}>
                                Contact
                            </Link>
                        </Stack>
                    </Typography>
                </Box>
            </Drawer>
            {/* <IconButton
                sx={{}}
                color='primary'
                size='large'
                edge='end'>
                < MusicNoteIcon />
            </IconButton > */}
        </Box >
    )
}

export default Navbar

