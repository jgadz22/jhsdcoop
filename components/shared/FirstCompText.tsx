"use client";

import React from "react";
import { motion } from "framer-motion";

const FirstCompText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5, delay: 0.5 }}
    >
      <div>日本グローバル人材共同組合</div>
    </motion.div>
  );
};

export default FirstCompText;
