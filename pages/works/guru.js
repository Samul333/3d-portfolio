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
          Guru Application <Badge>2021-present</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/guru/guru-logo.png" boxSize={'200px'} objectFit={'contain'} alt="icon" />
        </Center>
        <P>
       Guru application is a web rtc project that is made to connect teachers with students.
        </P>
        <Text mt={10} fontWeight={'bold'}>
          Responsibilities :
        </Text>
        <UnorderedList ml={4} my={4}>
          <ListItem>I have built this application from the ground up. This application is currently under development</ListItem>
          <ListItem>I worked primarily with VueJs, NodeJs and Mongodb for this application</ListItem>
          <ListItem>
             This application  is currently deployed to a heroku server for testing and development.
          </ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web application</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vue/Node/MongoDB</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://guru-chat-app-test.herokuapp.com/">
              Guru Application Web Rtc
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://guru-finder.netlify.app/signup">
              Guru Website
            </Link>
          </ListItem>
        </List>

        <SimpleGrid mt={5} columns={2} gap={2}>
        <WorkImage src="/images/guru/guru-1.jpg" alt="amembo" />
        <WorkImage src="/images/guru/guru-2.jpg" alt="amembo" />


     </SimpleGrid>        
     <WorkImage src="/images/guru/guru-3.jpg" alt="amembo" />

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
    