import React, { useContext } from 'react';
import { UserContaxt } from '../../App';
import Navbar from '../Home/Navbar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';

const Details = () => {
    const [pd, setPd] = useContext(UserContaxt);
    const { productName, productPrice, productSize, productDescription, blueImage, redImage, yellowImage } = pd;
 

    const [value, setValue] = React.useState('blue');
    const [sizeValue, setSizeValue] = React.useState('medium');

    const cartDetails = {
        name: productName,
        price: productPrice,
        size: sizeValue,
        color: value,
        description: productDescription
    }
    console.log(cartDetails);
    let imageURL = blueImage;
    if (value === "red") {
        imageURL = redImage;
    } else if (value === "blue") {
        imageURL = blueImage;
    } else if (value === "yellow") {
        imageURL = yellowImage;
    }

    let imageSize = productSize;
    if (sizeValue === "small") {
        imageSize = '70%';
    } else if (sizeValue === "medium") {
        imageSize = '80%';
    } else if (sizeValue === "large") {
        imageSize = '100%';
    }
    const handleChangeColor = (event) => {
        setValue(event.target.value); 
    };

    const handleChangeSize = (event) => {
        setSizeValue(event.target.value); 
    };

    const cartAddBtn = () => {
        fetch('http://localhost:5500/productAddToCart', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cartDetails)
        })
        .then(result => {
            alert('Product added your cart')
        })
    }


    return (
        <main>
            <Navbar></Navbar>
            <section className="container">
                <div className="row mt-5">
                    <div className="col-md-6 p-3  shadow">
                        <div className="m-3">
                            <img style={{ height: imageSize, width: imageSize }} className="img-fluid" src={imageURL} alt="" />
                        </div>
                        <div className="d-flex justify-content-around">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Color</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeColor}>
                                <FormControlLabel value="blue" control={<Radio />} label="Blue" />
                                <FormControlLabel value="red" control={<Radio />} label="Red" />
                                <FormControlLabel value="yellow" control={<Radio />} label="Yellow" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Size</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={sizeValue} onChange={handleChangeSize}>
                                <FormControlLabel value="small" control={<Radio />} label="Small" />
                                <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                                <FormControlLabel value="large" control={<Radio />} label="Large" />
                            </RadioGroup>
                        </FormControl>
                        </div>
                        
                    </div>
                    <div className="col-md-6 p-5 shadow">
                        <h2>Product Details</h2>
                        <br />
                        <h4>Product Name: <small>{productName}</small></h4>
                        <br />
                        <h4>Product Price: $<small>{productPrice}</small></h4>
                        <br />
                        <h4>Product Size: <small>{productSize}</small></h4>
                        <br />
                        <h4>Product Description: <br /> <small> {productDescription}</small></h4>
                        <br /><br />
                        <Button onClick={cartAddBtn} variant="contained" color="primary">
                            Add Cart
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Details;