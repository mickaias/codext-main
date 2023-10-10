import { Shield, Brush, FolderCog } from "lucide-react";
import Image from "next/image";

export function Services( ) {
  return (
    <div id="services" className="flex-1 flex h-[80vh] justify-center items-center ">
      <div className="w-2/5">
        <Image src="/grafic.svg" alt="grafic" width={950} height={950} />
      </div>

      <div className="flex flex-col gap-6 w-1/4">
        <h1 className="font-semibold text-2xl">It’s very helpful for operating system</h1>

        <div>
          <Shield/>
          <h3>Ultra fast & Secure</h3>
          <span className="inline text-sm text-zinc-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem vero amet aspernatur laudantium perspiciatis mollitia, fugit id sed quisquam tempore dicta recusandae temporibus eligendi at a quos dolor? Voluptas, exercitationem.</span>
        </div>
        <div>
          <Brush/>
          <h3>Allows customization</h3>
          <span className="inline text-sm text-zinc-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem vero amet aspernatur laudantium perspiciatis mollitia, fugit id sed quisquam tempore dicta recusandae temporibus eligendi at a quos dolor? Voluptas, exercitationem.</span>
        </div>
        <div>
          <FolderCog/>
          <h3>Smart contract</h3>
          <span className="inline text-sm text-zinc-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem vero amet aspernatur laudantium perspiciatis mollitia, fugit id sed quisquam tempore dicta recusandae temporibus eligendi at a quos dolor? Voluptas, exercitationem.</span>
        </div>
      </div>
    </div>
  )
}