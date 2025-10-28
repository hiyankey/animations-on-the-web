import { SizeIcon } from "@radix-ui/react-icons";

export default function Page() {
  return <div className="flex min-h-screen justify-center items-center">
    <div className="overflow-clip hover:[&_div]:translate-y-0 w-96 aspect-square rounded-md border border-white/6 bg-neutral-900 flex flex-col justify-end">
      <div className="m-1 transition-transform [transition:500ms_cubic-bezier(0.19,1,0.22,1)] rounded-sm bg-white/6 p-3 border border-white/3 relative translate-y-[calc(100%+4px+1px)]">
        <h3>Project title</h3>
        <p className="text-sm">Lorem ipsum doloe sit amet.</p>
<SizeIcon className="absolute top-3 right-3"/>
      </div>
    </div>
  </div>
}
