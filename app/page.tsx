export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <span className="w-[24px] h-[24px] bg-gradient-to-tr from-[#096cde] via-[#096cde] via-30% to-[#ddf1ff] rounded-[50%] bg-clip-border bg-scroll bg-origin-padding" />
      <div className="mt-10 text-3xl bg-gradient-to-r from-[#e9f9f4] to-[#cfebfe] ">
        <p className="text-black bg-gradient-to-r from-[#e9f9f4] to-[#cfebfe]">
          from hello world to IPO.
        </p>
        <p className="bg-gradient-to-r from-[#15c064] to-50% to-[#00d1ff] text-transparent bg-clip-text font-bold">
          Shopify
        </p>
      </div>
    </main>
  );
}
