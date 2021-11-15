import { Button, Typography } from '@mui/material'

import { Link } from 'react-router-dom'
import React from 'react'

export default function Home() {
    return (
        <div>
            <Typography variant='h4'color='error'>please set</Typography>
            <Button variant='contained' size='large' component={Link}to='/Blog'>Blog</Button>
        </div>
    )
}
