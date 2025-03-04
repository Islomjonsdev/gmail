import Item from "@/components/shared/item";
import {
  DraftingCompass,
  ImportIcon,
  Inbox,
  SendHorizontalIcon,
  SendToBackIcon,
  Star,
  MessageSquare,
  SendToBack,
  Mail,
  Blocks,
  Trash,
  CassetteTape,
  MoveDiagonal,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navLinks = [
    {
      label: "Inbox",
      icon: Inbox,
      path: "/inbox",
    },
    {
      label: "Starred",
      icon: Star,
      path: "/starred",
    },
    {
      label: "Snoozed",
      icon: SendHorizontalIcon,
      path: "/snoozed",
    },
    {
      label: "Sent",
      icon: SendToBackIcon,
      path: "/sent",
    },
    {
      label: "Drafts",
      icon: DraftingCompass,
      path: "/drafts",
    },
    {
      label: "Important",
      icon: ImportIcon,
      path: "/important",
    },
    {
      label: "Charts",
      icon: MessageSquare,
      path: "/charts",
    },
    {
      label: "Scheduled",
      icon: SendToBack,
      path: "/scheduled",
    },
    {
      label: "All Mail",
      icon: Mail,
      path: "/allmail",
    },
    {
      label: "Spam",
      icon: Blocks,
      path: "/spam",
    },
    {
      label: "Trash",
      icon: Trash,
      path: "/trash",
    },
    {
      label: "Categories",
      icon: CassetteTape,
      path: "/categories",
    },
    {
      label: "Manage Labels",
      icon: MoveDiagonal,
      path: "/managelabels",
    },
  ];
  return (
    <div className="max-w-[250px] w-full h-[100vh] p-4 bg-[#f6f9fc] dark:bg-[#1f1f1f] fixed">
      <div className="flex flex-col">
        {navLinks?.map((link) => (
          <Link to={link.path} key={link.path}>
            <Item label={link.label} icon={link?.icon} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
