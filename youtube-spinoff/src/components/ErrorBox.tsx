const ErrorBox = () => {
  return (
    <div className="errorBox flex h-[80vh] items-center justify-center flex flex-col">
      <div className="error bg-slate-200 dark:bg-slate-800 p-4 rounded ">
        <h1 className="text-center">
          🛠 &nbsp; Error while fetching this section/loading data! Come back
          after some time 🧘‍♂️. <br /> meanwhile our best minds our at work 🧑‍💻 to
          fix the issue &nbsp; 🛠
        </h1>
      </div>
    </div>
  );
};
export default ErrorBox;
