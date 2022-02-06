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
    <Layout title="NotifyMe">
      <Container>
        <Title> 
          NotifyMe <Badge>2019</Badge>
        </Title>
        <Center my={6}>
          <Image src="/static/images/notify/notify-logo.webp" boxSize={'200px'} objectFit={'contain'} alt="icon" />
        </Center>
        <P>
       NotifyMe is a college project made to send notifications to students.
        </P>
        <Text mt={10} fontWeight={'bold'}>
          Responsibilities :
        </Text>
        <UnorderedList ml={4} my={4}>
          <ListItem>I had built this application from the ground up as a final year project.</ListItem>
          <ListItem>I worked primarily with Java and Firebase.</ListItem>
          <ListItem>
             I got experience with the development life cycle of a mobile application.
          </ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Mobile Application</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java/Firebase</span>
          </ListItem>
          <ListItem>
            <Meta>Playstore</Meta>
            <Link href="https://play.google.com/store/apps/details?id=com.huske.sharedexample&hl=en">
              Notify Me
            </Link>
          </ListItem>
        </List>

        <SimpleGrid mt={3} columns={2} gap={2}>
        <WorkImage src="/static/images/notify/notify-1.webp" alt="amembo" />
        <WorkImage src="/static/images/notify/notify-2.webp" alt="amembo" />
     </SimpleGrid>
 

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
    