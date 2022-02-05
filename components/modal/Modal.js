import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Center,
    Image,
    Text,
    Box,
    Badge,
  } from '@chakra-ui/react'
import Section from '../section';

function SkillModal({isOpen,onClose,data}) {
    
    if(!data) return <></>;

    const {name,logo,description,skill,relatedTech} = data;
   
    return (
      <>  
        <Modal motionPreset='scale' isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Section delay={0.1}>

          
            <ModalHeader>
              <Center>
              {name}
              </Center>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>

              <Center display={'flex'} flexDirection={'column'}>
              <Image
                    objectFit={'contain'}
                    src={logo}
                    boxSize="150px"
                  />
           
              </Center>
                <Box mt={5}>
                <Text>{description}</Text>
                <Text mt={3} fontSize={'small'} fontWeight={'bold'}>Comfort : {skill}</Text>
                </Box>
          {relatedTech &&  <Box mt={4}>
                <Text fontSize={'small'}>Related Technologies</Text>
                 {relatedTech.map((tech)=><Badge size={'small'} color={'white'} colorScheme='white'>{tech}</Badge>)}
              </Box>}
            </ModalBody>
  
            <ModalFooter>
            
            </ModalFooter>
            </Section>
          </ModalContent>
        </Modal>
      </>
    )
}

export default SkillModal;
