import { Badge, Container, Heading, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  return (
    <Layout title='Okoshko.ua'>
      <Container mt={5}>
        <Title>
          Okoshko.ua <Badge>2021-2022</Badge>
        </Title>
        <Heading as='h3' variant='section-title'>
          My part in project
        </Heading>
        <Paragraph>
         From scratch I have build the landing page with a small application inside. I was the only full-time front-end developer on the project.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://okoshko.ua'>
            https://okoshko.ua <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vue 2/3, REST</span>
          </ListItem>
        </List>
        <WorkImage alt='okoshko' src='/images/works/okoshko.png' />
        <br />
        <WorkImage alt='okoshko2' src='/images/works/okoshko2.png' />
      </Container>
    </Layout>
  )
}

export default Work
