export const CustomSelect = (props: any) => {
  return (
    <div className={`w-full  relative `}>
      <div className="absolute left-0 top-[50%] translate-y-[-50%] ml-5">
        {props.icon}
      </div>
      <select
        {...props}
        className={`w-full ${
          props.unstyle !== true &&
          "peer h-full w-full border-b border-blue-gray-200 bg-transparent py-4 pb-1.5  text-gray-500 outline-0 transition-all  "
        }${props.className}`}
      >
        <option value="" hidden>
          {props.placeholder}
        </option>
        {props.data.map((item: string, key: number) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
