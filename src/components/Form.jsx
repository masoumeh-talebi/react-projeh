import { useState } from "react";
import Data from "../Data";

const Form = ({ data, setData }) => {

    const [nameValue, setNameValue] = useState("")
    const [familyValue, setFamilyValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [phoneValue, setPhoneValue] = useState("")

    function submit(e) {
        e.preventdefult();

        const newUser = {
            name: nameValue,
            family: familyValue,
            email: emailValue,
            phone: phoneValue
        }
        let newData = [...data];
        newData.push(newUser);
        setData(newData)
    }

    return (
        <div className="form-list">
            <form onSubmit={submit} className="form" id="form" action="">
                <div className="formcontrols">
                    <label htmlFor="name">نام</label>
                    <input onChange={(e) => setNameValue(e.target.value)} type="text" id="name" />

                </div>
                <div className="formcontrols">
                    <label htmlFor="family">نام خانوادگی</label>
                    <input onChange={(e) => setFamilyValue(e.target.value)} type="text" id="family" />
                </div>
                <div className="formcontrols">
                    <label htmlFor="email">ایمیل</label>
                    <input onChange={(e) => setEmailValue(e.target.value)} type="text" id="email" />
                </div>
                <div className="formcontrols">
                    <label htmlFor="phone">تلفن</label>
                    <input onChange={(e) => setPhoneValue(e.target.value)} type="text" id="phone" />
                </div>
                <button type="submit">عضویت</button>
            </form>
        </div>
    )
}

export default Form;