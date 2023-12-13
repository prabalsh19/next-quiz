import { useRouter } from "next/navigation";
import React from "react";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  const router = useRouter();
  return (
    <div>
      <div
        className="ml-auto w-fit px-8 py-4 cursor-pointer"
        onClick={() => router.push("/profile")}
      >
        <VscAccount color="white" size="2.2rem" />
      </div>
    </div>
  );
};

export default Navbar;
