import Image from 'next/image';

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      
      <div className="mb-6">
        <Image
          src="/images/logo2.png" 
          alt="Nike Logo"
          width={80}
          height={80}
        />
      </div>

      
      <h1 className="text-2xl font-bold mb-1">YOUR ACCOUNT</h1>
      <p className="text-sm font-medium text-gray-600">FOR EVERYTHING NIKE</p>

      
      <form className="w-full max-w-sm mt-8">
        
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        
        <div className="flex items-center justify-between mb-4">
         
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-4 h-4 border-gray-300 rounded text-gray-600 focus:ring-2 focus:ring-gray-500"
            />
            <span className="text-sm text-gray-600">Keep me signed in</span>
          </label>

          
          <a
            href="#"
            className="text-sm text-gray-600 underline hover:text-black"
          >
            Forgotten your password?
          </a>
        </div>

        
        <p className="text-xs text-gray-600 mb-6">
          {`By logging in you agree to Nike's`}{' '}
          <a
            href="#"
            className="underline text-gray-800 hover:text-black"
          >
            Privacy Policy
          </a>{' '}
          and{' '}
          <a
            href="#"
            className="underline text-gray-800 hover:text-black"
          >
            Terms of Use
          </a>.
        </p>

       
        <button
          type="submit"
          className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
        >
          SIGN IN
        </button>
      </form>

      
      <p className="mt-6 text-sm text-gray-600">
        Not a member?{' '}
        <a
          href="/join-us"
          className="font-semibold underline hover:text-black"
        >
          Join Us
        </a>
      </p>
    </div>
  );
}