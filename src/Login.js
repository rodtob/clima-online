const Login =(props)=> {
   
        const alSubmit = (e)=>{
            e.preventDefault()

            let email = e.target.elements.email.value
            sessionStorage.setItem('usuarioActivo', email)
            props.onChange(false)
            }
      
    
    return(

    <form onSubmit={alSubmit}  className='login--form'>
        <label>e-mail</label>
        <input type='email' className='elinput' name='email' placeholder='tu mail'/>
        <label>Contraseña</label>
        <input type='password' name='pass' placeholder='password'/>
        <input type='submit' className= 'submit'value='LOGIN'/>
    </form>

    )
    
    }


export default Login