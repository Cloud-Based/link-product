import Link from "next/link"
import RemoveBtn from "./RemoveBtn"
import { HiPencilAlt } from "react-icons/hi"

const getProducts = async () => {
  try {
    const res = await fetch("https://manage-linkproduct.vercel.app/api/private-api/kometadventure")

    if (!res.ok) {
      throw new Error("Failed to fetch products")
    }
  
    return res.json()

  } catch (error) {
    console.log("Error loading product: ", error)
  }
}

export default async function ProductList() {

  const { kometadventure } = await getProducts()
  
  return (
    <>
      {kometadventure.map((p) => (
        <div className="px-8 py-4 border border-slate-300 my-3 flex justify-between gap-5 items-center">
          <div>
            <h2 className="font-bold text-xl">{ p.title }</h2>
            <div>{ p.description }</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn />
            <Link href={"/"}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
