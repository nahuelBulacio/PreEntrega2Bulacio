import { ItemListContainer } from "./components/ItemsListContainer/ItemsListContainer";
import { Footer, ItemCount, ItemDetailContainer, NavBar } from "./components"
import "./style.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactUs } from "./pages/contactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'Muestra de todas las comidas disponibles:'}></ItemListContainer>}></Route>
        <Route path="/productos" element={<ItemListContainer greeting={'¡Hola! Bienvenido a la tienda.'}></ItemListContainer>}></Route>
        <Route path="/productos/:category" element={<ItemListContainer greeting={'Ver detalle de'}></ItemListContainer>}></Route>
        <Route path="/count" element={<ItemCount></ItemCount>}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}


export default App;
