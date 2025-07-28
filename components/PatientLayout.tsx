'use client'
import { Box, Container, Paper, Stack, Typography } from './ui'
import React from 'react'

interface PatientLayoutProps {
  title: string
  children: React.ReactNode
}

export default function PatientLayout({ title, children }: PatientLayoutProps) {
  return (
    <Box sx={{ bgcolor: 'background.default', py: 4, minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 3 }}>
            {title}
          </Typography>
          <Stack spacing={3}>{children}</Stack>
        </Paper>
      </Container>
    </Box>
  )
}
