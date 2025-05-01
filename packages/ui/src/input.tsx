import IconButtons from './icon-buttons';

const SearchBar = () => {
  return (
    <div
      style={{ background: 'linear-gradient(90deg, #1a1e27, #101317)' }}
      className="w-[600px] max-w-[600px] p-3 rounded-xl flex items-center text-[#c9cedb]"
    >
      <IconButtons icon="search" height="24px" onClick={() => {}} />
      <input
        type="text"
        placeholder="Search anything globally"
        className="bg-transparent border-none outline-none w-full text-inherit pl-2 placeholder:text-[#c9cedb]/75"
      />
    </div>
  );
};

export default SearchBar;
