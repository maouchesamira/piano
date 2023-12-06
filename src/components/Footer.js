import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

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

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <IconButton color="secondary" aria-label="Instagram" href="#">
                    <InstagramIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="Twitter" href="#">
                    <TwitterIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="Facebook" href="#">
                    <FacebookIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;
