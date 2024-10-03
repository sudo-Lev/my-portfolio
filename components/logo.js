import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;
  max-height: 40px;

  img {
    transition: 1s all ease;
  }

  &:hover img {
    transition: 1s all ease;
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/anime.svg`

  return (
    <Link href='/'>
      <LogoBox>
        <Image src={footPrintImg} alt='logo' width={30} height={30} />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c'
          fontWeight='bold'
          ml={3}
        >
          Misiliuk Lev
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
