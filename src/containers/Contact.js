import React, { useState } from 'react';
import { TextField, Button, Container, Stack, Box, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './Lesson.css';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: '', email: '', message: '' };

        // Validation du nom
        const nameRegex = /^[a-zA-ZÀ-ú\-\s]*/;
        if (!nameRegex.test(formData.name)) {
            newErrors.name = 'Le nom est invalide';
            isValid = false;
        }

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'L\'adresse email est invalide';
            isValid = false;
        }

        // Validation du message
        if (formData.message.trim() === '') {
            newErrors.message = 'Le message ne peut pas être vide';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //logique d'envoi du formulaire
        if (validateForm()) {
            // Envoyer le formulaire
            navigate('/');
            console.log('Formulaire valide. Envoyez les données :', formData);
        } else {
            console.log('Le formulaire contient des erreurs. Veuillez les corriger.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Stack>
                <Typography
                    paddingBottom='4%'
                    variant='h6'
                    marginTop='4%'
                    textAlign='center'
                    letterSpacing=".3rem"
                    fontFamily="italic"
                    textTransform="uppercase"
                >
                    Contactez-nous
                </Typography>
            </Stack>
            <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Nom"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={formData.name}
                        onChange={handleChange}
                        helperText={errors.name}
                    />

                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Adresse e-mail"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        helperText={errors.email}
                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        multiline
                        rows={4}
                        id="message"
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        helperText={errors.message}
                    />
                    <Button type="submit" variant='contained' sx={{ mt: 3, mb: 2 }} endIcon={<SendIcon />}>
                        Envoyer
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Contact;
