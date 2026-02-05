import { useState } from "react"

export default function App() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    function handleChange(e) {
        e.preventDefault()

        const {name, value} = e.target
        setFormData(prevData => ({...prevData, [name] : value}))
    }

    function handleSubmit(e) {
        e.preventDefault()

        console.log(formData)
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
                <input placeholder="First Name" required 
                name="firstName" onChange={handleChange} value={formData.firstName} type="text"/>
                <input placeholder="Last Name" required onChange={handleChange} 
                name="lastName" value={formData.lastName} type="text"/>
                <input placeholder="Email Address" required onChange={handleChange} value={formData.email}
                name="email" type="email"/>
                <input placeholder="Password" required onChange={handleChange} name="password" value={formData.password} type="password"/>
                <button type="submit">CLAIM YOUR FREE TRIAL</button>

                <p>By clicking the button you are agreeing to our <span>Terms and Services</span></p>
            </form>
        </div>           
     </main>
        
    )
}