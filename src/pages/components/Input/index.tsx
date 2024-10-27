import styles from "./styles.module.css"

interface Props{
    type: string
    index: string
    label: string
}


export function Input(props: Props){
    return (
        <div>
            <label htmlFor={props.index}>{props.label}</label>
            <input className={styles.input} type={props.type} id={props.index}/>
        </div>
    )
}