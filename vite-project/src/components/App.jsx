export default function App() {
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

            <form>
                <input placeholder="First Name" required type="text"/>
                <input placeholder="Last Name" required type="text"/>
                <input placeholder="Email Address" required type="email"/>
                <input placeholder="Password" required type="password"/>
                <button type="submit">CLAIM YOUR FREE TRIAL</button>

                <p>By clicking the button you are agreeing to our <span>Terms and Services</span></p>
            </form>
        </div>           
     </main>
        
    )
}