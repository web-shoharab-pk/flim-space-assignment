import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar';
import './Cart.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);




const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


const Cart = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([])
    console.log(products);
    useEffect(() => {
        fetch('https://lit-cliffs-57240.herokuapp.com/cartProduct')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])

    return (
        <div>
            <Navbar></Navbar>

            <TableContainer className="mt-5 container" component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product Name</StyledTableCell>
                            <StyledTableCell>Price</StyledTableCell>
                            <StyledTableCell>Size</StyledTableCell>
                            <StyledTableCell>Color</StyledTableCell>
                            <StyledTableCell>Order Now</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <StyledTableRow key={product._id}>
                                <StyledTableCell>{product.name} </StyledTableCell>
                                <StyledTableCell>${product.price}</StyledTableCell>
                                <StyledTableCell>{product.size}</StyledTableCell>
                                <StyledTableCell>{product.color}</StyledTableCell>
                                <StyledTableCell>
                                    <Tooltip title="Not Implement" arrow>
                                        <Button variant="contained" color="secondary">Arrow</Button>
                                    </Tooltip>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Cart;