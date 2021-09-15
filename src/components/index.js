import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

import {makeStyles} from '@material-ui/styles';
const useStyles=makeStyles({
    particlesCanvas:{
        position:"absolute"
    }
})
export default function Home() {
    const classes=useStyles()
    return (
        <>
        
        
            <Header/>
            
        </>
    )
}
