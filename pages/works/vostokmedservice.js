import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  return (
    <Layout title='BlueAuditor Marketplace'>
      <Container mt={5}>
        <Title>
          Vostokmedservice <Badge>2021</Badge>
        </Title>
        <Paragraph>
          Vostok-Medservice is a specialized company in the field of
          thaumatology, orthopaedics and neurosurgery, as well as the exclusive
          representative of the Hungarian manufacturer Medical Kft in Ukraine,
          which produces thousands of implants made of high-quality stainless
          steel and titanium. Our company offers a wide range of medical
          equipment and surgical instruments. The main advantages of the
          products offered by Vostok-Medservice are the ratio of high quality,
          affordable price, and convenient, intuitive instruments for doctors.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://vostokmedservice.com.ua'>
            https://vostokmedservice.com.ua <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vue 3, Element UI, I18n</span>
          </ListItem>
        </List>
        <WorkImage alt='vostokmedservice' src='/images/works/vostokmedservice.png' />
        <WorkImage alt='vostokmedservice catalog' src='/images/works/vostokmedservice_2.png' />
      </Container>
    </Layout>
  )
}

export default Work
