import React from 'react';
import axios from 'axios';
import './AddProducts.css'

const AddProducts = () => {


    const info = new FormData();
    console.log(info);
    const onBlur = (e) => {
        e.preventDefault()
        info[e.target.name] = e.target.value;
        console.log(info);

    }

    const addProductBtn = (e) => {

        fetch('https://lit-cliffs-57240.herokuapp.com/addProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info)
        })

    }

    const handleImageUploadRed = event => {
        event.preventDefault()
        const imageData = new FormData();
        imageData.set('key', 'e1f5a6095b7d9d00411e4c204ddebf7f')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                info[event.target.name] = response.data.data.display_url;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleImageUploadBlue = event => {
        event.preventDefault()
        const imageData = new FormData();
        imageData.set('key', 'e1f5a6095b7d9d00411e4c204ddebf7f')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                info[event.target.name] = response.data.data.display_url;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleImageUploadYellow = event => {
        event.preventDefault()
        const imageData = new FormData();
        imageData.set('key', 'e1f5a6095b7d9d00411e4c204ddebf7f')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                info[event.target.name] = response.data.data.display_url;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <form className="p-3">
            <h1>Add Products</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label fs-4">Product Name*</label>
                <input onBlur={onBlur} type="text" name="productName" className="form-control" id="exampleFormControlInput1" placeholder="Product Name" required />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label fs-4">Product Price*</label>
                <input onBlur={onBlur} type="number" name="productPrice" className="form-control" id="exampleFormControlInput1" placeholder="Product Price" required />
            </div>
            <div className="mb-3">
                <label className="form-label fs-4">Product Size*</label>
                <select onChange={onBlur} className="form-select" name="productSize" aria-label="Default select example" required>
                    <option>Open this select menu</option>
                    <option defaultValue="Small">Small</option>
                    <option defaultValue="Medium">Medium</option>
                    <option defaultValue="Large">Large</option>
                </select>
            </div>

           
            <div className="mb-3">
                <label htmlFor="formFileLg" className="form-label fs-4">Product Photo* (color: red)</label>
                <div className="input-group mb-3">
                    <input onChange={handleImageUploadRed} name="redImage" type="file" className="form-control" id="inputGroupFile02" required />
                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="formFileLg" className="form-label fs-4">Product Photo* (color: Blue)</label>
                <div className="input-group mb-3">
                    <input onChange={handleImageUploadBlue} name="blueImage" type="file" className="form-control" id="inputGroupFile02" required />
                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="formFileLg" className="form-label fs-4">Product Photo* (color: Yellow)</label>
                <div className="input-group mb-3">
                    <input onChange={handleImageUploadYellow} name="yellowImage" type="file" className="form-control" id="inputGroupFile02" required />
                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fs-4">Product Description*</label>
                <textarea onBlur={onBlur} className="form-control" name="productDescription" id="exampleFormControlTextarea1" rows="3" placeholder="Product Description" required></textarea>
            </div>
            <button onClick={addProductBtn} className="btn btn-success w-25 p-3">SUBMIT</button>
        </form>
    );
};

export default AddProducts;