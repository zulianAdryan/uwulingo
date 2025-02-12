interface Props {
  children: React.ReactNode;
}

export const FeedWrapper: React.FC<Props> = ({ children }) => {
  return <div className="flex-1 relative top-0 pb-10">{children}</div>;
};
