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
          BlueAuditor <Badge>2021</Badge>
        </Title>
        <Heading as='h3' variant='section-title'>
            My part in project
        </Heading>
        <Paragraph>
          Most of what I&apos;ve been working on: I had to implement complex forms with steps and saving the state of each previous step. There was a lot of work with charts, namely chart.js
          from the achievements I was able to close a difficult task concerning the chart, I had to make a custom implementation.
          Also, there was a need to create and implement custom components such as inner tabs, paginations, etc.
        </Paragraph>
        <Heading as='h3' variant='section-title'>
          General info about project
        </Heading>
        <Paragraph>
          Blue Auditor is the only digital marketplace platform that brings
          together all major green building certification standards in one
          single platform. We provide efficient processes for real estate
          managers, sustainability consultants, auditors and rating system
          providers. Green Building Certification has never been that efficient.
          We are still working on this project by adding new roles and features.
          At the initial stage, we conducted a thorough study of the target
          audience and a variety of projects related to real estate. We spent
          many hours discussing building the right architecture as this project
          can be considered unique.. As a result, we can painlessly add new
          functions to the formed interface. We used Symfony PHP framework to
          build this project. In addition, our architecture allows us to
          implement new features and change application logic very quickly, to
          ensure that we can tune it according to market requests. We wish our
          customer BlueEditor great success in all endeavours!
        </Paragraph>
         <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://blueauditor.com/'>
            https://blueauditor.com/ <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <Paragraph>Just a landing page</Paragraph>
          <ListItem>
            <Meta>App</Meta>
            <Link href='https://app.blueauditor.com/'>
            https://app.blueauditor.com/ <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <Paragraph>Application. But I can&apos;t provide you creds, sorry</Paragraph>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vue 3, Vuex, StoryBook</span>
          </ListItem>
        </List>
        <WorkImage alt='blueAuditor' src='/images/works/blueauditor.png' />
      </Container>
    </Layout>
  )
}

export default Work
