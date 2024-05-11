import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { redirect } from "next/navigation";
import { getCart } from "../lib/db/cart";
import ShoppingcartButton from "./ShoppingCartButton";

async function searchProducts(formData: FormData) {
  "use server";

  const SearchQuery = formData.get("searchQuery")?.toString();

  if (SearchQuery) {
    redirect("/search?query=" + SearchQuery);
  }
}

export default async function Navbar() {
  const cart = await getCart();

  return (
    <div className="bg-base-100">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <Link href="/" className="text-xl- btn btn-ghost normal-case">
            <Image src={Logo} height={40} width={40} alt="logo" />
            Nextore
          </Link>
        </div>
        <div className="flex-none gap-2">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                type="text"
                className="input input-bordered w-full min-w-[100px]"
              />
            </div>
          </form>
          <ShoppingcartButton cart={cart} />
        </div>
      </div>
    </div>
  );
}
