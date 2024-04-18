import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col h-[95vh]">
<h3 className=" text-3xl text-center mt-2">HOME PAGE</h3>
<p className=" text-center my-2">Teste de responsividade</p>

<div className=" flex h-full w-full justify-around items-center w-screen400:flex-col">
<span className=" h-28 w-28 bg-green-500 rounded-md"></span>
<span className=" h-28 w-28 bg-blue-500 rounded-md h-screen400:bg-black"></span>
<span className=" h-28 w-28 bg-yellow-500 rounded-md"></span>
</div>



    </main>
  );
}
