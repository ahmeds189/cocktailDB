import { useRouteError, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />
      <section className="error-page section">
        <div className="error-container">
          <h1>oops! it's a dead end</h1>
          <Link to="/" replace="true" className="btn btn-primary">
            back home
          </Link>
        </div>
      </section>
    </>
  );
}
