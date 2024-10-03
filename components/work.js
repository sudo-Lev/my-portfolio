import { ChevronRightIcon } from '@chakra-ui/icons'
import { Badge, Box, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

export const Title = ({ children }) => (
  <Box>
    <NextLink href='/works'>Works</NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image height={500} width={500} borderRadius='lg' w='full' src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme='green' mr={2}>
    {children}
  </Badge>
)
