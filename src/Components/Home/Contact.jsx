const Contact = () => {
  return (
    <div>
      <section
        className="max-w-xl mx-auto lg:max-w-3xl mb-20 lg:mb-0"
        id="contact"
      >
        <div className="flex items-center justify-center">
          <p className="text-7xl font-diastema font-bold text-center text-gray-600">
            Get in Touch<span className="text-[#03c988] blinking">.</span>
          </p>
        </div>
        <div className="lg:grid  lg:grid-cols-12">
          <main className="flex items-center justify-center px-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"></h1>
              <form className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-3">
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    {" "}
                    Name{" "}
                  </label>

                  <input
                    type="text"
                    name="user_name"
                    placeholder="name..."
                    className="w-full px-5 py-2 rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="user_email"
                    placeholder="email..."
                    className="w-1/2 lg:w-full px-5 py-2  rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="OrderNotes"
                    className="block text-sm font-medium text-gray-200"
                  >
                    {" "}
                    Subject{" "}
                  </label>

                  <textarea
                    className="mt-2 w-[300px] lg:w-[500px] p-5 rounded-lg bg-gray-200 border-gray-200 align-top shadow-sm sm:text-sm"
                    rows="4"
                    name="message"
                    placeholder="your message here...."
                  ></textarea>
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    value="Send"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Contact;
