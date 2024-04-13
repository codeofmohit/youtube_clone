const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full border-red-500 border-t-2 border-b-2 border-solid w-4 h-4"></div>
      <span className="text-red-500 ml-2">Loading ...</span>
    </div>
  );
};

export default Spinner;
