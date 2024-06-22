"use client";
import { ContcatForm } from "@/components/ContactForm";
import { Success } from "@/components/Success";
import Loading from "@/components/loading";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPhoneVolume, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const [formData, setFormData] = useState({
    subject: "Message Received(Athirwan)",
    pass: "dcrf tzcy rcor cmod",
    from: "athirwan.contact@gmail.com",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const handelinput = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelSubmit = async (e: any) => {
    console.log(formData);
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://ads-wave.com/api/sendmails", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setErrorMsg(await res.json());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      <main className="  min-h-screen grid lg:grid-cols-7  p-8 relative ">
        <section className=" col-span-3 lg:px-12 flex flex-col  justify-between">
          <div>
            <div className=" h-28 w-28  relative m-auto">
              <Image
                src={"/logo.png"}
                className=" object-cover"
                alt=""
                fill
                sizes=""
              />
            </div>
            <h1 className=" w-auto text-center text-4xl font-bold   mt-8 ">
              عقار وكاش
            </h1>
            <div className=" mt-4 w-full  gap-6  flex justify-center blur-0">
              <a href="mailto:athirwan2332@gmail.com">
                <MdEmail
                  size={34}
                  className="  cursor-pointer hover:scale-[1.05]"
                />
              </a>
              <a href="tel:056 338 5548">
                <FaPhoneVolume
                  size={34}
                  className="  cursor-pointer hover:scale-[1.05]"
                />
              </a>
            </div>
          </div>
          {errorMsg !== "Email sent successfully" ? (
            <ContcatForm
              onClick={handelSubmit}
              onChange={handelinput}
              value={formData}
            />
          ) : (
            <Success />
          )}
        </section>
        <section className="  absolute  lg:relative top-0 w-full  h-1/2 md:h-full z-[-10]  blur-sm lg:blur-none  lg:block overflow-hidden col-span-4 bg-white  shadow-md rounded-3xl p-8">
          <Image
            src={"/bg1.jpg"}
            className=" object-cover blur-0 "
            alt=""
            fill
            sizes=""
          />
        </section>
      </main>{" "}
      {loading && (
        <div className="absolute  top-0 h-screen  left-0 transform  bg-[#00000089] w-full  grid place-items-center">
          <Loading />
        </div>
      )}
    </>
  );
}
