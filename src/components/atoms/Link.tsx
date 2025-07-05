import { Link } from "react-router-dom";

type LinkProps = {
  linkname: string;
  to: string;
};

export const CustomLink: React.FC<LinkProps> = ({ linkname, to }) => {
  return(
    <Link to={to}>{linkname}</Link>
  )
   
};
