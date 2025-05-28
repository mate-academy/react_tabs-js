export const Text = ({ tab }) => {
  if (!tab) {
    return null;
  }

  return (
    <div className="block" data-cy="TabContent">
      {tab.content}
    </div>
  );
};
