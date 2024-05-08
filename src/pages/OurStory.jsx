import {
    Badge,
    chakra,
    Code,
    Heading,
    List,
    ListItem,
    OrderedList,
    Tag,
    Text,
  } from '@chakra-ui/react'
  import React from 'react'
  import { Layout } from '../components/Layout'
  import { Link } from 'react-router-dom'
  import { useAuth } from '../contexts/AuthContext'
  
  export default function OurStoryPage() {
    const {currentUser}= useAuth()
    return (
      <Layout>
        
        <Heading>Our Story</Heading>
  
  
  
      </Layout>
    )
  }