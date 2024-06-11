import { Text, HStack, StackProps, Image, VStack, Button } from '@chakra-ui/react'
import ContentLayout from '../layouts/ContentLayout'
import { Link } from 'react-router-dom'

interface Props extends StackProps {
  children?: any
}

export default function TopNav({ children, ...props }: Props) {
  return (
    <HStack w={'100%'} justify={'center'} gap={0} h={'72px'} bg={'#F3F7EC'}{...props}>
      <ContentLayout direction={'row'} justify={'space-between'} h={'100%'} align={'center'}>
        <VStack h={'100%'} justify={'center'}>
          <Image src='/logo.png' h={'50%'}></Image>
        </VStack>
        <HStack h={'100%'} justify={'center'} gap={0}>
          <Button
            as={Link}
            to={'/'}
            flexShrink={0}
            fontWeight={600}
            bg={'transparent'}
            _hover={{ color: "p.500", transform: "translateY(-2px)" }}
            transition={"200ms"}
            px={3}
            color={props?.color || "current"}
          >
            Beranda
          </Button>
          <Button
            as={Link}
            to={'/'}
            flexShrink={0}
            fontWeight={600}
            bg={'transparent'}
            _hover={{ color: "p.500", transform: "translateY(-2px)" }}
            transition={"200ms"}
            px={3}
            color={props?.color || "current"}
          >
            Portofolio
          </Button>
          <Button
            as={Link}
            to={'/'}
            flexShrink={0}
            fontWeight={600}
            bg={'transparent'}
            _hover={{ color: "p.500", transform: "translateY(-2px)" }}
            transition={"200ms"}
            px={3}
            color={props?.color || "current"}
          >
            Tentang Kami
          </Button>
          <Button
            as={Link}
            to={'/'}
            flexShrink={0}
            fontWeight={600}
            bg={'transparent'}
            _hover={{ color: "p.500", transform: "translateY(-2px)" }}
            transition={"200ms"}
            px={3}
            color={props?.color || "current"}
          >
            Kontak
          </Button>
        </HStack>
        <HStack>
          <Text>
            About
          </Text>
          <Text>
            Contact
          </Text>
        </HStack>
      </ContentLayout>

    </HStack>
  )
}
