import { Box, Container, Heading, Progress, SimpleGrid, Stack, Text, Tooltip } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Skills from '../components/skills/skills'

import { databaseSkills, developmentOperationSkills, mobileSkills, serverSideSkills, skillsData } from '../constants/skills'

const Posts = () => (
  <Layout title="Posts">
    <Container>
   
    <Section delay={0.1}>
    <Heading as="h3" fontSize={20} mb={4}>
      <Tooltip label='Click on the technologies for more details'>
           <Text cursor={'pointer'}>Skills</Text>
      </Tooltip>
 
      </Heading>
 
      <Stack mb={5}>

        <Text fontSize={'large'} fontWeight={'bold'}>Front-End Technologies</Text>
      <Box> 
      {skillsData.map((data)=><Skills data={data}/>)}
      </Box>

      <Text fontSize={'large'} fontWeight={'bold'}>Server Side Technologies</Text>
      <Box> 
      {serverSideSkills.map((data)=><Skills data={data}/>)}
      </Box>

      <Text fontSize={'large'} fontWeight={'bold'}>Database Technologies</Text>
      <Box> 
        {databaseSkills.map((data)=><Skills data={data}/>)}
      </Box>

      
      <Text fontSize={'large'} fontWeight={'bold'}>Development Operations Technologies</Text>
      <Box> 
        {developmentOperationSkills.map((data)=><Skills data={data}/>)}
      </Box>

           
      <Text fontSize={'large'} fontWeight={'bold'}>Mobile Technologies</Text>
      <Box> 
        {mobileSkills.map((data)=><Skills data={data}/>)}
      </Box>

      </Stack>

      </Section>


      {/* <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My Fish workflow"
            thumbnail={thumbFishWorkflow}
            href="https://www.youtube.com/watch?v=KKxhf50FIPI"
          />
          <GridItem
            title="My desk setup (Late 2020)"
            thumbnail={thumbMyDeskSetup}
            href="https://www.youtube.com/watch?v=1OFDMwDlnOE"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How I’ve Attracted The First 500 Paid Users For My SaaS That Costs $5/mo"
            thumbnail={thumb500PaidUsers}
            href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
          <GridItem
            title="I stopped setting a financial goal for my SaaS"
            thumbnail={thumbFinancialGoal}
            href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={thumbHowToPriceYourself}
            href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
          />
          <GridItem
            title="I made my React Native app 50x faster"
            thumbnail={thumb50xFaster}
            href="https://www.youtube.com/watch?v=vj723NlrIQc"
          />
        </SimpleGrid>
      </Section> */}
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
