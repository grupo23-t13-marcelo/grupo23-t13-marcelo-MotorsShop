import { Box, Skeleton } from "@chakra-ui/react";

function CardCarsSkeleton() {
  return (
    <Box bg="gray.50" minW="320px" maxW="250px" h="380px">
      <Skeleton height="190.96px" />
      <Box p="6">
        <Skeleton height="20px" width="50%" mb={3} />
        <Skeleton height="15px" width="70%" />
        <Skeleton height="15px" width="80%" mt={2} />
      </Box>
    </Box>
  );
}

export default CardCarsSkeleton;
