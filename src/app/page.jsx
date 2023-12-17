import AuthForm from '@/components/AuthForm';

const Homepage = props => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-white text-4xl font-extrabold">
            Welcome to To-Do List
          </h1>
          <p className="mt-2 text-center text-gray-300 text-sm">
            Here You Can List Your Daily Todo and Manage Your job.
          </p>
          <p className="mt-4  text-center text-gray-300 text-xs">
            After Enter Your Email. Go To Your Email Inbox To Continue The
            Authentication
          </p>
        </div>
        <div className="mt-8 bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
