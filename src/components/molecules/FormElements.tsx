import Form from "react-bootstrap/Form";
import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";

type FormElement = {
  labelname: string;
  name: string;
  type: string;
  placeholder: string;
  value: string | number;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormElement: React.FC<FormElement> = ({
  labelname,
  name,
  type,
  placeholder,
  value,
  error,
  onChange,
}) => {
  return (
    <Form.Group className="mb-3">
      <Label labelname={labelname} />
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />

      {error ? <span style={{ color: "red" }}>{error}</span> : ""}
    </Form.Group>
  );
};
