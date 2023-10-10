import Image from "next/image"

export function Header() {
  return (
    <div className="bg-zinc-300/60 p-6 flex-1">
      <header className="flex justify-around">

        <h2 className="font-semibold">Codext</h2>

        <nav className="">
          <a href="#" className="p-2 hover:text-zinc-400">Home</a>
          <a href="#services" className="p-2 hover:text-zinc-400">Service</a>
          <a href="#" className="p-2 hover:text-zinc-400">Pricing</a>
          <a href="#tesminoniais" className="p-2 hover:text-zinc-400">Tesminoniais</a>
          <a href="#" className="p-2 hover:text-zinc-400">Blog</a>
        </nav>

        <button className="bg-blue-700 p-3 m-2 rounded-md text-zinc-50 hover:bg-blue-900">Free Trial</button>

      </header>

      <main className='justify-center flex items-center h-[70vh] '>
        <div className='flex flex-col gap-2 w-1/4'>
          <h2 className="text-4xl font-bold ">Codext one of the best system in <span className="text-purple-600">SAAS</span>.</h2>
          <span className="text-zinc-400 text-base inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe similique enim accusantium nobis distinctio suscipit ex voluptatum, quaerat dolorum ea maxime minus voluptate vitae quidem ab possimus a rem? Error?</span>
          <div className="">
            <button className="bg-blue-700 p-3 text-white rounded-md hover:bg-blue-900">Try a live demo</button>
          </div>
        </div>

        <div className="w-1/4">
          <Image src="/codext.svg" alt='codext' width={550} height={450} />
        </div>
      </main>
    </div>
  )
}