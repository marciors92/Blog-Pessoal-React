import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Bem-vindo! Welcome!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" >Expresse aqui os seus pensamentos</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://www.travelsunbooking.com/wp-content/uploads/2021/04/Hagrids-Hut-Filming-Location-Glen-Coe_by_Laurence-Norah.jpg" alt="" width="760px" height="560px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;