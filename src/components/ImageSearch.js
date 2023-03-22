import { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="mx-w-sm roundend overflow-hidden my-10 mx-auto  my-22">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none outline-none  w-full text-gray-700 mr-3 py-2"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 boder-blue-500 hover:border-blue-700 rounded-full px-2 py-1 text-white"
          >
            search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
