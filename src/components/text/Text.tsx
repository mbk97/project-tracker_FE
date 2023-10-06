interface IProps {
  text: string;
}

const PageTitle = ({ text }: IProps) => {
  return <h3 className="md:text-[24px] text-[20px] font-medium">{text}</h3>;
};

export { PageTitle };
