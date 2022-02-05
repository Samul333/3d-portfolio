import { Box, Progress, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import SkillModal from '../modal/Modal';

function skills({data}) {
  console.log(data)
  const {name,level} = data
  const { isOpen, onOpen, onClose } = useDisclosure()
  return <Box ml={3} mb={2}>
         <Text textAlign={'left'} cursor={'pointer'} onClick={onOpen} mb={2} ml={0}>{name}</Text>
          <Progress width={'80%'} value={level} size='xs' colorScheme='pink' />
          <SkillModal data={data} isOpen={isOpen}  onClose={onClose}/>
  </Box>;
}

export default skills;
