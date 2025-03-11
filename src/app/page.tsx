import Link from "next/link";
import "./home.css"
import Person from "@/components/person";

export default function Home() {
  const lista = [
    {
      name: "Bruno",
      age: 28
    },
    {
      name: "Breno",
      age: 24
    },
    {
      name: "Luiz",
      age: 25
    }
    ,
    {
      name: "jessica",
      age: 25
    }
  ]


  return (
    <div>
      <h1>ola mundo!!!</h1>

      <Link href="/login">
        <button>Login</button>
      </Link>


      <div className="container">
        {
          lista.map((item) => (

            <Person nome={item.name} idade={item.age} key={item.name} />
          ))
        }
      </div>
    </div>
  );
}
