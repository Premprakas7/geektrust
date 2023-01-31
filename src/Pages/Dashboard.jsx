import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../Components/Header'
import Products from '../Components/Products'
import Sidebar from '../Components/Sidebar'

const Dashboard = () => {
  return (
    <div>
        <Flex>
            <Box><Sidebar/></Box>
            <Box>
                <Box><Header/></Box>
                <Box><Products/></Box>
            </Box>
        </Flex>
      
    </div>
  )
}

export default Dashboard
