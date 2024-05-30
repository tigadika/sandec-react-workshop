import Button from "./Button";

export default function MenuCard() {
  return (
    <div className="space-y-5 rounded-xl border-2 bg-white p-4 hover:shadow-xl">
      <img
        src="https://images.tokopedia.net/img/KRMmCm/2022/8/15/a4b7d013-9438-46b2-906b-4c374ec82236.jpg"
        alt="menu-1"
        className="h-[200px] rounded-xl object-cover"
      />
      <div className="flex h-56 flex-col justify-between">
        <div className="space-y-3">
          <p className="text-xl font-bold">Title yang sangat amat panjang</p>
          <p className="text-xl">Rp 12.000</p>
          <p className="w-fit rounded-full bg-yellow-400 px-4 text-lg">
            Category
          </p>
        </div>
        <Button variant={"secondary"}>Lihat Detail</Button>
      </div>
    </div>
  );
}
