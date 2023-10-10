import { Linkedin, Github } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-zinc-400 border-t border-zinc-300 p-6 flex items-center justify-around ">

      <div className="flex flex-col items-center gap-3">
        <h2>Resources</h2>

        <p className='items-center justify-center flex'>&copy; 2023 Mickaias/nunes</p>
      </div>

      
    </footer>
  )
}