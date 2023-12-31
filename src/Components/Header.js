import React from 'react'
import { Flex, Image, Link } from '@chakra-ui/react'

function Header() {
  return (
    <>
    <Flex w='full' justifyContent='space-between' bgColor='green.50'>
        <Flex>
            <Image boxSize='60px'  borderRadius='full' src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"/>
        </Flex>
        <Flex mt='1rem' justifyContent='space-around' w='25rem'>
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Contact Us</Link>
            <Link>Cart</Link>
        </Flex>
    </Flex>
    </>
  )
}

export default Header