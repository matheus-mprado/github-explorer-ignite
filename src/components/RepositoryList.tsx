import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useEffect, useState } from "react";


interface Repository{
    name:string;
    id:number;
    description:string;
    html_url:string;
}

export function RepositoyList(){

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/matheus-mprado/repos')
        .then(response=>response.json())
        .then(data => setRepositories(data))
    },[]);

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.id} repository={repository} />     
                })}             
            </ul>
        </section>
    );
}