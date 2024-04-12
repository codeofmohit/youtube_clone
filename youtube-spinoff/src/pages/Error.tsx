import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="errorPage flex flex-col justify-center items-center h-[90vh] text-center">
      <img
        src="https://media1.tenor.com/m/56aoJju8qi8AAAAC/mirzapur-telugu.gif"
        alt="iykyk"
        className="my-4 rounded"
      />
      <h1 className="text-5xl font-bold my-6">Oops!</h1>
      <p className="text-xl my-2">
        Looks like you're trying to access something off the menu! Nice try
        though 👏
      </p>
      <p className="text-l font-medium my-2">
        Let's take your <i className="text-slate-700"> ~ 🍑 tashreef 🍑 ~ </i>{" "}
        back to &nbsp;
        <span
          className="underline text-red-500 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Home!
        </span>
      </p>
    </div>
  );
};
export default Error;
