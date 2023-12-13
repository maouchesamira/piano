import React from 'react';
import {
    Typography,
    List,
    Box,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import DraftsIcon from '@mui/icons-material/Drafts';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: '5%',
                backgroundColor: 'primary.main'
            }}
        >
            <List sx={{ color: 'white' }}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon sx={{ color: '#e7e7e7' }} />
                        </ListItemIcon>
                        <ListItemText primary="3409 Rue de Bridgers, Paris" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PhoneIcon sx={{ color: '#e7e7e7' }} />
                        </ListItemIcon>
                        <ListItemText primary="+33 454 565 8900" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DraftsIcon sx={{ color: '#e7e7e7' }} />
                        </ListItemIcon>
                        <ListItemText primary="Harmony@hMcompagy.com" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <IconButton sx={{ color: '#e7e7e7' }} aria-label="Instagram" href="#">
                    <InstagramIcon />
                </IconButton>
                <IconButton sx={{ color: '#e7e7e7' }} aria-label="Twitter" href="#">
                    <TwitterIcon />
                </IconButton>
                <IconButton sx={{ color: '#e7e7e7' }} aria-label="Facebook" href="#">
                    <FacebookIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;
