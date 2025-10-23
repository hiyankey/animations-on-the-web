export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            className="h-14 w-[320px] rounded-md border border-white/6 bg-neutral-900 [grid-area:1/1]"
            key={+i}
          />
        ))}
      </div>
    </div>
  );
}
