import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'

const Home = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hi! I&apos;m an Industrial Engineer that loves programming, electronics
        and maths!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Arturo Avila
          </Heading>
          <p>Industrial Engineer / Keyboard Designer / Developer </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
