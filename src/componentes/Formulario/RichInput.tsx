import JoditEditor from "jodit-react";
import { Controller, useFormContext } from "react-hook-form";
import { labelAjustada } from "src/utils/labelAjustada";
import { IFormUsos } from "../../interfaces/InterfaceForm";
import { FlexCol } from "../Flex/FlexCol";
import { CX } from "../Tags/ConteudoX";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

interface IRichInput extends IFormUsos {
  titulo: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

export const RichInput = ({ titulo, required, disabled, errors }: IRichInput) => {
  const palavras = labelAjustada(titulo);

  const { control, setValue } = useFormContext();

  const handleBlur = (content: string) => {
    setValue(palavras, content);
  };

  return (
    <FlexCol className="gap-6 p-10">
      <Label titulo={titulo} palavras={palavras} required={required} />
      <Controller
        name={palavras}
        control={control}
        render={({ field: { onChange, value } }) => (
          <CX tipo="div" className="md:w-80">
            <JoditEditor
              value={value}
              config={{
                readonly: false,
                disabled,
              }}
              onBlur={(content) => {
                handleBlur(content);
                onChange(content);
              }}
            />
          </CX>
        )}
      />
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};