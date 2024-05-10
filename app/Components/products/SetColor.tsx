'use client'

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";
import React from "react";

interface SetColorProps{
    images: SelectedImgType[],
    cartProduct: CartProductType,
    handColorSelect: (value: SelectedImgType) => void
}

const SetColor: React.FC<SetColorProps> = ({
    images,
    cartProduct,
    handColorSelect,
}) => {
    return ( 
        <div className="flex gap-4 items-center">
            <span className="font-semibold">COLOR:</span>
            
        </div>
     );
}
 
export default SetColor;