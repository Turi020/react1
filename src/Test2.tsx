import React, {useState,useEffect} from 'react'

type Props = {

    title: string;
}

type Users ={
    name: string;
    lastname: string;
}

export default function Test2({title}: Props) {
    const [Users, setUsers] = useState<Users[]>([]);
    const [Visible, setVisible] = useState(true);

    useEffect(()=>{

        fetchUsers();
    },[])


    const fetchUsers = async ()=>{

        useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/users ").then((res) => res.json().then((data)=>
                {
                  setUsers(data);
                })
              );
              },[]);
    }
  return (
    <div style={{backgroundColor:Visible? "blue": "red"}}>
        <h1>
        {title}    
        </h1>
        {Users?.map((Users: Users)=>(<div key={Users.name}>{Users.lastname}</div>
    ))}
        
        
        <button onClick={() => setVisible(!Visible)}>Toggle</button>
        
        
        
        </div>
  )
}
