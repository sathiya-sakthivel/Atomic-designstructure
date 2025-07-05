import { Button as BButton } from "react-bootstrap";

type ButtonProps = {
  type: "submit" | "button";
  variant: string;
  buttonname: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<ButtonProps> = ({
  type,
  variant,
  buttonname,
  onClick,
}) => {
  return (
    <BButton variant={variant} type={type} onClick={onClick}>
      {buttonname}
    </BButton>
  );
};
