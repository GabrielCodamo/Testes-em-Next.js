import Contador from "@/components/contador";

export default function Contador01() {
  
  return (
    <>
        <Contador />
        <div style={{
          display: "flex",
          justifyContent: 'center',
          alignContent: "center",
          marginTop: "15px"
        }}>
           <a href="/"><button>Voltar</button></a> 
        </div>
    </>
  );
}