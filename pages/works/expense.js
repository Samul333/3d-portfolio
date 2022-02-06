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
          <Image src="/static/images/work/expense.jpg" boxSize={'200px'} objectFit={'contain'} alt="icon" />
        </Center>
        <P>
        Expense Tracker is a web application made to keep track of income and expense.
        </P>
        <Text mt={10} fontWeight={'bold'}>
          Responsibilities :
        </Text>
        <UnorderedList ml={4} my={4}>
          <ListItem>I had built this application from the ground up.</ListItem>
          <ListItem>The Primary technology used to make this application is React in the frontend, Node in the server side and MongoDb as a database.</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Mobile Application</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React / Node / MongoDb</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://samul333.github.io/expense-tracker/">
              Expense Tracker
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/static/images/work/expense.jpg" alt="expense" />
 

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
    