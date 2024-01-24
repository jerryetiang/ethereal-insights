"use client";
import { Card, Dropdown } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProfileCard = () => {
  return (
    <div>
      <Card className="max-w-sm bg-zinc-100 dark:bg-zinc-900 border-none shadow-transparent">
        <div className="flex flex-col items-center pb-10">
          <Image
            alt="Avatar"
            height="96"
            src="/palm-tree.png"
            width="96"
            className="mb-3 rounded-full shadow-lg"
          />
          <h5 className="mb-1 text-xl font-medium text-zinc-900 dark:text-white">
            Jerry Ronald
          </h5>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Developer
          </span>
        </div>
      </Card>
    </div>
  );
};
