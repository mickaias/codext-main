export function Pricing() {
  return (
    <div className="h-[70vh] p-4 flex">
      <main className="">
        <h1 className="font-bold text-3xl text-center">Choose your best pricing plan</h1>
        <switch></switch>
        <div className="flex-col flex border-2 p-10 m-10">
          <h3 className="text-2xl text-zinc-500">Start-up</h3>
          <strong>$10/mo</strong>
          <span className="text-sm text-zinc-400">Easy Customizable</span>
          <span className="text-sm text-zinc-400">Easy Customizable</span>
          <span className="text-sm text-zinc-400">Easy Customizable</span> 
          <button className="">Try this package</button>
        </div>
      </main>
    </div>
  )
}