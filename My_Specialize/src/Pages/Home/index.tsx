import styles from './styles.module.css'

function Home(){
    return(
        <div className={styles.container}>
            <h1>Lista de Presença</h1>
            <input type="text" placeholder="Digite o nome do aluno"/>
            <button type="button">Adicionar</button>
        </div>
    )
}

export default Home