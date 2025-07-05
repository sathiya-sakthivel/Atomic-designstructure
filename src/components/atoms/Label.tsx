import Form from "react-bootstrap/Form";

type LabelProps = {
  labelname: string;
};

export const Label: React.FC<LabelProps> = ({ labelname }) => {
  return (
  <Form.Label>{labelname}</Form.Label>
  ) 

};
