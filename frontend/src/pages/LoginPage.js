const LoginPage = () => {
  return (
    <div className="mt-20">
      <div className="bg-white rounded-2xl max-w-lg mx-auto">
        <div className="flex justify-between text-center border-b-2 font-bold">
          <div className="grow bh-white py-4 rounded-tl-2xl">Login</div>
          <div className="grow bg-slate-200 py-4 rounded-tr-2xl">Register</div>
        </div>
        <form className="flex flex-col gap-y-8 p-10">
          <input
            className="p-2 text-lg rounded-lg font-medium border-2 outline-fuchsia-500 caret-fuchsia-700"
            type="text"
            name="username"
            placeholder="Enter Username..."
            autoComplete="username"
          />
          <span>
            <input
              className="p-2 w-full text-lg rounded-lg font-medium border-2 outline-fuchsia-500 caret-fuchsia-700"
              type="password"
              name="password"
              placeholder="Enter Password..."
              autoComplete="current-password"
            />
            <button className="text-sm text-blue-900 hover:underline mt-1 font-semibold">Forgot Password?</button>
          </span>
          <input
            className="rounded-lg font-semibold bg-fuchsia-500 outline outline-2 outline-fuchsia-500 text-white hover:bg-white hover:text-fuchsia-500 hover:outline-fuchsia-500 py-2"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
