import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

interface Props {
  className?: ClassValue;
}

const routes = [
  {
    label: "learn",
    href: "/learn",
    iconSrc: "/learn.svg",
  },
  {
    label: "leaderboard",
    href: "/leaderboard",
    iconSrc: "/leaderboard.svg",
  },
  {
    label: "quests",
    href: "/quests",
    iconSrc: "/quests.svg",
  },
  {
    label: "shop",
    href: "/shop",
    iconSrc: "/shop.svg",
  },
];

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image alt="mascot" src="/mascot.svg" height={40} width={40} />
          <h1 className="text-2xl font-extrabold text-amber-600 tracking-wider">
            Uwulingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        {routes.map(({ href, iconSrc, label }) => {
          return (
            <SidebarItem
              key={href}
              label={label}
              href={href}
              iconSrc={iconSrc}
            />
          );
        })}
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSwitchSessionUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
