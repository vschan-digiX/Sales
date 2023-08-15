import React from 'react';
import Svg, { Path, G, Rect } from 'react-native-svg';
import { ISvgProps } from '../../utils/ISvgProps';

export function ApplePay({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 2,
  ...props
}: ISvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 34 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={width} height={height} x=".5" y=".5" fill="#fff" rx="3.5" />
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M9.45 8.343c-.286.352-.743.63-1.2.59-.056-.476.167-.981.429-1.294.285-.361.784-.62 1.189-.639.047.496-.138.981-.419 1.343Zm.413.684c-.402-.024-.77.126-1.066.248-.19.078-.352.144-.475.144-.138 0-.306-.07-.495-.148-.248-.103-.53-.22-.827-.214-.68.01-1.313.411-1.66 1.05-.714 1.28-.186 3.173.504 4.213.338.516.742 1.08 1.275 1.061.234-.01.402-.084.577-.16.2-.09.41-.182.735-.182.315 0 .514.09.706.176.182.082.357.161.617.156.551-.01.899-.515 1.236-1.03.365-.554.525-1.094.55-1.176l.002-.01-.013-.006a1.853 1.853 0 0 1-1.062-1.693c-.009-1 .739-1.507.856-1.586l.014-.01c-.475-.734-1.217-.813-1.474-.833Zm3.82 6.29V7.59h2.782c1.436 0 2.44 1.03 2.44 2.537s-1.023 2.548-2.478 2.548h-1.594v2.642h-1.15Zm1.15-6.716h1.327c1 0 1.57.555 1.57 1.531 0 .977-.57 1.537-1.574 1.537h-1.323V8.6Zm7.872 5.789c-.304.604-.975.986-1.698.986-1.07 0-1.817-.664-1.817-1.665 0-.991.723-1.561 2.06-1.646l1.436-.089v-.426c0-.63-.395-.972-1.099-.972-.58 0-1.003.313-1.089.789h-1.037c.034-1.002.937-1.73 2.16-1.73 1.317 0 2.174.718 2.174 1.834v3.846h-1.066v-.927h-.024Zm-1.389.07c-.613 0-1.003-.308-1.003-.779 0-.486.376-.768 1.094-.813l1.28-.084v.436c0 .724-.59 1.24-1.37 1.24Zm6.012 1.159c-.461 1.353-.989 1.8-2.111 1.8-.086 0-.371-.01-.438-.03v-.927c.071.01.247.02.338.02.509 0 .794-.224.97-.803l.105-.343-1.95-5.625h1.203l1.355 4.565h.024L28.18 9.71h1.17l-2.022 5.908Z"
        clipRule="evenodd"
      />
      <Rect width="33" height="23" x=".5" y=".5" stroke="#F2F4F7" rx="3.5" />
    </Svg>
  );
}
export default ApplePay;
