import { Outlet } from "react-router";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App;