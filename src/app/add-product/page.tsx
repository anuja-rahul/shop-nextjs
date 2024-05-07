import { redirect } from "next/navigation";
import prisma from "../lib/db/prisma";

export const metadata = {
  title: "Add Product - Nextore",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields !");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          type="text"
          placeholder="Name"
          className="input input-bordered mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="input input-bordered mb-3 w-full"
        />
        <input
          required
          name="price"
          type="number"
          placeholder="Price"
          className="input input-bordered mb-3 w-full"
        />
        <button type="submit" className="btn btn-primary btn-block">
          Add Product
        </button>
      </form>
    </div>
  );
}
