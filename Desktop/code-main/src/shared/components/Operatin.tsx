import { ArrowRight, FileCode2, GitCompare, FolderLock, RadioTower } from 'lucide-react'

export function Operatin() {
  return (

    <div id="tesminoniais" className='h-[70vh] p-3 flex-1 flex items-center justify-center bg-zinc-300/60'>
      <main className='w-1/2 '>
        <h1 className='text-3xl font-bold text-center'>We Provides best feature <br></br> for customar</h1>

        <div className='grid grid-cols-4 gap-4 mt-32'>
          <div className='flex-col box-content p-4 border-2 bg-white ml-5 rounded-md m-5 flex items-center hover:border-black'>
            <div className='border-2 rounded-full m-4 w-16 h-16 flex items-center justify-center'>
              <FileCode2 />
            </div>

            <h2 className='text-2xl font-semibold'>Clean Code</h2>
            <span className='text-zinc-400 text-sm inline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore </span>
            <ArrowRight />
          </div>
          <div className='flex-col box-content p-4 border-2 bg-white ml-5 rounded-md m-5 flex items-center hover:border-black'>

            <div className='border-2 rounded-full m-4 w-16 h-16 flex items-center justify-center'>
              <GitCompare />
            </div>
            <h2 className='text-2xl font-semibold'>Data Analytic</h2>
            <span className='text-zinc-400 text-sm inline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore </span>
            <ArrowRight />
          </div>
          <div className='flex-col box-content p-4 border-2 bg-white ml-5 rounded-md m-5 flex items-center hover:border-black'>
            <div className='border-2 rounded-full m-4 w-16 h-16 flex items-center justify-center'>
              <FolderLock />
            </div>
            <h2 className='text-2xl font-semibold'>Fully Secured</h2>
            <span className='text-zinc-400 text-sm inline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore </span>
            <ArrowRight />
          </div>
          <div className='flex-col box-content p-4 border-2 bg-white ml-5 rounded-md  m-5 flex items-center hover:border-black'>
            <div className='border-2 rounded-full m-4 w-16 h-16 flex items-center justify-center'>
              <RadioTower />
            </div>
            <h2 className='text-2xl font-semibold'>24/7 Support</h2>
            <span className='text-zinc-400 text-sm inline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore </span>
            <ArrowRight />
          </div>

        </div>
      </main>

    </div>
  )
}