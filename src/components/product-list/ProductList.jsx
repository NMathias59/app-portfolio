import React from 'react'
import "./ProductList.css"

import Product from "../product/Product"
import { products } from "../../data"

export default function ProductList() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">
                    Mes projets
                </h1>
                <p className="pl-desc">
                    Voici mon protfolio de tous se que j'ai apris concevoire
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}
