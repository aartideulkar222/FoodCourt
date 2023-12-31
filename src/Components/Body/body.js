import { Button, Flex, Input } from '@chakra-ui/react'
import React from 'react'

function Body() {
  return (
    <Flex>
        <Flex mt='1rem' justifyContent='space-around' w='35rem'>
            <Input w='12rem'/>
            <Button bgColor='green.50'>Submit</Button>
            <Button bgColor='green.50'>Top Rated Reastuarants</Button>
        </Flex>
    </Flex>
  )
}

export default Body