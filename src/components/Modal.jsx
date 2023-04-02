

import React, {useState} from "react";
import { About } from "./About";


export const Modal = () => {
    console.log("Modal")


    const [show, setShow] = useState(true)

    const handleCloseModal = () => {
        setShow(false)
    } 


    if(!show) {
        return null
    }

    return (
        <>
            <About onCloseModal={handleCloseModal}/>
        </>
    )
}