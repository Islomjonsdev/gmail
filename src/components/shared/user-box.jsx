import { useClerk, useUser } from "@clerk/clerk-react";
import { LogOut } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const UserBox = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const { navigate } = useNavigate();
  console.log(user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">
          <Avatar>
            <AvatarImage src={user?.imageUrl} />
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[400px]"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col items-center space-y-4 p-2">
          <p>{user?.primaryEmailAddress?.emailAddress}</p>
          <div className="flex flex-col items-center">
            <div className="rounded-[100%] p-1">
              <Avatar className="w-[70px] h-[70px]">
                <AvatarImage src={user?.imageUrl} />
              </Avatar>
            </div>
            <p className="mb-3">{user?.username}</p>
            <div className="border border-[grey] p-2 rounded-[20px]" role={"button"}>
              Managa your Google Accounts
            </div>
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="w-full flex flex-col items-center"
            onClick={() => signOut(() => navigate.push("/login"))}
          >
            <div className="flex items-center gap-2 " role={"button"}>
              <LogOut />
              Logout
            </div>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserBox;
