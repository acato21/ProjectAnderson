import { FormLog } from "../components/FormLog"

export default function Register(){
    return(
        <div>
            <FormLog 
            title="Criar Conta" 
            
            inputs={[
                {type: 'text', label: 'Nome'},
                {type: 'email', label: 'Email'},
                {type: 'password', label: 'Senha'},
                {type: 'password', label: 'Confirmar Senha'},
                {type: 'password', label: 'Senha'}
            ]}

             links={[
                {router: '/Login', title: 'Voltar para login'}
             ]}

            btnTitle="Cadastrar" btnLink="/Login"/>
        </div>
    )
}