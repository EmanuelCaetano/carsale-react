import "./global.css"
import { footer } from "./componentes/footer";
import { mainbody } from "./componentes/mainbody";
import { menu } from "./componentes/menu";
import { topbanner } from "././componentes/topbanner";
import { topbar } from "./componentes/topbar";
import { Routes, Route} from "react-router-dom";



export function App() {
  return (
    <>
    <topbar />
    <topbanner />
      <mainbody>
        <menu />
        <Routes>
        <Route path="" element={home /} />

        </Routes>
      </mainbody>

      <footer />
      </>
  );
   
}


