import { Badge, Container, Heading, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  return (
    <Layout title='BlueAuditor Marketplace'>
      <Container mt={5}>
        <Title>
          FareGo+ <Badge>2021</Badge>
        </Title>
        <Heading as='h3' variant='section-title'>
          My part in project
        </Heading>
        <Paragraph>
        I was the only full-time front-end developer on the project. My tasks largely consisted of implementing new tabs with various information from API.
        Among the difficult and interesting tasks was the realization of multiple filters by query parameters in the API. Optimization of tabs loading and API calls.
        There were tasks where it was necessary to realize pooling. That is, we request data from the backend for example every 1.5 seconds and until we get for example that all objects in the array have the status &apos;done&apos; we continue to request data.
        I also carried out a large migration from graphQL to REST API.
        </Paragraph>
        <Heading as='h3' variant='section-title'>
          General info about project
        </Heading>
        <Paragraph>
          Brand FareGo provides advanced fare collection systems and an
          extensive service range that enables transport operators to focus on
          their core business. The modular FareGo portfolio covers Account-based
          Ticketing as well as card-based systems, devices for ticket sales and
          validation, cloud-based data management and services that support
          smooth operations at all times.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://www.scheidt-bachmann.de/en/fare-collection-systems/solutions'>
            https://www.scheidt-bachmann.de/en/fare-collection-systems/solutions <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <Paragraph>Info about project</Paragraph>
          <ListItem>
            <Meta>App</Meta>
            <Link href='https://farego-plus.com'>
            https://farego-plus.com <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <Paragraph>Application. But I can&apos;t provide you creds, sorry</Paragraph>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vue 2/3, Vuex, GraphQL, REST, Element UI</span>
          </ListItem>
        </List>
        <WorkImage alt='scheidt&bachmann' src='/images/works/scheidt_bachmann.webp' />
      </Container>
    </Layout>
  )
}

export default Work
