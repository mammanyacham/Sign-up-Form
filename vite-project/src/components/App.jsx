import { useState } from "react"
import errorIcon from "../assets/images/icon-error.svg";

export default function App() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    function handleChange(e) {
        const {name, value} = e.target
        setFormData(prevData => ({...prevData, [name] : value}))
    }

    function handleValidation(){
         
       
        let newErrors = {...errors}

         newErrors.email = !formData.email.includes("@") ? "Invalid Email" : ""
         
           newErrors.password = formData.password.length < 8 ? "Password must be at least 8 charaters"
            : ""

           newErrors.firstName = formData.firstName.length < 2 ? "Invalid First Name" : ""

           newErrors.lastName = formData.lastName.length < 2 ? "Invalid Last Name" : ""

           setErrors(newErrors)

              return Object.values(newErrors).every(error => error === "")
    }

    function handleSubmit(e) {
         e.preventDefault()

         if(handleValidation()){
            console.log("Form submitted successfully:", formData)
         } else{
            console.log("Validation failed:", errors)
         }
    }
    

return(
    <main>
        <div className="intro-div">
                <h1 className="intro">Learn to code by watching others</h1>
                <p className="intro">See how experienced developer solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable</p>
            </div>
             
          <div className="form">
             <div className="purple-note">
                <p>Try it free 7 days <span>then $20/mo. thereafter</span></p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input placeholder="First Name" 
                    name="firstName" onChange={handleChange} value={formData.firstName} type="text"/>
                    <img src={errorIcon} alt="Error Icon"/>
                    {errors.firstName && <p>{errors.firstName}</p>}
                </div>
               
                <input placeholder="Last Name" onChange={handleChange} 
                name="lastName" value={formData.lastName} type="text"/>
                 {errors.lastName && <p>{errors.lastName}</p>}

                <input placeholder="Email Address"  onChange={handleChange} value={formData.email}
                name="email" type="email"/>
                 {errors.email && <p>{errors.email}</p>}

                <input placeholder="Password" onChange={handleChange} name="password" value={formData.password} type="password"/>
                {errors.password && <p>{errors.password}</p>}

                <button type="submit">CLAIM YOUR FREE TRIAL</button>
                 


                <p>By clicking the button you are agreeing to our <span>Terms and Services</span></p>
            </form>
        </div>           
     </main>
        
    )
}