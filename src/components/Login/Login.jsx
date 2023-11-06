export default function Login() {
    return (
        <div className="form-container">
			<p className="title">Login</p>
			
			<form className="form">
				<div className="input-group">
					<label htmlFor="username">Username</label>
					<input type="text" name="username" id="username" placeholder=""></input>
				</div>
		
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder=""></input>
                    <div className="forgot">
                        <a rel="noopener noreferrer" href="/">Forgot Password?</a>
                    </div>
                </div>
            
                <button className="sign">Sign in</button>
            </form>
	
            <p className="signup">Don&apos;t have an account?
                <a rel="noopener noreferrer" href="/register" className=""> Sign up</a>
            </p>
        </div>
    )
}