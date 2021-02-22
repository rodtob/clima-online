import {Component} from 'react'



class Login extends Component {
    constructor(props){
        super(props)
        this.alSubmit = (e)=>{
            e.preventDefault()

            let email = e.target.elements.email.value
            let password = e.target.elements.pass.value

            if (!localStorage[email]){
                alert('no existe')


                let data = localStorage.getItem('uTiempo')
       
                let dataParse = JSON.parse(data)

                   if (data) {
                       let infoApasar = {password:password,uTiempo:dataParse}
                       let infoEnString = JSON.stringify(infoApasar)
                       localStorage.setItem(email,infoEnString)
                       sessionStorage.setItem('usuarioActivo', email)
                   }

            }else{
                alert('existe')
                let usuario = localStorage.getItem(email)

                let parseado = JSON.parse(usuario)
                console.log(parseado.password)
                console.log(parseado.uTiempo)
            
                if( parseado.password == password){
                    sessionStorage.clear()
                    sessionStorage.setItem('usuarioActivo',email)
                    localStorage.removeItem('uTiempo')
                    let nuevoTiempo = parseado.uTiempo
                    localStorage.setItem('uTiempo',JSON.stringify(nuevoTiempo))
                } else{
                    alert('contraseña no valida')
                }
            }
        }
    }

    componentDidUpdate(){
        let usuarioActivo = sessionStorage.getItem('usuarioActivo')
        let localUsuario = localStorage.getItem(usuarioActivo)
        let uTiempo =localStorage.getItem('uTiempo')
        let parseLocalUsuario = JSON.parse(localUsuario)
        let infoApasar = {password: parseLocalUsuario.password, uTiempo:uTiempo}

        localStorage.removeItem(usuarioActivo)
        localStorage.setItem(usuarioActivo, JSON.stringify(infoApasar) )
        localStorage.removeItem('uTiempo')
        localStorage.setItem('uTiempo',uTiempo)


    }


    render(){
        return(
    <form onSubmit={this.alSubmit} className='login--form'>
        <label>e-mail</label>
        <input type='email' name='email' placeholder='tu mail'/>
        <label>Contraseña</label>
        <input type='password' name='pass' placeholder='password'/>
        <input type='submit'value='login'/>
    </form>
    )
}}

export default Login