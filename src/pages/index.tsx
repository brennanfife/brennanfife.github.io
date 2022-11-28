import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Img,
} from "@chakra-ui/react";
import { FaDiscord, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <Box bg="gray.800" as="section" minH="100vh" position="relative">
      <Box py={{ base: "16", md: "32" }} position="relative" zIndex={1}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          color="white"
        >
          <Box maxW="xl">
            <Heading
              as="h1"
              fontSize={{ base: "2rem", md: "4rem" }}
              fontWeight="extrabold"
            >
              Brennan Fife
            </Heading>
            <ButtonGroup mt="10" spacing="4">
              <IconButton
                colorScheme="white"
                aria-label="Twitter"
                fontSize="20px"
                icon={<FaTwitter />}
                variant="ghost"
                as="a"
                href="https://twitter.com/brennandoteth"
                target="_blank"
                rel="noopener noreferrer"
              />
              <IconButton
                colorScheme="white"
                aria-label="Discord"
                fontSize="20px"
                icon={<FaDiscord />}
                variant="ghost"
                as="a"
                href="https://discordapp.com/users/396247847005192192"
                target="_blank"
                rel="noopener noreferrer"
              />
              <IconButton
                colorScheme="white"
                aria-label="Email"
                fontSize="20px"
                icon={<FaEnvelope />}
                variant="ghost"
                as="a"
                href="mailto:brenfife@gmail.com"
              />
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src="./images/denver.webp"
            alt="Image of Denver, Co"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition={{ base: "35% 75%", md: "top bottom" }}
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex>
    </Box>
  );
}
