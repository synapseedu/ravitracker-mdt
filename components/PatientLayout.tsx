'use client'
import { Box, Container, Paper, Stack, Typography } from './ui'
import React from 'react'

interface PatientLayoutProps {
  title: string
  children: React.ReactNode
}

export default function PatientLayout({ title, children }: PatientLayoutProps) {
  return (
    <Box sx={{ backgroundColor: 'background.default', padding: '32px 0', minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Paper sx={{ padding: 24, borderRadius: 2 }}>
          <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, marginBottom: 24 }}>
            {title}
          </Typography>
          <Stack spacing={3}>{children}</Stack>
        </Paper>
      </Container>
    </Box>
  )
}
