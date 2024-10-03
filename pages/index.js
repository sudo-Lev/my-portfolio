import {
  Container,
  Box,
  Heading,
  Button,
  useColorModeValue,
  List,
  ListItem,
  Link,
  Icon,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio-section'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container mt={5}>
        <Box
          borderRadius='lg'
          bg={useColorModeValue('blackAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          color='white'
          align='center'
        >
          Hello I&apos;m a front-end developer based in Dnipro!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Misiliuk Lev
            </Heading>
            <p>Follow me for more info</p>
          </Box>
          {/* <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align='center'
          >
            <Image
              borderColor='whiteAlpha.800'
              borderWidth={2}
              borderStyle='solid'
              maxWidth='100px'
              display='inlinde-block'
              alt='Misiliuk Lev'
              borderRadius='full'
              src='images/lev.jpeg'
            />
          </Box> */}
        </Box>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Work
          </Heading>
          <Paragraph>
            Hi. My name is Lev and I&apos;m a front-end developer!
            <br />
            I&apos;ve been working as a JavaScript developer for more than 3
            years now and I&apos;ve tried the most popular frontend frameworks
            such as React, Angular, and Vuejs. And although Vuejs is the main
            one for me to switch to React or Angular for me will not be
            difficult because I have experience with these frameworks.
            <br />
            I have also worked with NodeJs and Python, and am familiar with
            databases. It is not a problem for me to tweak small server
            applications as I have experience with them.
            <br />
            I have a lot of experience working in large and small teams. I
            interact well with different development departments, I understand
            all backend processes, and I understand the flow that designers
            follow in their work, so it is not a problem for me to find a common
            language with my colleagues.
            <br />
            I am very easy to work with, very independent, and ready to grow. I
            don&apos;t need to be followed closely because I understand what the
            business wants and I give it 100% from my side.
            <br />
            I have decent experience working in English-speaking teams. Morning
            standup, big meetings, gathering requirements from the customer
            with this I am well familiar!
            <br />
            I am ready to mentor new developers and help the company grow both
            in the media field and technical department. I believe that
            transferring knowledge to new people makes it better not only for
            them but also for you as it is an integral factor for growth.
            <br />I have a year of experience in QA so I understand how my work
            will be checked and I will not let bugs leak into the system
          </Paragraph>
          <Box align='center' my={4}>
            <NextLink href='/works'>
              <Button
                rightIcon={<ChevronRightIcon></ChevronRightIcon>}
                colorScheme='teal'
              >
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Skills
          </Heading>
          <Paragraph>
            JavaScript (ES6+), React/Redux/Next.js, Node.js, GraphQL, Vue 3/Vue
            2/Vuex/Nuxt.js, Angular.js, RESTful APIs, Webpack/Gulp.js, HTML5,
            CSS/Sass/Less, Tailwind, Figma, Chakra UI, Element UI, Git, Cypress
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Dnipro, Ukraine
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Worked as Quality Assurance at SplineStudio
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked as Front-end developer at SplineStudio (Angular.js)
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked as Front-end developer at SplineStudio (React, Redux)
          </BioSection>
          <BioSection>
            <BioYear>2022-2023</BioYear>
            Worked as Front-end developer at SplineStudio (Vue, Vuex, Pinia)
          </BioSection>
          <BioSection>
            <BioYear>2023-2024</BioYear>
            Worked as Front-end developer at SWEET.TV, where I led the migration from Angular.js to Vue 3, developed features in Laravel, and maintained Angular.js code.
          </BioSection>
        </Section>

        <Section delay={0.4}>
          <Heading as='h3' variant='section-title'>
            What I like
          </Heading>
          <Paragraph>
            Art, Music, Movies, Books, Comics, Tech, Science, Design, Games
            etc..
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            Useful links
          </Heading>
          <List>
            <ListItem>
              <Link href='https://github.com/LevMisiliuk' target='_blank'>
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @levmisiliuk
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href='https://www.linkedin.com/in/lev-misiliuk/'
                target='_blank'
              >
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  levmisiliuk
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href='https://www.instagram.com/levmisiliuk/'
                target='_blank'
              >
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  levmisiliuk
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
