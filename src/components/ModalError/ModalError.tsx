import {useIsFocused} from '@react-navigation/native';
import * as React from 'react';
import {useRef, useState, useEffect} from 'react';
import {Platform, TextInput, View} from 'react-native';
import {Keyboard, KeyboardEvent} from 'react-native';

import {
  Box,
  HStack,
  Input,
  Button,
  Modal,
  Text,
  Avatar,
  VStack,
  KeyboardAvoidingView,
} from 'native-base';
import Clipboard from '@react-native-community/clipboard';
import {History} from '../../assets/icons';
import FloatingInput from '../../themes/components/FloatingInput';


type props = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  onPress: () => void;
  title: string;
  body: string;
};

const NUMBER_OF_INPUTS = 6;

export default function ModalError({isOpen, onClose, onPress, title , body}: props) {


  return (
    <Modal
      onClose={() => {
        onClose(false);
      }}
      isOpen={isOpen}
      accessibilityLabel="Default Modal">
      <Modal.Content>
        <Modal.CloseButton />
        <Avatar variant={"error"}>
          <History color="#D92D20" />
        </Avatar>

        <VStack space={1} pb={5}>

        <Text variant="h6" bold >{title}</Text>
        <Text color="gray.600">{body}</Text>

        </VStack>
          <Button
            variant={"destructive"}
            onPress={() => {
              console.log('hello world');
            }}
            mr="1"
            mb="2">
            Okay
          </Button>
      </Modal.Content>
    </Modal>
  );
}

