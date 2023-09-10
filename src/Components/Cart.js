import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";

import { useAppContext } from '../context';
import remove from '../img/remove (1).png'

export default function Cart() {

    const { sharedState } = useAppContext();
    // const { cartdata } = useAppContext();
    const flattenedArray = sharedState.flat();


    const [data, setData] = useState([]);
    const [selectData, setSelectData] = useState([...flattenedArray]);
    // const uniqueArray = [...new Set(flattenedArray)];


    console.log(flattenedArray, "new data")
    // console.log(cartdata, "cart cart page data")

    const flattenedArrayLength = selectData.length


    const addToCart = () => {
        setData([...selectData]);
        console.log(data, "this is data updated")
    };

    useEffect(() => {
        addToCart();
    }, [selectData])

    const removeData = (dataToRemove) => {
        const updatedState = selectData.filter(item => item !== dataToRemove);
        setSelectData(updatedState);
    };



    return (
        <>
            <Navbar />

            <div className='cart'>
                {data.length === 0 ? (
                     <Link to="/Parts" style={{textDecoration:"none"}}>
                    <h1 style={{ color: "white" }}>Go to Shop</h1>
                    </Link>
                    
                ) : (
                    <div className='cartSection'>
                        <div className="SelectedSec">
                            <h4>Selected Items:</h4>
                            <div className='Cartcard'>
                                {selectData.map((item, index) => (
                                    <div className='cartlist ' key={index}>
                                        <h2>{index + 1} : {item}</h2>
                                        <button className='butRemove' onClick={() => removeData(item)}>
                                            <img src={remove} alt="" />
                                        </button>
                                    </div>
                                ))}
                               
                            </div>

                        </div>
                        <div className="Addtocart">
                            <h4>Cart Items:</h4>
                            <div className='CartcardI'>
                                <div className='cartlistF'>
                                    {data.map((item, index) => (
                                        <div key={index}>

                                            <h4>{index + 1}:  {item} </h4>
                                        </div>
                                    ))}
                                </div>
                                <div className="bottomCart">
                                    <h3 style={{color:"black"}}>Total Items : {flattenedArrayLength}</h3>
                                    <div className="CartButton">
                                        <button onClick={addToCart}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>


        </>
    )
}
