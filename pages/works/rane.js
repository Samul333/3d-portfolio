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
    <Layout title="Rane">
      <Container>
        <Title>
          RANE <Badge>2020-2022</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/rane-logo.png" boxSize={'200px'} objectFit={'contain'} alt="icon" />
        </Center>
        <P>
        RANE is a risk intelligence company that provides access to critical insights, analysis, and support to ensure business continuity and resiliency for our members.
        </P>
        <Text mt={10} fontWeight={'bold'}>
          Responsibilities :
        </Text>
        <UnorderedList ml={4} my={4}>
          <ListItem>One of my keys responsibilities was to maintain and build new applications.</ListItem>
          <ListItem>I worked primarily with VueJs on the front-end and Python on the server-side</ListItem>
          <ListItem>
              I got to work with Libraries such as Highchart and Mapbox to represent larger amounts of data.
          </ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web application</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>VueJs/Django</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.ranenetwork.com/">
              Rane Network
            </Link>
          </ListItem>
        </List>
        <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/Rane/threat-1.png" alt="amembo" />
        <WorkImage src="/images/Rane/threat-2png.png" alt="amembo" />
     </SimpleGrid>
     <WorkImage src="/images/Rane/threat-3.png" alt="amembo" />

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
    