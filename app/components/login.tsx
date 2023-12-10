"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { status } = useSession();
  const router = useRouter();

  const handleSubmit = () => {};

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  if (status === "authenticated") {
    router.push("/quiz");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="text-white w-2/3 m-auto mt-[30%] lg:mt-[10%] lg:w-1/4"
    >
      <Heading as="h1" size="xl" mb={{ base: "4" }} noOfLines={1}>
        Sign In
      </Heading>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          mb={{ base: "1rem" }}
          onChange={(e) => handleInputChange("username", e.target.value)}
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          onChange={(e) => handleInputChange("password", e.target.value)}
        />

        <Button
          isLoading={false}
          mt={{ base: "5" }}
          colorScheme="yellow"
          variant="outline"
          type="submit"
        >
          Login
        </Button>
        <br />
        <Button
          colorScheme="yellow"
          variant="outline"
          onClick={() => signIn("github")}
          mt={{ base: "5" }}
        >
          Sign In With Github
        </Button>
        <br />
        <Button
          colorScheme="yellow"
          variant="outline"
          onClick={() => signIn("google")}
          mt={{ base: "5" }}
        >
          Sign In With Google
        </Button>
        <FormHelperText mt={{ base: "3" }}>
          Don{"'"}t have an account. <Link href={"/signup"}>Signup</Link>{" "}
        </FormHelperText>
      </FormControl>
    </form>
  );
};

export default Login;
