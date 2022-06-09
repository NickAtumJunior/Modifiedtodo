import { Stack } from '@mui/material'
import { Paper } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'

function ServerError() {
  return (
    <Grid>
         <Stack spacing={3}>
             <Paper>
                 <h1>Server Error</h1>
             </Paper>
         </Stack>
    </Grid>
  )
}

export default ServerError