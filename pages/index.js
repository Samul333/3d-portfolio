import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoFacebook } from 'react-icons/io5'

// import thumbInkdrop from '../public/images/mario.jpg'
const thumbYouTube = '/static/images/guru-project.jpg'
const thumbInkdrop = '/static/images/mario.jpg'
const Home = () => (



  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello I'm a Full-stack developer base in Nepal!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Samul Shrestha
          </Heading>
          <p>Software Engineer ( Guitarist / Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src={'/static/images/samul.jpg'}
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a full stack developer based on Nepal. I have a passion for developing and building 
          applications. Coding has always been a part of my life and I am happy that I can do what 
          I love everyday. I am constantly seeking oppurtunities to improve myself as a programmer.
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio (Overview)
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Kathmandu, Nepal 
        </BioSection>

        <BioSection>
          <BioYear>2010</BioYear>
          Got Introduced to My First Programming Language <Link href='https://www.qbasic.net/' target={'_blank'}>(QBASIC)</Link>
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed Bachelors in Computer Science from  <Link target={'_blank'} href='https://www.tribhuvan-university.edu.np/'>Tribhuvan University</Link>.
     
        </BioSection>
  
        <BioSection>
          <BioYear>2020</BioYear>
          Got an internship in <Link target={'_blank'} href='https://www.fcgo.gov.np/'>Financial Controller General Office</Link> . Primarily worked in JAVA. Which lasted
          4 months
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Got my first full time job working as a Software Engineer for <Link target={'_blank'} href='https://www.ranenetwork.com/'>RANE</Link>, working through TekVortex
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Guitar,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Game Development 
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find me in Social Media
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Samul333?tab=repositories" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @samul333
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/samul.shrestha" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                Samul Shrestha
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/samulshrestha/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @samulshrestha  
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading mb={7} as="h3" variant="section-title">
          Interesting Projects
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://guru-chat-app-test.herokuapp.com/"
            title="Chat with anyone peer to peer"
            thumbnail={thumbYouTube}
          >
            Web Rtc Project. (Live)
          </GridItem>
          <GridItem
            href="https://super-mario-js.herokuapp.com/"
            title="Super Mario in the Web"
            thumbnail={thumbInkdrop}
          >
            Building Super Mario from Scratch
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Skills
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
