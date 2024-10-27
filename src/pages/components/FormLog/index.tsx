import styles from "./styles.module.css"

import Link from "next/link";

import { Input } from "../Input/index";
import { Button } from "../Button";

interface PropsInput{
    type: string
    label: string
    index?: string
}

interface PropsLink{
    router: string;
    title: string;
}

interface Props{
    title: string;
    inputs: PropsInput[];
    button: string;
    links: PropsLink[]
}

export function FormLog(props: Props) {
    const { inputs = [], links = [] } = props;

    function renderInput() {
        return inputs.map((input, i) => (
            <Input
                key={i}
                label={input.label}
                index={String(i)}
                type={input.type}
            />
        ));
    }

    function renderLink(){
        return links.map((link, i) => {
            return <Link className={styles.link} key={i} href={link.router}>{link.title}</Link>
        })
    }

    return (
        <div className={styles.formlog}>
           <div className={styles.wrapper}>
                <h1>{props.title}</h1>

                <form action="" className={styles.form}>
                    {renderInput()}

                    <Button title={props.button} link="/"/>
                </form>

                <div className={styles.links}>
                    {renderLink()}
                </div>

           </div>
        </div>
    );
}