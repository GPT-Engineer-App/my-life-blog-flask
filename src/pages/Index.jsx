import { Box, Heading, Text, Image, VStack, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box maxW="800px" mx="auto" p={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          My Personal Blog
        </Heading>

        <Image src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwc21pbGluZyUyMG1hbiUyMG91dGRvb3JzfGVufDB8fHx8MTcxMjgyMjExMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" borderRadius="full" boxSize="200px" mx="auto" />

        <Text fontSize="xl" textAlign="center">
          Welcome to my personal blog! I'm John and I love to travel, cook, and spend time with family and friends. Join me as I share stories and experiences from my life.
        </Text>

        <Divider />

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Weekend Getaway
          </Heading>
          <Text fontSize="lg">Last weekend, my wife and I took a much needed break and drove up to the mountains for a weekend getaway. The fall colors were absolutely stunning! We went for hikes, enjoyed cozy meals by the fireplace, and completely unplugged.</Text>
          <Image src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYWxsJTIwY29sb3JzJTIwbW91bnRhaW5zfGVufDB8fHx8MTcxMjgyMjExMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Fall mountains" mt={6} />
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Homemade Pizza Night
          </Heading>
          <Text fontSize="lg">We love making pizza from scratch at home. It's become a fun tradition for our family. The kids help roll out the dough and customize their toppings. This week we experimented with a pesto sauce instead of tomato and it was a hit!</Text>
          <Image src="https://images.unsplash.com/photo-1614442316719-1e38c661c29c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHBpenphfGVufDB8fHx8MTcxMjgyMjExMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Homemade pizza" mt={6} />
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Learning the Guitar
          </Heading>
          <Text fontSize="lg">I've always wanted to learn to play the guitar, so I finally signed up for lessons! It's a lot harder than it looks but I'm really enjoying the challenge. My goal is to be able to play some simple songs by the end of the year. Wish me luck!</Text>
          <Image src="https://images.unsplash.com/photo-1520167112707-56e25f2d7d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBwbGF5aW5nJTIwYWNvdXN0aWMlMjBndWl0YXJ8ZW58MHx8fHwxNzEyODIyMTEyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Playing guitar" mt={6} />
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
