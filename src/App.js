import { Route, Switch, useLocation } from "react-router-dom";
import BaseLayout from "./layouts/base/BaseLayout";
import ContactoPage from "./pages/contacto/ContactoPage";
import HomePage from "./pages/HomePage";
import ProyectoDetallePage from "./pages/proyectos/ProyectoDetallePage";
import ProyectosPage from "./pages/proyectos/ProyectosPage";
import ResumenPage from "./pages/resumen/ResumenPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <BaseLayout>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/resumen">
            <ResumenPage />
          </Route>
          <Route exact path="/proyectos">
            <ProyectosPage />
          </Route>
          <Route exact path="/proyecto-detalle">
            <ProyectoDetallePage />
          </Route>
          <Route exact path="/contactame">
            <ContactoPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </BaseLayout>
  );
}

export default App;
