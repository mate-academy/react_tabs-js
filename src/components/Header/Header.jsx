export const Header = ({ tab }) => {
  if (!tab) {
    return null;
  }

  return <h1 className="title">{`Selected tab is ${tab.title}`}</h1>;
};
