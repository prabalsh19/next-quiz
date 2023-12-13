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
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { status } = useSession();
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post("/api/login", formData);
      if (response.status === 200) {
        router.push("/quiz");
      }
    } catch (e) {
      setError("Something went wrong. Please try again");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

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
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          mb={{ base: "1rem" }}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          onChange={(e) => handleInputChange("password", e.target.value)}
        />

        {error && <p className="text-red-700 mt-2 -mb-2">{error}</p>}
        <Button
          isLoading={isLoading}
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
