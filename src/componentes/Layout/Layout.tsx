import { Outlet } from "react-router-dom";
import { CX } from "../Tags/ConteudoX";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  const nav = [
    { texto: "Home", rota: "#" },
    { texto: "Information", rota: "#informacoes" },
    { texto: "Image", rota: "#agendamento" },
    { texto: "Contact", rota: "#contato" },
  ];

  const icones = [
    { imagem: "/sociais/whatsapp.png", rota: "https://wa.me/5512982435638" },
    { imagem: "/sociais/github.png", rota: "https://github.com/tianopo" },
    { imagem: "/sociais/linkedin.png", rota: "https://www.linkedin.com/in/matheustianopo/" },
  ];

  return (
    <CX tipo="div" className={`home-claro`}>
      <Header imagem="/projeto/btc.jpg" navbar={nav} titulo="New Bitcoin" />
      <Outlet />
      <Footer
        titulo="New Bitcoin"
        description="Join this group to get your cryptocurrencies"
        icones={icones}
      />
    </CX>
  );
};
