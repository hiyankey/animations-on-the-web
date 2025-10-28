import { DownloadIcon } from "@radix-ui/react-icons";

export default function Page() {
  return <div className="flex min-h-screen justify-center items-center">
    <div className="grid-stack p-1 [&_svg]:transition-transform [&_svg]:[transition:300ms_ease-out] size-6 rounded-[50%] bg-white text-black overflow-clip hover:[&_svg]:first:translate-y-0  hover:[&_svg]:last:translate-y-6">
      <DownloadIcon className="-translate-y-6 "/>
      <DownloadIcon className="translate-y-0 "/>
    </div>
  </div>
}
