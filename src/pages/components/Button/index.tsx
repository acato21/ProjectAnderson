import styles from "./styles.module.css"

import Link from "next/link";

interface Props{
    title: string;
    link: string
}

export function Button({title, link}: Props){
    return(
        <div className={styles.body}>
            <Link href={link}>
                <button className={styles.button} >{title}</button>
            </Link>
        </div>
    )
}