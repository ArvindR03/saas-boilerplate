import Image from "next/image";

// remember that any point you call from api has to be async so SSR

export default async function Home() {

  // example mongodb call
  // try {

  //   const res = await fetch("http://localhost:3000/api/endpoint", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json' //also add clerk id into header
  //     },
  //     body: JSON.stringify({
  //       //data here
  //     })
  //   })

  //   if (!res.ok) {
  //     console.error("Failed to fetch")
  //   } else {
  //     console.log("Success")
  //     return res.json()
  //   }

  // } catch (e) {
  //   console.error("Error fetching from api", e)
  // }


  return (
    <main>
      home
    </main>
  );
}
