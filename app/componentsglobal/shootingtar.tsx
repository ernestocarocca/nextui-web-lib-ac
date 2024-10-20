"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-screen w-screen rounded-md  flex flex-col items-center justify-center relative ">
      <h3 className=" font-extrabold text-6xl">
        <p> Welcome to eaasy way </p>
        <p>build awsome webpage</p>
      </h3>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
