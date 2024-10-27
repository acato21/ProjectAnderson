import { FormLog } from "../components/FormLog"

export default function Login(){

    return(
        <div>
            <FormLog 
            title="Login" 
            
            inputs={[
                    {type: 'email', label: 'Email'},
                    {type: 'password', label: 'Senha'}
                ]
             }

             links={[
                {router: '/RecoverPassword', title: 'Esqueci minha senha'},
                {router: '/Register', title: 'Criar conta'}
             ]}

            button="Entrar" />
        </div>
    )
}