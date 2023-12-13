import React from 'react'
import { Stack, Typography } from '@mui/material'

export default function Title() {
    return (
        <>
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
                    Nos cours-ours courses
                </Typography>
            </Stack>
        </>
    )
}
