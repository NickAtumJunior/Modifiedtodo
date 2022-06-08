import { Stack } from '@mui/material'
import { TextField } from '@mui/material'
import { Paper } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'

function Login() {
  return (
    <Grid>
        <Stack spacing={2}>
            <Paper>
                 <TextField variant='outlined'
                  name='username'
                  label='Username'
                 />
            </Paper>
        </Stack>
    </Grid>
  )
}

export default Login