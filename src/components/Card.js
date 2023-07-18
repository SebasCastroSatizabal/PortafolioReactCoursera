import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack borderRadius="lg" bg="white">
      <Image src={imageSrc} alt={title} borderRadius="lg"/>
      <VStack display='flex' alignItems='baseline' p="4" h="100%">
        <Heading as="h1" color="black" fontSize="md" mb=".5rem">{title}</Heading>
        <Text fontSize="xs" color="gray.500" w="100%">{description}</Text>
        <Link href='#' fontSize="xs" color="black" mt="auto">
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Link>
      </VStack>
    </VStack>
  );
};

export default Card;
