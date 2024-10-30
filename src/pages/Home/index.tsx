import styles from "./styles.module.css"
import Logout from "../../img/sair.png"

import Link from "next/link"
import Image from "next/image"

export default function Home(){
    return(
        <div>
            <header  className={styles.header}>
                <h6>Olá, Igor</h6>

                <Link href="/Login"><Image src={Logout} alt="Botão de LogOut"></Image></Link>
            </header>

            <div className={styles.tableContainer}>
            <div className={styles.title}>Lista de Produtos</div>
            <table className={styles.table}>
            <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Ações</th>
            </tr>
            <tr>
                <td>Celular Moto G 55</td>
                <td>R$ 1600,00</td>
                <td>1</td>
                <td>
                <button className={styles.btnEdit}>Editar</button>
                <button className={styles.btnDelete}>Excluir</button>
                </td>
            </tr>
            </table>
      </div>
        </div>
    )
}