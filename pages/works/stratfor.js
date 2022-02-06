import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center,
    Image,
    Text
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Stratfor">
      <Container>
        <Title>
          Stratfor <Badge>2020-2022</Badge>
        </Title>
        <Center my={6}>
          <Image src="/static/images/work/stratfor-logo.png" boxSize={'200px'} objectFit={'contain'} alt="icon" />
        </Center>
        <P>
        Stratfor is an American geopolitics publisher and consultancy founded in 1996. Stratfor's business model is to provide individual and enterprise subscriptions to Stratfor Worldview
        </P>
        <Text mt={10} fontWeight={'bold'}>
          Responsibilities :
        </Text>
        <UnorderedList ml={4} my={4}>
          <ListItem>One of my keys responsibilities was to maintain and build new applications.</ListItem>
          <ListItem>I worked primarily with ReactJs, NextJs on the front-end and Node on the server-side</ListItem>
          <ListItem>
              I got experience in setting up local development using docker and nginx.
          </ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web application</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React/Node</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://worldview.stratfor.com/">
              Stratfor Worldview
            </Link>
          </ListItem>
        </List>

        <SimpleGrid mt={3} columns={2} gap={2}>
        <WorkImage src="/static/images/stratfor/stratfor-1.jpg" alt="amembo" />
        <WorkImage src="/static/images/stratfor/stratfor-2.jpg" alt="amembo" />
     </SimpleGrid>
     <WorkImage src="/static/images/stratfor/stratfor-3.jpg" alt="amembo" />

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
    