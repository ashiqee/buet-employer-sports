import useAuth from "./../../hooks/useAuth";

const Registration = () => {
  const { user } = useAuth();

  const handlePhoneReg = (e) => {
    e.preventDefault();
    const form = e.target;

    const phoneNumber = form.mobile.value;
    console.log(phoneNumber);

  };

  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="flex bg-gray-700 p-2 rounded-xl md:justify-around gap-2 justify-center">


        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step step-primary">Personal Info</li>
          <li className="step step-primary">Player Role</li>
          <li className="step">Payment</li>
          <li className="step">Success</li>
        </ul>
      </div>



      <form onSubmit={handlePhoneReg}>
        {
          <section>
            <div>
              <div className="w-1/5 mx-auto">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  আপনার নাম
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </section>
        }
        <button type="submit" className="btn mt-5 btn-success">
          REGISTRATION
        </button>
      </form>
    </div >
  );
};

export default Registration;
