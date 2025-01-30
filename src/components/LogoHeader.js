import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function LogoHeader() {
  return (
    <Link href="/">
      <button>
        <Image src="/gradientLogo.png" width={400} height={1000} alt={"logo"} />
      </button>
    </Link>
  );
}
