export default function Home() {
  
  return (
    <>
    <h1 style={{
    display: "flex", justifyContent: "center"
    }}> Testes em Next.js </h1>
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      gap: "5px"
    }}>
     <a href="/contador"><button>Contador</button></a>
     <a href="/megasena"><button>Megasena</button></a>
    </div>
    </>
  );
}
