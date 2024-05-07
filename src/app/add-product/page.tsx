export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form>
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
        <button type="submit" className="btn btn-primary btn-block">Add Product</button>
      </form>
    </div>
  );
}
