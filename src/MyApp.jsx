
import React, {useState} from "react"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { CV } from "./components/CV"
import { Modal } from "./components/Modal"

const MyApp = () => {
    console.log("MyApp")

    return (
        <>
            <Modal show={true}/>
            <Main />
            <CV />
        </>
    )
}

export default MyApp