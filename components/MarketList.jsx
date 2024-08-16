import Link from "next/link"

export default function MarketList() {
    return (
        <>
            <div className="px-8 py-4 border border-slate-300 my-3 flex justify-between gap-5 items-center">
                <div>
                    <h2 className="font-bold text-xl">Market Title</h2>
                    <div>Market Product Display</div>
                </div>

                <div>
                    <Link href={"/pages/kometadventure"} className="bg-slate-900 text-white font-bold p-4 rounded-md">Open</Link>
                </div>
            </div>
        </>
    )
}