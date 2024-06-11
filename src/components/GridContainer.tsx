import { GridItem, GridItemProps, VStack } from '@chakra-ui/react'
import { MotionProps, motion } from 'framer-motion';

type Props = {
  children?: any;
} & GridItemProps & MotionProps;

const MotionGridItem = motion(GridItem);

export default function GridContainer({ children, ...props }: Props) {
  return (
    <MotionGridItem
      variants={{
        hidden: {
          scale: 0.5,
          y: 50,
          opacity: 0
        },
        show: {
          scale: 1,
          y: 0, opacity: 1
        },
        // onhover: { scale: 1.02, rotate: 1 }
      }}
      borderRadius={'16px'}
      bg={'#EEEEEE'}
      colSpan={4}
      transition={{ type: "spring", mass: 3, stiffness: 400, damping: 50 }}
      // whileHover="onhover"
      overflow={'clip'}
      {...props}>
      <VStack h={'100%'} justify={'center'}>
        {children}
      </VStack>
    </MotionGridItem>
  )
}
