import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => (
  <Layout title="Page not found | LS Street MMA" description="This page doesn't exist. Head back to LS Street MMA.">
    <section className="mx-auto max-w-xl px-4 py-32 text-center">
      <p className="kicker">404</p>
      <h1 className="mt-6 text-5xl">Page not found</h1>
      <p className="mt-4 text-lg text-muted-foreground">That page doesn't exist, but your free first session does.</p>
      <Link to="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </section>
  </Layout>
);

export default NotFound;
