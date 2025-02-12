import { isAdmin } from "@/lib/admin";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const App = dynamic(
  () => import("./app")
  //   { ssr: false }
);

const AdminPage = async () => {
  const isUserAdmin = await isAdmin();

  if (!isUserAdmin) redirect("/");

  return <App />;
};

export default AdminPage;
