import { ModeToggle } from "@/components/shared/mode-toggle";
import UserBox from "@/components/shared/user-box";
import { Button } from "@/components/ui/button";
import { useAuth, UserButton } from "@clerk/clerk-react";
import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/gmail.png";

const Navbar = () => {
  const { userId } = useAuth();
  console.log(userId);
  return (
    <div className="p-2 flex items-center justify-between">
      <div className="flex items-center">
        <Button variant="ghost">
          <Menu className="w-6 h-6" />
        </Button>
        <Link to={"/"}>
          <img className="w-[109px] h-[40px]" src={logo} alt="" srcset="" />
        </Link>
      </div>{" "}
      <div>
        <ModeToggle /> <UserButton /> <UserBox />
      </div>
    </div>
  );
};

export default Navbar;
