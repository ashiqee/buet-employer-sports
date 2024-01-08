import useAuth from "./../../hooks/useAuth";

const Registration = () => {
  const { mobileReg, auth } = useAuth();

  const handlePhoneReg = (e) => {
    e.preventDefault();
    const form = e.target;

    const phoneNumber = form.mobile.value;
    console.log(phoneNumber);
    mobileReg(phoneNumber);
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl">Registration</h2>
      <form onSubmit={handlePhoneReg}>
        <div className="w-1/5 mx-auto">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Mobile
          </label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="01614-654397"
            required
          />
        </div>
        <button type="submit" className="btn mt-5 btn-success">
          REGISTRATION
        </button>
      </form>
    </div>
  );
};

export default Registration;
