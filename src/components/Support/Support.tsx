import React from 'react';
import { Container } from '../Container';
import { Flex } from '../Flex';
import { Text, TextTitle, TextHead, TextSub } from '../Text';

const Support = () => {
  return (
    <Container responsive>
      <Flex direction='column' align='start' pad='4'>
        <TextTitle>Support Coffee</TextTitle>
        <TextHead case='initial'>Caffiene for everyone</TextHead>
        <Text>
          Curabitur posuere vitae lorem ac fringilla. Ut mollis nunc
          sed malesuada porttitor. Nulla quis suscipit lacus. Aliquam
          pharetra mauris vel velit condimentum dignissim. Vivamus in
          ligula vitae magna consectetur iaculis in at dui. Quisque
          non placerat est. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Mauris eu
          tristique sem.
        </Text>
        <TextSub>Support here</TextSub>
      </Flex>
    </Container>
  );
};

export default Support;
