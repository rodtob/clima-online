const Login =(pais, ciudad)=> {
   
        const alSubmit = (e)=>{
            e.preventDefault()

            let email = e.target.elements.email.value

            localStorage.setItem(email, JSON.stringify({pais:pais,ciudad:ciudad}))
            sessionStorage.setItem('usuarioActivo', email)
            }
      
    
    return(

    <form onSubmit={alSubmit} className='login--form'>
        <label>e-mail</label>
        <input type='email' name='email' placeholder='tu mail'/>
        {/* <label>Contraseña</label>
        <input type='password' name='pass' placeholder='password'/> */}
        <input type='submit'value='login'/>
    </form>

    )
    
    }


export default Login