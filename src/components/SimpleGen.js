import React, {useState, useEffect} from 'react'
import {Button, TextField, Checkbox} from '@material-ui/core'
import './SimpleGen.css'

const SimpleGen = () => {
    const [len, setLen] = useState(null)
    const [value, setValue] = useState(null)
    let lowCase = "abcdefghijklmnopqrstuvxyz";
    let upCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    let Numbers = "0123456789";
    let SpecialChar = "$&(-*+[]@#^)%_!?№";
    const geterateX = () => {
        const upper = document.getElementById('upper')
        const lower = document.getElementById('lower')
        const num = document.getElementById('num')
        const sym = document.getElementById('sym')
        let newLower = lowCase.split('')
        let newUpper = upCase.split('')
        let newNum = Numbers.split('')
        let newSym = SpecialChar.split('')
        let xs = []

        if (upper.checked === true) {
            xs.push(newLower[Math.floor(Math.random() * lowCase.length)])
        }
        if (lower.checked === true) {
            xs.push(newUpper[Math.floor(Math.random() * upCase.length)])
        }
        if (num.checked === true) {
            xs.push(newNum[Math.floor(Math.random() * Numbers.length)])
        }
        if (sym.checked === true) {
            xs.push(newSym[Math.floor(Math.random() * SpecialChar.length)])
        }
        return xs[Math.floor(Math.random() * xs.length)]
    }
    const onGen = () => {
        const upper = document.getElementById('upper')
        let res = ''

        for (let i = 0; i < parseInt(len); i++) {
            res += geterateX()
        }
        setValue(res)
    }
    return (
        <div className="simple-gen">
            <div className="simple-orient">
            <h1>Simple password generator</h1>
            <input value={value} className="simple-inp" placeholder="Your password"/>
            <h2>What size should password be?</h2>
            <input value={len} onChange={(e) => setLen(e.target.value)} className="simple-inp" placeholder="Enter size of password" />
            <div>
                <p>Should contains uppercase letters?</p>
                <Checkbox id="upper" />
                <p>Should contains lowercase letters?</p>
                <Checkbox id="lower" />
                <p>Should contains numbers?</p>
                <Checkbox id="num" />
                <p>Should contains special symbols?</p>
                <Checkbox id="sym" /><br />
                <Button onClick={onGen} variant="contained" color="secondary">GENERATE</Button>
            </div>
            </div>
        </div>
    )
}

export default SimpleGen