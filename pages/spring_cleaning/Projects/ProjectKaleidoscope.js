import {Box, Center, Heading, Image, Link, Text} from "@chakra-ui/react";

const ProjectKaleidoscope = () => (
    <Box>
        <Heading textAlign={'center'}>Kaleidoscope</Heading>
        <Text>A website meant to endlessly play little video clips in a random order.</Text>
        <Text>
            The images are pulled from a publicly accessible bucket in S3,
            which are populated by a simple script that scrapes image boards online.
        </Text>
        <Text>
            This project probably holds the record for the most used thing I have made in my personal time.
            It's nice to just set it going on a monitor and have it as background noise.
        </Text>

        <Text><Link href={'http://kaleidoscope.alexlbates.com'} color={'blue.200'}>Project Link</Link></Text>
        <Text><Link href={'https://gitlab.com/alloba/kaleidoscope-combined'} color={'blue.200'}>Source Code</Link></Text>

        <Center>
            <Image src={'images/kaleidoscope/sampler.png'} maxWidth={'80%'}/>
        </Center>
    </Box>
)

export default ProjectKaleidoscope
