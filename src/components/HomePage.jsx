import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:5000')

function HomePage() {
    const num1 = useRef()
    const num2 = useRef()
    const num3 = useRef()
    const num4 = useRef()
    const buttonRef = useRef()

    useEffect(() => {
        num1.current.focus()
    }, [])

    const handlefocus = (e, c) => {
        if (c.current.value.length > 2)
            e.current.focus()
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        socket.emit("New_Values", {
            input1: num1.current.value,
            input2: num2.current.value,
            input3: num3.current.value,
            input4: num4.current.value,
        })
    }


    return (
        <div className='container row m-2'>
            <h2>Enter your inputs here</h2>
            <form className='row' onSubmit={handleSubmit}>
                <div className='col-lg-6'>
                    <div>
                        <label className='px-2' htmlFor="input1">Input 1</label>
                        <input className='w-20 m-2' type={"Number"} id='input1' onChange={() => handlefocus(num2, num1)} ref={num1} />
                    </div>
                    <div>
                        <label className='px-2' htmlFor="input2">Input 2</label>
                        <input className='w-20 m-2' onChange={() => handlefocus(num3, num2)} ref={num2} type={"Number"} id='input2' />
                    </div>
                    <div>
                        <label className='px-2' htmlFor="input3">Input 3</label>
                        <input className='w-20 m-2' onChange={() => handlefocus(num4, num3)} ref={num3} type={"Number"} id='input3' />
                    </div>
                    <div>
                        <label className='px-2' htmlFor="input4">Input 4</label>
                        <input className='w-20 m-2' onChange={() => handlefocus(buttonRef, num4)} ref={num4} type={"Number"} id='input4' />
                    </div>
                </div>
                <div className='col-lg-6 d-flex align-items-center'>
                    <button type='submit' ref={buttonRef} className='btn m-2 btn-primary '>Update</button>
                </div>

            </form>
        </div>

    )
}

export default HomePage