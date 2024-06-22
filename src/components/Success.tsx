import { MdOutlineMarkEmailRead } from "react-icons/md";

export const Success = () => {
  return (
    <div className="h-[50vh] w-full  grid place-content-center">
      <h3 className="text-2xl text-center p-10">
        <span className="  text-[#4d5fff] ">شكرا</span>
        لإتصالك بنا! سنكون على اتصال بك قريبا
      </h3>
      <MdOutlineMarkEmailRead className=" text-[#4d5fff] text-[10rem] w-full" />
    </div>
  );
};
