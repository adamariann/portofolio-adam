import LandingLayout from '../layouts/LandingLayout'
import { Grid, VStack, Text, Icon, Image, Box } from '@chakra-ui/react'
import GridContainer from '../components/GridContainer'
import { motion } from 'framer-motion'
import { Envelope, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import { FlutterLogo, LaravelLogo, NodeJsLogo, ReactLogo } from '../components/icon/CodeLogo';

const MotionGrid = motion(Grid);

export default function LandingPage() {
  return (
    <Box
      backgroundImage="url('/bg.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      w="100%"
      minH="100vh"
    >
      <LandingLayout className="body">
        <VStack w={'100%'} justify={'center'} px={4} py={12}>
          <MotionGrid
            initial="hidden"
            animate="show"
            autoFlow={'dense'}
            transition={{ staggerChildren: 0.1, delayChildren: 0 }}
            w={'100%'}
            templateColumns={'repeat(12, 1fr)'}
            gap={4}
            maxW={'1280px'}>

            <GridContainer
              colSpan={{ base: 12, md: 8 }}
              rowSpan={[null, 2]}>
              <VStack
                w={'100%'}
                h={'100%'}
                align={'start'}
                transition={"200ms"}
                gap={0}
                p={4}>
                <Text fontSize={'36px'} fontWeight={700}>Hi, I'm adam!</Text>
                <Text fontSize={'24px'} mt={2}>Welcome to my portfolio! I'm passionate about <span style={{ color: 'blue', fontWeight: 'bold', fontSize: '28px' }}>website</span> and mobile engineering, always exploring new tech to create innovative solutions and top-notch user experiences. Dive into my projects, and let's connect if you're interested in collaborating or learning more.</Text>
              </VStack>
            </GridContainer>

            <GridContainer
              colSpan={{ base: 6, sm: 3, md: 2 }}>
              <VStack
                w={'100%'}
                h={'100%'}
                justify={'center'}
                color={"#222222"}
                _hover={{ color: 'whitesmoke', bg: '#DD2A7B' }}
                transition={"200ms"}
                role='group'
              >
                <VStack
                  w={'100%'}
                  h={'100%'}
                  _hover={{ transform: 'rotate(10deg)' }}
                  transition={'200ms'}
                  justify={'center'}
                  p={4}>
                  <Icon
                    as={InstagramLogo}
                    weight="bold"
                    fontSize={['48px', '32px', '32px', '48px']} />
                </VStack>
              </VStack>
            </GridContainer>

            <GridContainer
              colSpan={{ base: 6, sm: 3, md: 2 }} >
              <VStack
                w={'100%'}
                h={'100%'}
                justify={'center'}
                color={"#222222"}
                _hover={{ color: 'whitesmoke', bg: '#153448' }}
                transition={'200ms'}>
                <VStack
                  w={'100%'}
                  h={'100%'}
                  _hover={{ transform: 'rotate(10deg)' }}
                  transition={'200ms'}
                  justify={'center'}
                  p={4}>
                  <Icon
                    as={GithubLogo}
                    weight="bold"
                    fontSize={['48px', '32px', '32px', '48px']} />
                </VStack>

              </VStack>
            </GridContainer>

            <GridContainer
              colSpan={{ base: 6, sm: 3, md: 2 }}>
              <VStack
                w={'100%'}
                h={'100%'}
                justify={'center'}
                color={'#222222'}
                _hover={{ color: 'whitesmoke', bg: '#0e76a8' }}>
                <VStack
                  w={'100%'}
                  h={'100%'}
                  _hover={{ transform: 'rotate(10deg)' }}
                  transition={'200ms'}
                  justify={'center'}
                  p={4}>
                  <Icon
                    as={LinkedinLogo}
                    weight="bold"
                    fontSize={['48px', '32px', '32px', '48px']} />
                </VStack>
              </VStack>
            </GridContainer>

            <GridContainer
              colSpan={{ base: 6, sm: 3, md: 2 }}>
              <VStack
                w={'100%'}
                h={'100%'}
                color={'#222222'}
                justify={'center'}
                _hover={{ color: 'whitesmoke', bg: '#EA4335' }}
                role='group'
                transition={'200ms'}
                p={4}>
                <VStack
                  w={'100%'}
                  h={'100%'}
                  justify={'center'}>
                  <Icon
                    as={Envelope}
                    weight="bold"
                    _groupHover={{ transform: 'rotate(10deg)', transition: '200ms' }}
                    fontSize={['48px', '32px', '32px', '48px']} />
                </VStack>
              </VStack>
            </GridContainer>

            <GridContainer
              bg={'transparent'}
              colSpan={{ base: 12, sm: 12, md: 12, lg: 6 }}>
              <VStack
                h={'100%'}
                minH={'300px'}
                w={'100%'}
                minW={'261px'}
                justify={'end'}
                align={'start'}
                pos={'relative'}
                role='group'>
                <VStack
                  h={'50%'}
                  w={'100%'}
                  justify={'end'}
                  align={'end'}
                  bg={'#EEEEEE'}
                  pos={'absolute'}
                  borderRadius={'16px'}
                  p={4}
                  transition={'200ms'}>
                </VStack>
                <Box
                  position={'absolute'}
                  h={'100%'}
                  transition={'200ms'}>
                  <Image src='/music.png' h={'100%'} transition={'200ms'} />
                </Box>
              </VStack>
            </GridContainer>

            <GridContainer
              colSpan={{ base: 12, sm: 12, md: 12, lg: 6 }}
              p={4}>
              <VStack
                h={'100%'}
                align={'start'}>
                <Text fontSize={'24px'}>When I'm not coding awesome web and mobile apps, I'm all about the music. From rocking out on my guitar to discovering new artists, music keeps me inspired. It’s my creative escape and my passion. Let’s jam and make some noise together! 🎸🎤</Text>
              </VStack>
            </GridContainer>


            <GridContainer
              colSpan={{ base: 6, sm: 3, md: 2 }}>
              <VStack
                w={'100%'}
                h={'100%'}
                justify={'center'}
                color={"#222222"}
                _hover={{ color: 'whitesmoke', bg: '#027DFD' }}
                transition={"200ms"}
                role='group'
              >
                <VStack
                  w={'100%'}
                  h={'100%'}
                  _hover={{ transform: 'rotate(10deg)' }}
                  transition={'200ms'}
                  justify={'center'}
                  p={4}>
                  <Icon
                    as={FlutterLogo}
                    fontSize={['48px', '32px', '32px', '48px']} />
                </VStack>
              </VStack>
            </GridContainer>

            <GridContainer
              colSpan={{ base: 6, sm: 3, md: 2 }} >
              <VStack
                w={'100%'}
                h={'100%'}
                justify={'center'}
                color={"#222222"}
                _hover={{ color: 'whitesmoke', bg: '#3c873a' }}
                transition={'200ms'}>
                <VStack
                  w={'100%'}
                  h={'100%'}
                  _hover={{ transform: 'rotate(10deg)' }}
                  transition={'200ms'}
                  justify={'center'}
                  p={4}>
                  <Icon
                    as={NodeJsLogo}
                    fontSize={['48px', '32px', '32px', '48px']} />
                </VStack>

              </VStack>
            </GridContainer>

            <GridContainer
              colSpan={{ base: 6, sm: 3, md: 2 }} >
              <VStack
                w={'100%'}
                h={'100%'}
                justify={'center'}
                color={"#222222"}
                _hover={{ color: 'whitesmoke', bg: '#fb503b' }}
                transition={'200ms'}>
                <VStack
                  w={'100%'}
                  h={'100%'}
                  _hover={{ transform: 'rotate(10deg)' }}
                  transition={'200ms'}
                  justify={'center'}
                  p={4}>
                  <Icon
                    as={LaravelLogo}
                    fontSize={['48px', '32px', '32px', '48px']} />
                </VStack>

              </VStack>
            </GridContainer>

            <GridContainer
              colSpan={{ base: 6, sm: 3, md: 2 }} >
              <VStack
                w={'100%'}
                h={'100%'}
                justify={'center'}
                color={"#222222"}
                _hover={{ color: 'whitesmoke', bg: '#282c34' }}
                transition={'200ms'}>
                <VStack
                  w={'100%'}
                  h={'100%'}
                  _hover={{ transform: 'rotate(10deg)' }}
                  transition={'200ms'}
                  justify={'center'}
                  p={4}>
                  <Icon
                    as={ReactLogo}
                    fontSize={['48px', '32px', '32px', '48px']} />
                </VStack>

              </VStack>
            </GridContainer>

          </MotionGrid>
        </VStack>
      </LandingLayout>
    </Box>
  )
}
