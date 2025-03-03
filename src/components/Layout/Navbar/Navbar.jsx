import { ModeToggle } from "@/components/shared/mode-toggle";
import UserBox from "@/components/shared/user-box";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/clerk-react";
import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/gmail.png";

const Navbar = () => {
  const { userId } = useAuth();
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
      <div className="flex items-center gap-3">
        <ModeToggle />
        {userId ? (
          <UserBox />
        ) : (
          <Avatar className="cursor-pointer">
            <AvatarFallback>IM</AvatarFallback>
          </Avatar>
        )}
      </div>
    </div>
  );
};

export default Navbar;
