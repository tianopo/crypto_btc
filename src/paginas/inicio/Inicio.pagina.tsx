import { CarProfile, Moon, Table } from "@phosphor-icons/react";
import { FlexCol, SectionContato } from "src/componentes";
import { SectionBannerSegundo } from "./SectionBannerSegundo";
import { SectionCardSegundo } from "./SectionCardSegundo";
import { SectionCarousel } from "./SectionCarousel";

export const Inicio = () => {
  const card = [
    {
      descricao: "Find out ways to obtain bitcoin through contact",
      icone: <Moon size={60} />,
    },
    {
      descricao: "Find out who has the power to transact bitcoins",
      icone: <CarProfile size={60} />,
    },
    {
      descricao: "Plan your best purchases with a small, private group",
      icone: <Table size={60} />,
    },
  ];

  return (
    <FlexCol className="gap-32">
      <SectionCarousel
        imagens={["/projeto/banner.webp", "/projeto/banner2.avif", "/projeto/banner3.jpg"]}
      />
      <SectionCardSegundo card={card} id="informacoes" />
      <SectionBannerSegundo
        imagem="/projeto/banner.webp"
        titulo="New Bitcoin"
        descricao="This Bitcoin is intended to be used for a private group of people"
        rota="https://wa.me/5512982435638"
        botao="Contact"
        id="agendamento"
      />
      <SectionContato id="contato" titulo="Contact" />
    </FlexCol>
  );
};
