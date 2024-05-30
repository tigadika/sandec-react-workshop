import Footer from "../components/Footer";

export default function DetailPage() {
  return (
    <>
      <div className="mx-36 my-20 grid min-h-96 grid-cols-1 gap-10 lg:grid-cols-2">
        <img
          src="https://images.tokopedia.net/img/KRMmCm/2022/8/15/a4b7d013-9438-46b2-906b-4c374ec82236.jpg"
          alt="detail"
          className="h-[700px] w-[700px] object-cover"
        />
        <div className="h-fit w-full space-y-5 rounded-xl border bg-white p-4 shadow-lg">
          <h3 className="text-3xl font-bold">
            Item Title{" "}
            <span className="rounded-full bg-yellow-400 px-4 py-1 text-xl font-semibold">
              Category
            </span>
          </h3>
          <p className="text-2xl text-gray-500">Rp 50.000</p>
          <div className="flex gap-5 text-xl">
            <button className="w-40 rounded-xl bg-yellow-400 hover:bg-yellow-500">
              -
            </button>
            <input type="number" className="w-full rounded-xl border-2 p-4" />
            <button className="w-40 rounded-xl bg-yellow-400 hover:bg-yellow-500">
              +
            </button>
          </div>
          <button className="w-full rounded-xl bg-red-500 p-4 text-xl font-semibold text-white">
            Tambahkan ke keranjang
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
