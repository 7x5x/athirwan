import { FaArrowLeft } from "react-icons/fa";

export const ReuseableButton = (props: any) => {
  return (
    <div className=" lg:mt-8  w-full overflow-hidden  m-auto  flex flex-wrap items-end justify-end gap-4 sm:justify-start xl:justify-between ">
      <a
        href="/PrivacyPolicy"
        className=" text-[blue] text-xs "
      >
        بضغطك علي قدم طلب فانت توافق علي السياسة والخصوصية Privacy Policy
      </a>

      <button
        {...props}
        aria-label="send message"
        className={` hover:scale-[1.05]  duration-[0.3s] ease-in-out inline-flex items-center font-semibold justify-center gap-2.5  w-full   rounded-xl bg-[#2b2f76] px-6 py-3 text-white   `}
      >
        ارسال
        <FaArrowLeft />
      </button>
    </div>
  );
};
