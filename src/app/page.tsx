import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <Link href={"/admin"}>Go to admin</Link>
    </div>
  );
};

export default HomePage;
