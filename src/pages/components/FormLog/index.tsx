import { Input } from "../Input/index";
import { Button } from "../Button";

interface PropsInput{
    type: string
    label: string
    index?: string
}

interface Props{
    title: string;
    inputs: PropsInput[];
    button: string;
}


export function FormLog(props: Props){
    return(
        <div>
            <h1>{props.title}</h1>

            <form action="">
                {props.inputs.map((input, i) => {
                    props.index = i;
                    
                    return <Input
                        key={i}
                        {...input}
                    />
                })}

                <Button title={props.button}/>
            </form>
        </div>
    )
}