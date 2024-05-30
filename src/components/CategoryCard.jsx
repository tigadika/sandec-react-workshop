export default function CategoryCard() {
  return (
    <div className="hover:border-1 cursor-pointer space-y-5 rounded-xl bg-white p-4 hover:shadow-xl">
      <img
        src="https://images.tokopedia.net/img/KRMmCm/2022/8/15/a4b7d013-9438-46b2-906b-4c374ec82236.jpg"
        alt="category-1"
        className="h-36 w-36 rounded-full object-cover"
      />
      <p className="text-center text-xl font-semibold">Noodles</p>
    </div>
  );
}
