import { Badge, Container, Heading, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  return (
    <Layout title='Vet.dp.ua'>
      <Container mt={5}>
        <Title>
          Vet.dp.ua <Badge>2020</Badge>
        </Title>
        <Heading as='h3' variant='section-title'>
          My part in project
        </Heading>
        <Paragraph>
        From Scratch. I was the only full-time front-end developer on the project. My tasks largely consisted of supporting and caring the project
        </Paragraph>
        <Heading as='h3' variant='section-title'>
          General info about project
        </Heading>
        <Paragraph>
          Vet dp ua - veterinary clinic in Dnipro with a large number of specialists and a large number of services
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://vet.dp.ua'>
            https://vet.dp.ua <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, SASS, JS, Google maps API</span>
          </ListItem>
        </List>
        <WorkImage alt='vet.dp.ua' src='/images/works/vetdp.png' />
        <br />
        <WorkImage alt='vet.dp.ua' src='/images/works/vetdp2.png' />
      </Container>
    </Layout>
  )
}

export default Work
