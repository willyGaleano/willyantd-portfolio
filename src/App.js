import { HashRouter, Route, Switch, useLocation } from "react-router-dom";
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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/resumen" component={ResumenPage} />
          <Route exact path="/proyectos" component={ProyectosPage} />
          <Route
            exact
            path="/proyecto-detalle"
            component={ProyectoDetallePage}
          />
          <Route exact path="/contactame" component={ContactoPage} />
          <Route path="*" component={HomePage} />
        </Switch>
      </AnimatePresence>
    </BaseLayout>
  );
}

export default App;
