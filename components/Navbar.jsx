import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-slate-300 px-8 py-3">
            <Link className="font-bold" href={"/"}>Linked.</Link>
            <Link className="text-white font-bold bg-red-500 p-2 rounded-md" href={"/logout"}>Logout</Link>
        </nav>
    )
}