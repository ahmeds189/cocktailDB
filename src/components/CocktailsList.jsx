import { useGlobalContext } from "../context";
import Loading from "./Loading";
import CocktailCard from "./CocktailCard";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) return <Loading />;

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">no cocktails matched your search input</h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">coctails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <CocktailCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
