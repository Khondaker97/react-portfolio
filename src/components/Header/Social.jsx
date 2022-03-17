import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

const Social = () => {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/khondaker-tanvir-mahmud"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Khondaker97" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.upwork.com/freelancers/~01337bcba69483aa5c"
        target="_blank"
        rel="noreferrer"
      >
        <SiUpwork />
      </a>
    </>
  );
};

export default Social;
