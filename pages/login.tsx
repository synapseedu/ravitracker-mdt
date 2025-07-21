'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
} from '@mui/material'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (username === 'ingrid' && password === 'boa78qs98!') {
            localStorage.setItem('loggedIn', 'true')
            router.push('/patients')
        } else {
            setError('Invalid credentials')
        }
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                p: 2,
            }}
        >
            <Card sx={{ maxWidth: 360, width: '100%' }}>
                <CardContent>
                    <Typography variant="h5" component="h1" align="center" gutterBottom>
                        Ravitracker Login
                    </Typography>
                    <TextField
                        fullWidth
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        margin="normal"
                        autoFocus
                        required
                    />
                    <TextField
                        fullWidth
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        required
                    />
                    {error && (
                        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                            {error}
                        </Typography>
                    )}
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Log in
                    </Button>
                </CardContent>
            </Card>
        </Box>
    )
}
