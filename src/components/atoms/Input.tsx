import Form from "react-bootstrap/Form";

type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
