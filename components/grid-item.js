import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Heading } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w='100%' align='center'>
    <LinkBox cursor='pointer'>
      <Image
        className='grid-item-thumbnail'
        placeholder='blur'
        loading='lazy'
        src={thumbnail}
        alt={title}
        width={500}
        height={500}
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
        <Text fontSize={14}{...children}></Text>
      </LinkOverlay>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, href, thumbnail }) => (
  <Box w='100%' align='center'>
    <Heading href={`/works/${href}`}>
      <LinkBox cursor='pointer'>
        <Image height={140} src={thumbnail} alt={title} className='grid-item-thumbnail' placeholder='blue' />
        <LinkOverlay href={`/works/${href}`}>
          <Text mt={2} fontSize={20}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Heading>
  </Box>
)

export const GridItemStyle = () => (
  <Global styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
  `} />
)