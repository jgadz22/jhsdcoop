"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const FirstCompImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <Link href="/">
        <Image
          src="/assets/images/jghc_logo@png.png"
          width={500}
          height={150}
          alt="JHSD logo"
        />
      </Link>
    </motion.div>
  );
};

export default FirstCompImage;
