import { FormLog } from "../components/FormLog"

export default function ForgotPassword(){
    return (
        <div>
            <FormLog 
            title="Recuperar Senha" 
            
            inputs={[
                    {type: 'email', label: 'Email'}
                ]
             }

             links={[
                {router: '/Login', title: 'Voltar para login'}
             ]}

            btnTitle="Enviar link de recuperação" 
            btnLink="/Login"
            />
        </div>
    )
}