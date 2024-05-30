export default function Button({ variant, children }) {
  function genVariant() {
    switch (variant) {
      case "primary":
        return "text-xl font-semibold p-4 rounded-xl bg-yellow-400 hover:bg-yellow-500";
      case "secondary":
        return "text-xl font-semibold p-4 rounded-xl bg-red-500 text-white hover:bg-red-600";
      default:
        return "text-xl font-semibold p-4 rounded-xl bg-yellow-400 hover:bg-yellow-500";
    }
  }

  return (
    <>
      <button className={genVariant()}>{children}</button>
    </>
  );
}
