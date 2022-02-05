import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'



import thumbGuruRTC from '../public/images/guru-project.jpg';

import thumbRain from '../public/images/works/rane.png';
import thumbStrat from '../public/images/works/stratfor.jpg';
import thumbNotify from '../public/images/works/notifyMe.jpg';
import thumbExpense from '../public/images/works/expense.jpg';
import thumbGuruNode from '../public/images/works/guru-node.jpg';





const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Worked On
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="guru" title="Web RCT Project" thumbnail={thumbGuruRTC}>
           A Real Time Peer to Peer Video/Audio Chat application.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="rane"
            title="RANE"
            thumbnail={thumbRain}
          >
            RANE is a risk intelligence company that provides access to critical insights and world-class expertise to ensure business continuity
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="stratfor"
            title="Stratfor"
            thumbnail={thumbStrat}
          >
           Stratfor Worldview is the world's leading geopolitical intelligence platform. Get the latest news and intelligence on global issues impacting business
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="notify-me" thumbnail={thumbNotify} title="NotifyMe">
            A mobile application build to send notifications to students. This was a 
            college project.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Personal Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.7}>
          <WorkGridItem
            id="expense"
            thumbnail={thumbExpense}
            title="Expense Tracker"
          >
            This is a simple responsive expense tracker.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="guru-node" thumbnail={thumbGuruNode} title="Rest API">
           A rest api client for guru web application using NodeJS+ Express in the server side and MongoDB as database
          </WorkGridItem>
        </Section>
      </SimpleGrid>


    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
