import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Yup from "src/utils/validacoesYup";

export interface IInicioSchema {
  nome: string;
  email: string;
  contato: string;
  mensagem?: string;
}

export const useInicio = () => {
  const validacaoSchema = Yup.object().shape({
    nome: Yup.string().required().min(1).label("name"),
    email: Yup.string().email().required().label("email"),
    contato: Yup.string().required().label("contact"),
    mensagem: Yup.string().optional().label("message"),
  });

  const contexto = useForm<IInicioSchema>({
    resolver: yupResolver(validacaoSchema),
    reValidateMode: "onChange",
  });

  return { contexto };
};
