import { StackProps, VStack } from '@chakra-ui/react'

interface Props extends StackProps {
  children: any;
}
export default function LandingLayout({ children, ...props }: Props) {
  return (
    <VStack
      align={'stretch'}
      w={'100%'}
      justify={'center'}
      gap={0}
      // px={[5, null, 8]}
      {...props}
    >
      {children}
    </VStack>
  )
}
