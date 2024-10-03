import { Badge, Container, Heading, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
    return (
        <Layout title='SWEET.TV'>
            <Container mt={5}>
                <Title>
                    SWEET.TV <Badge>2023</Badge>
                </Title>
                <Heading as='h3' variant='section-title'>
                    My part in project
                </Heading>
                <Paragraph>
                    I worked as a front-end developer at SWEET.TV, where I was the main developer responsible for migrating the platform from Angular.js to Vue 3. My task was to refactor and modernize the code to improve the performance and scalability of the service. In addition, I developed new Laravel functions for backend tasks and maintained the existing Angular.js code to ensure uninterrupted operation during the transition to the new stack.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://sweet.tv'>
                            https://sweet.tv <ExternalLinkIcon mx='2px' />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Vue 3, Pinia, Laravel, Angular.js</span>
                    </ListItem>
                </List>
                <WorkImage alt='scheidt&bachmann' src='/images/works/sweettv.webp' />
            </Container>
        </Layout>
    )
}

export default Work
