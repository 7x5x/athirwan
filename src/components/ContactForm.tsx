import { FaPhone, FaUser } from "react-icons/fa";
import { CustomInput } from "./CustomInput";
import { CustomSelect } from "./CustomSelect";
import { banks } from "./banks";
import { TiArrowUnsorted } from "react-icons/ti";
import { ReuseableButton } from "./ReuseableButton";

export const ContcatForm = (props: any) => {
  return (
    <div className=" flex flex-col gap-8 lg:p-12 ">
      <CustomInput
        onChange={props.onChange}
        value={props.value.fullName}
        name="fullName"
        placeholder="الاسم الكامل"
        icon={<FaUser size={20} className=" text-gray-700" />}
      />
      <CustomInput
        onChange={props.onChange}
        placeholder="رقم الهاتف"
        value={props.value.phoneNumber}
        name="phoneNumber"
        icon={<FaPhone size={20} className=" text-gray-700" />}
      />
      <CustomInput
        onChange={props.onChange}
        name="salary"
        value={props.value.salary}
        placeholder="الراتب"
        icon={<h1 className=" font-semibold text-gray-700">ريال</h1>}
      />
      <CustomSelect
        onChange={props.onChange}
        value={props.value.bank}
        name="bank"
        placeholder="البنك"
        data={banks}
        icon={<TiArrowUnsorted size={20} className=" text-gray-700" />}
      />
      <ReuseableButton onClick={props.onClick} />
    </div>
  );
};
