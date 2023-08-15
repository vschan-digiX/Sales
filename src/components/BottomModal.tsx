import React, {useState, useRef, useEffect} from 'react';

import {Text, Modal, VStack, Button, KeyboardAvoidingView} from 'native-base';
import FloatingInput from '../themes/components/FloatingInput';
import {Keyboard, Platform} from 'react-native';
import theme from '../themes/theme';

type props = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  onPress: (text:string) => void;
};



const BottomModal = ({isOpen, onClose, onPress}: props) => {
  const [text, setText] = useState("")
  return (
    <Modal
      variant="bottom"
      isOpen={isOpen}
      onClose={() => onClose(false)}
      accessibilityLabel="Default Modal">
      <KeyboardAvoidingView w={'full'} behavior="padding">
        <Modal.Content variant="bottom">
          <Modal.CloseButton />
          <VStack space={4}>
            <Text variant="h6" bold>
              Enter Mobile Number
            </Text>
            <FloatingInput changeText={text => setText(text)} type="number" label="Default Input" placeholder="Default Input" />
            <Button isDisabled={!text} onPress={()=> onPress(text)} mr="1" mb="2">
              Procceed
            </Button>
          </VStack>
        </Modal.Content>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default BottomModal;
