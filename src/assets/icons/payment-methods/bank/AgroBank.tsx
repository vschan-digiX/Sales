import { ISvgProps } from '../../../utils/ISvgProps';
import React from 'react';
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg';

export function AgroBank({
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
      viewBox="0 0 54 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          fill="#231F20"
          d="M29.681 11.732c0-1.75-1.544-2.048-2.574-2.048h-2.848v7.987h2.848c1.007 0 2.815-.298 2.815-2.311 0-.984-.744-1.717-1.83-1.82v-.023c.949-.171 1.59-.835 1.59-1.785Zm-3.82 2.369h.812c.8 0 1.647.16 1.647 1.201 0 .927-.904 1.11-1.647 1.11h-.812v-2.311Zm2.219-2.163c0 .824-.836.973-1.51.973h-.71v-1.968h.675c.733 0 1.545.069 1.545.995ZM45.543 2.63c0-2.22-2.048-2.163-3.764-2.163H40.05v7.987h1.602V5.135h.515c.675 0 .881.23 1.11.824l.96 2.495h1.786l-1.282-3.125c-.16-.354-.412-.789-.846-.823v-.023c1.018-.137 1.647-.915 1.647-1.853Zm-1.671.137c0 .995-.903 1.11-1.693 1.11h-.526V1.726h.526c.8 0 1.693.08 1.693 1.041ZM54 4.438C54 2.023 52.593.33 50.087.33c-2.54 0-3.913 1.659-3.913 4.108 0 2.448 1.35 4.153 3.913 4.153 2.529 0 3.913-1.74 3.913-4.153Zm-1.67 0c0 1.441-.607 2.895-2.243 2.895s-2.243-1.454-2.243-2.895c0-1.408.653-2.85 2.243-2.85 1.59 0 2.243 1.442 2.243 2.85ZM31.925 8.454 28.79.467h-1.807L23.87 8.454h1.66l.697-1.83h3.238l.686 1.83h1.774Zm-2.906-3.09h-2.334L27.84 2.07h.024l1.155 3.296ZM38.606.662A7.886 7.886 0 0 0 36.26.33c-2.711 0-4.382 1.533-4.382 4.268 0 2.7 1.796 3.993 4.382 3.993.858 0 1.74-.183 2.586-.412V3.877H35.62v1.259h1.693v2.082a4.34 4.34 0 0 1-1.053.114c-1.704 0-2.711-1.224-2.711-2.849 0-1.635 1.03-2.895 2.894-2.895.642 0 1.443.138 2.06.424l.103-1.35ZM38.41 17.67l-3.136-7.986h-1.807l-3.112 7.987h1.658l.699-1.83h3.238l.686 1.83h1.774Zm-2.907-3.088H33.17l1.156-3.296h.022l1.156 3.296ZM39.246 17.67h1.533v-5.972h.023l3.055 5.973h1.956V9.684h-1.532v5.973h-.024l-3.043-5.973h-1.968v7.987ZM21.893.464h-.359v17.207h.36V.464ZM47.226 17.67h1.602v-3.706h.023l2.871 3.707h2.094l-3.421-4.223 3.284-3.764H51.71l-2.883 3.433V9.684h-1.602v7.987Z"
        />
        <Path
          fill="#E31B23"
          d="M20.024 17.67h-8.801a2.518 2.518 0 1 0-2.422 0H0L10.011.33l10.013 17.34Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 .33h54v17.34H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default AgroBank;
