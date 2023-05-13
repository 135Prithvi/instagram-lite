import Link from "next/link";

export default function page() {
  return (
    <main className="grid grid-cols-1  min-h-screen bg-white">
      Hi your are logged in
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
            <form className="space-y-2">
              <button className="flex mx-auto text-lg " type="button">
                <span className="">Logged In successfull !</span>
              </button>
              <div className="h-10" />
              <button className="flex  mx-auto text-sm " type="button">
                <span className="">Open app</span>
                <span className="w-1"></span>
                <Link
                  href="intent://instagram.com/p/CqT56BGgDlw/#Intent;package=com.instagram.android;scheme=https;end"
                  target="_blank"
                  className="text-[#1877F2] font-black"
                >
                  Instagram
                </Link>
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
