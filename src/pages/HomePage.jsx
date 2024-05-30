import Button from "../components/Button";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import Headers from "../components/Headers";
import MenuCard from "../components/MenuCard";

export default function HomePage() {
  return (
    <>
      <Headers />
      <div className="mb-20 flex flex-col items-center justify-center gap-10">
        <h2 className="text-3xl font-bold">Choose From Category</h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
      <div className="mb-20 flex flex-col items-center justify-center gap-10 px-10">
        <h2 className="text-3xl font-bold">Explore Our Menu</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <MenuCard />
          <MenuCard />
        </div>
      </div>
      <Footer />
    </>
  );
}
