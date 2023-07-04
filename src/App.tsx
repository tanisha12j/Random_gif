import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return(

    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="bg-white rounded-lg text-center font-bold w-11/12 mt-[40px] mx-auto px-10 py-2 text-3xl">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center mt-[30px] gap-y-10 ">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
