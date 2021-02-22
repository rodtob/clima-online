
const Login =()=> {
   
        const alSubmit = (e)=>{
            e.preventDefault()

            let email = e.target.elements.email.value
            let password = e.target.elements.pass.value

        }
    
    return(

    <form onSubmit={alSubmit} className='login--form'>
        <label>e-mail</label>
        <input type='email' name='email' placeholder='tu mail'/>
        <label>Contraseña</label>
        <input type='password' name='pass' placeholder='password'/>
        <input type='submit'value='login'/>
    </form>

    )
    
    }


export default Login