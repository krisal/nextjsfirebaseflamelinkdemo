import React, { useState } from 'react';

const Form = (props) => {
    const [state, setState] = useState({
        productName: '',
        description: '',
        price: 0,
        discount: 0,
        stockStatus: 0,
        images: [],
        isValid: false,
    });

    const checkValidity = () => {
        return state.productName !== ''
            && state.description !== ''
            && state.price > 0;
    }

    const handleUpdateState = (event) => {
        const newState = Object.assign({}, state);
        newState[event.target.name] = event.target.value;
        newState.isValid = checkValidity();
        setState(newState);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (state.isValid) {
            // console.log("ADDING NEW...")
            props.firebase
                .doAddNewProduct(state, () => {
                    console.log("added");
                });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form__group">
                <label>Product name</label>
                <input
                    type="text"
                    name="productName"
                    value={state.productName}
                    onChange={handleUpdateState}
                />
            </div>

            <div className="form__group">
                <label>Description</label>
                <textarea
                    name="description"
                    rows={10}
                    value={state.description}
                    onChange={handleUpdateState}
                />
            </div>

            <div className="form__group">
                <label>Price</label>
                <input
                    type="number"
                    name="price"
                    value={state.price}
                    onChange={handleUpdateState}
                />
            </div>

            <div className="form__group">
                <label>Discount in percentage</label>
                <input
                    type="number"
                    name="discount"
                    value={state.discount}
                    onChange={handleUpdateState}
                />
            </div>

            <div className="form__group">
                <label>Stockstatus</label>
                <input
                    type="number"
                    name="stockStatus"
                    value={state.stockStatus}
                    onChange={handleUpdateState}
                />
            </div>

            <button type="submit">Add</button>
            <style jsx>
                {`
                    .form__group {
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 30px;
                    }

                    input {
                        border-radius: 5px;
                        background: #f4f8ff;
                        border: 1px solid #ccc;
                        padding: 20px;
                        color: #282c34;
                        letter-spacing: 1px;
                        line-height: 18px;
                        font-size: 16px;
                    }

                    textarea {
                        border-radius: 5px;
                        background: #f4f8ff;
                        border: 1px solid #ccc;
                        resize: none;
                        padding: 20px;
                        color: #282c34;
                        letter-spacing: 1px;
                        line-height: 18px;
                        font-size: 16px;
                    }

                    label {
                        margin-bottom: 10px;
                        text-transform: capitalize;
                        font-size: 18px;
                    }
                `}
            </style>
        </form>
    );
}

export default Form;