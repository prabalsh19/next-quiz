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
import React from "react";

const Signup = () => {
  const handleSubmit = () => {};
  return (
    <form
      onSubmit={handleSubmit}
      className="text-white w-2/3 m-auto mt-[15%] lg:w-1/4 lg:mt-[5%]"
    >
      <Heading as="h1" size="xl" mb={{ base: "4" }} noOfLines={1}>
        Sign Up
      </Heading>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input type="text" mb={{ base: "1rem" }} />
        <FormLabel>Last Name</FormLabel>
        <Input type="text" mb={{ base: "1rem" }} />
        <FormLabel>Username</FormLabel>
        <Input type="email" mb={{ base: "1rem" }} />
        <FormLabel>Password</FormLabel>
        <Input type="email" mb={{ base: "1rem" }} />
        <FormLabel>Confirm Password</FormLabel>
        <Input type="email" />
        <Button
          isLoading={false}
          loadingText="Submiting"
          mt={{ base: "5" }}
          colorScheme="yellow"
          variant="outline"
          type="submit"
        >
          Submit
        </Button>
        <FormHelperText mt={{ base: "3" }}>
          Already have an account. <Link href={"/"}>Signin</Link>{" "}
        </FormHelperText>
      </FormControl>
    </form>
  );
};

export default Signup;
