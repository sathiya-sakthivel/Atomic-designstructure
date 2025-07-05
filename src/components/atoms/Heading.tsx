type HeadingProps = {
  title: string;
};

export const Heading: React.FC<HeadingProps> = ({ title }) => {
  return <h1>{title}</h1>;
};
