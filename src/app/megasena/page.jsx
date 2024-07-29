import Megasena from "@/components/megasena";

export default function Megasena01() {
  
    return (
      <>
          <Megasena />
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