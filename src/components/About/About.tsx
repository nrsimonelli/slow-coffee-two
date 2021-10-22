import React from 'react';
import { Container } from '../Container';
import { Flex } from '../Flex';
import { Text, TextTitle, TextHead, TextSub } from '../Text';

const About = () => {
  return (
    <Container responsive>
      <Flex direction='column' align='start' pad='4'>
        <TextTitle>Slow Coffee</TextTitle>
        <TextHead case='initial'>About this Page</TextHead>
        <Text>
          Sed rhoncus libero nec erat dictum suscipit et sit amet
          neque. Ut cursus felis imperdiet lacus pretium consequat ut
          id elit. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Praesent velit ipsum, accumsan in volutpat semper,
          aliquet quis magna. Proin dapibus pellentesque mi, id
          elementum velit consectetur interdum. Sed leo turpis,
          fringilla nec felis quis, interdum tincidunt lacus. Etiam
          vitae faucibus nisl. Ut convallis, massa gravida molestie
          semper, nulla risus dapibus arcu, vitae eleifend leo eros eu
          justo.
        </Text>
        <TextSub>More Info</TextSub>
      </Flex>
    </Container>
  );
};

export default About;
