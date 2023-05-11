import {useState, useEffect} from 'react'

import styles from './styles.module.css'

import Card from '../../components/Card/index'

interface Student {
    name: string,
    time: string,
}

function Home(){
    const [studentName, setStudentName] = useState<string>('')
    const [studentsList, setStudentsList] = useState<Student[]>([])
    const [userAdmin, setUserAdmin] = useState({name: '', avatar: ''})
    
    const handleAddStudent = () => {
        
        if(studentName.trim() === ''){
            return;
        }

        const NewStudent = {
            name: studentName,
            time: new Date().toLocaleDateString("pt-br",{
                hour: '2-digit',
                minute:'2-digit',
                second:'2-digit',
            })
        }

        setStudentsList((prevStudents) => [...prevStudents, NewStudent])
        setStudentName('')
    }

    useEffect(() =>{
        fetch('https://api.github.com/users/albertallan-rar')
        .then(response => response.json())
        .then(data => {
            setUserAdmin({ 
                name: data.name,
                avatar: data.avatar_url,
            })       
        })
    })

    return(
        <div className={styles.container}>
            
            <header>
                <h1>Lista de Presença</h1>
                <div>
                    <strong>{userAdmin.name}</strong>
                    <img src={userAdmin.avatar} alt="Foto perfil" />
                </div>
                
            </header>
            <input 
            type="text" 
            placeholder="Digite o nome do aluno"
            value={studentName}
            onChange={e => setStudentName(e.target.value)}
            />
            <button type="button" onClick={handleAddStudent}>Adicionar</button>
            
            {
                studentsList.map((student,index) => <Card key={index} name={student.name} time={student.time}/>)
            }
            

        </div>
    )
}

export default Home