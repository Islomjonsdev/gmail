import { ModeToggle } from "@/components/shared/mode-toggle";
import UserBox from "@/components/shared/user-box";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/clerk-react";
import { HelpCircle, Menu, Settings } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/gmail.png";

const Navbar = () => {
  const { userId } = useAuth();
  return (
    <header className="p-2 flex items-center justify-between bg-[#f6f9fc] dark:bg-[#1f1f1f]">
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
        <div className='p-2 hover:bg-[secondary] rounded-full transition' role="button">
          <HelpCircle className="w-5 h-5"/>
        </div>
        <div className='p-2 hover:bg-[secondary] rounded-full transition' role="button">
          <Settings className="w-5 h-5"/>
        </div>
        {userId ? (
          <UserBox />
        ) : (
          <Avatar className="cursor-pointer">
            <AvatarFallback>IM</AvatarFallback>
          </Avatar>
        )}
      </div>
    </header>
  );
};

export default Navbar;
