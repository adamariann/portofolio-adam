import { Stack, StackProps } from '@chakra-ui/react'

interface Props extends StackProps {
  children: any;
}
export default function ContentLayout({ children, ...props }: Props) {
  return (
    <Stack
      direction={'column'}
      w={'100%'}
      px={[5, 6, 8]}
      maxW={'1280px'}
      mx={'auto'}
      {...props}>
      {children}
    </Stack>

  )
}
