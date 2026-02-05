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
    
/*
 const styles = 
 errors.firstName ? {border: "2px solid red" } : undefined;
 errors.lastName ? {border: "2px solid red" } : undefined;
 errors.email ? {border: "2px solid red" } : undefined;
 errors.password ? {border: "2px solid red" } : undefined;
 */

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
                    name="firstName" onChange={handleChange} value={formData.firstName} type="text" style={errors.firstName ? {border: "2px solid red" } : undefined}/>
                    {errors.firstName && <img src={errorIcon} alt="Error Icon"/>}
                    {errors.firstName && <p className="err-msg">{errors.firstName}</p>}
                </div>
               
               <div className="input-group">
                    <input placeholder="Last Name" onChange={handleChange} 
                    name="lastName" value={formData.lastName} type="text"style={errors.lastName ? {border: "2px solid red" } : undefined}/>
                    {errors.lastName &&  <img src={errorIcon} alt="Error Icon"/>}
                    {errors.lastName && <p className="err-msg">{errors.lastName}</p>}
                </div>


                <div className="input-group">
                    <input placeholder="Email Address"  onChange={handleChange} value={formData.email}
                    name="email" type="email" style={errors.email ? {border: "2px solid red" } : undefined}/>
                     {errors.email && <img src={errorIcon} alt="Error Icon"/>}
                    {errors.email && <p className="err-msg">{errors.email}</p>}
                 </div>

                <div className="input-group">
                    <input placeholder="Password" onChange={handleChange} name="password" value={formData.password} type="password" style={errors.password ? {border: "2px solid red" } : undefined}/>
                     {errors.password && <img src={errorIcon} alt="Error Icon"/>}
                    {errors.password && <p className="err-msg">{errors.password}</p>}
                </div>

                
                     <button type="submit">CLAIM YOUR FREE TRIAL</button>
                
                 


                <p>By clicking the button you are agreeing to our <span>Terms and Services</span></p>
            </form>
        </div>           
     </main>
        
    )
}