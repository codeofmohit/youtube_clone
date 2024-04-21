const ErrorBox = ({ section }: any) => {
  if (section === "suggestions") {
    return (
      <div className="errorBox flex h-[80vh] items-center justify-center flex flex-col">
        <img
          src="https://media1.tenor.com/m/_RuqRGRiRgYAAAAC/hammer-tools.gif"
          alt="i-got-this"
          className="rounded-xl p-2 w-[150px] h-[150px]"
        />
        <div className="error bg-slate-200 dark:bg-slate-800 p-4 rounded w-[50%]">
          <h1 className="text-center">
            🛠 &nbsp; Error while fetching the videos! Come back after some time
            🧘‍♂️. <br /> meanwhile our best minds our at work 🧑‍💻 to fix the issue
            &nbsp; 🛠
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="errorBox flex h-[80vh] items-center justify-center flex flex-col">
      <img
        src="https://media1.tenor.com/m/_RuqRGRiRgYAAAAC/hammer-tools.gif"
        alt="i-got-this"
        className="rounded-xl p-2"
      />
      <div className="error bg-slate-200 dark:bg-slate-800 p-4 rounded ">
        <h1 className="text-center">
          🛠 &nbsp; Error while fetching the videos! Come back after some time
          🧘‍♂️. <br /> meanwhile our best minds our at work 🧑‍💻 to fix the issue
          &nbsp; 🛠
        </h1>
      </div>
    </div>
  );
};
export default ErrorBox;
