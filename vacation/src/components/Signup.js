import React from "react";

const Signup = () => {
    return (
        <div>
            <div>
                <h2>Sign Up</h2>
                <form>
                    <label>
                        Enter Email
                        <br />
                        <input id="email" type="email" />
                        <br />
                    </label>
                    <label>
                        Create Password
                        <br />
                        <input id="password" type="text" />
                        <br />
                    </label>
                    <label>
                        Confirm Password
                        <br />
                        <input id="confirm_password" type="text" />
                        <br />
                    </label>
                    <button>Sign Up</button>
                    <br />
                    <p>Already have an account? Sign in here.</p>
                </form>
            </div>
        </div>
    )
}

export default Signup