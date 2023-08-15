import { ISvgProps } from '../../../utils/ISvgProps';
import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

export function CIMB({
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
      viewBox="0 0 71 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G cliPath="url(#a)">
        <Path
          fill="#EC1C24"
          fill-rule="evenodd"
          d="M50.564 5.348a36.175 36.175 0 0 1 2.104-3.81c.308-.472.623-1.005 1.092-1.337.204-.145.45-.242.696-.188a.919.919 0 0 1 .372.186c.331.264-.063.767-.22 1.028-.252.418-.547.805-.804 1.22-.644 1.041-1.272 2.097-1.826 3.205-.3.606-.58 1.223-.83 1.856-.096.244-.71 1.568-.494 1.694.254.147.644-.353.801-.492.134-.119.43-.377.624-.304.438.167-.09.943-.225 1.157-.373.608-.895 1.164-1.62 1.19-.61.02-1.118-.45-1.178-1.114-.021-.415.023-.83.131-1.23.247-1.093.827-2.076 1.377-3.06ZM48.557 8.269a.6.6 0 0 1-.056.25c-.18.4-.733.586-1.08.81-.575.383-1.173.728-1.792 1.033-1.064.514-2.027 1.08-3.7.329-1.27-.576-1.497-2.152-.889-3.798.522-1.415 1.523-2.648 2.714-3.721s2.51-2.094 3.465-2.195c.342-.035.713.014.99.262.54.482.473 1.42.18 2.033-.18.374-.382.621-.776.679-.338.048-.745-.064-.675-.527.04-.26.328-.756.154-1.004-.24-.34-1.13.45-1.327.595a11.4 11.4 0 0 0-1.075.931c-.6.571-1.093 1.311-1.508 2.05-.477.855-.922 1.845-.927 2.87 0 .32.012.686.18.964.46.773 1.62.214 2.221-.005.59-.216 1.161-.476 1.71-.778.57-.31 1.096-.685 1.651-1.017.32-.194.54-.027.54.239ZM55.507 1.719c.27.748.573 1.462 1.43 1.69 0-.693-.478-2.045-1.43-1.69ZM55.43 5.925c-.02-.18-.113-.34-.318-.513-.246-.21-.598-.307-.827-.027-.174.215-.246.502-.35.75-.163.393-.286.796-.43 1.197-.311.851-.55 1.728-.712 2.62.172.225.31.479.773.45.424-.856.854-1.71 1.233-2.588.195-.45.378-.912.54-1.378a1.17 1.17 0 0 0 .09-.51ZM59.923 7.788a2.495 2.495 0 0 1-.43.499c-.486.45-.895.974-1.408 1.394-.37.303-.82.5-1.292.32-.587-.225-1.104-1.032-.935-2.126.216-1.406 1.331-3.412 2.05-4.009.53-.44 1.189-.412 1.706.028.329.28.767.81.775 1.272a.294.294 0 0 1-.065.233c-.122.11-.389-.075-.54-.205-.187-.158-.393-.353-.662-.295-.174.038-.375.27-.505.384-.198.18-.379.378-.54.592a5.746 5.746 0 0 0-.786 1.458c-.096.255-.675 1.418-.082 1.46.189.012.36-.09.523-.15.194-.068.38-.146.575-.226.301-.122.593-.263.875-.424.233-.139.517-.328.823-.404.032-.008-.032.118-.082.2ZM66.404 4.496c-.096-.115-.293-.29-.442-.328-.293-.076-.734.142-.975.283-.276.176-.534.38-.769.608-.577.525-1.42 1.14-1.996 1.705.168-.519.378-1.186.63-1.644.16-.291.234-.578.415-.852.21-.315.401-.648.608-.966.288-.442.805-1.028.847-1.578.031-.408-.515-.953-1.018-.797-.868 1.199-1.406 2.661-2.076 3.925-.413 1.121-1.001 2.293-1.137 3.487-.023.201-.049.402-.069.604-.036.354-.069.72 0 1.075a1.001 1.001 0 0 0 .46.71c.44.282.482-.451.51-.73.047-.41.133-.813.258-1.206l-.189.784c.37.262.512.63.939.744.815.215 1.562-.277 2.18-.712.216-.151.95-.511 1.17-.885.1-.17.096-.341-.112-.496-.238-.18-.625.207-.843.337-.384.238-.78.456-1.187.653-.134.062-1.322.395-1.33.425.108-.457.273-.9.492-1.316.401-.76.873-1.469 1.538-2.029.323-.27.665-.528 1.008-.78.17-.125.34-.253.515-.376.154-.107.513-.09.64-.213.127-.124.037-.309-.067-.432ZM66.99 6.175c.031-.228.08-.454.147-.675.062-.216.142-.427.239-.63a3.198 3.198 0 0 1 1.745-1.62c.324-.133.942-.397 1.291-.27.18.064.763.523.535.772-.228.248-.413.173-.684.29-.795.347-2.553 1.531-2.243 2.796a.71.71 0 0 0 .12.208c.556.568 2.734 1.161 1.722 2.376-.427.512-1.14.773-1.801 1.089-.284.134-.625.302-.964.474-.353.18-1.022.687-1.4.287-.303-.322.287-.604.505-.742.313-.199.63-.39.936-.597.611-.411 1.19-.886 1.586-1.516.05-.08-1.427-1.15-1.563-1.343-.184-.255-.209-.579-.172-.9Z"
          clip-rule="evenodd"
        />
        <Path
          fill="#820024"
          d="M7.458 8.611a3.277 3.277 0 0 1-2.071.72c-1.837 0-3.266-1.462-3.266-3.33 0-1.87 1.43-3.332 3.266-3.332a3.278 3.278 0 0 1 2.07.72l.03.022 1.417-1.417-.033-.03A5.325 5.325 0 0 0 5.391.673C2.419.672 0 3.063 0 6.002c0 2.94 2.418 5.332 5.39 5.332a5.324 5.324 0 0 0 3.481-1.298l.033-.032L7.487 8.59l-.03.021Zm3.367 2.431h2.04V.967h-2.04v10.075ZM20.9 7.406c-.077-.132-3.557-6.454-3.557-6.454h-1.989v10.067h2.032V5.003c.154.262 3.512 6.097 3.512 6.097s3.345-5.834 3.494-6.097v6.016h2.034V.947h-1.988S20.97 7.27 20.9 7.401v.005Zm13.91-1.53a2.379 2.379 0 0 0 1.179-2.06c0-1.756-1.197-2.849-3.126-2.849H28.81v10.07h4.222c1.91 0 3.097-1.115 3.097-2.916.003-1.352-.795-1.98-1.32-2.244Zm-3.962-3.083h1.864c.781 0 1.248.412 1.248 1.108 0 .696-.47 1.106-1.248 1.106h-1.868l.004-2.214Zm1.99 6.42h-1.994V6.846h1.991c.93 0 1.26.608 1.26 1.178s-.33 1.19-1.26 1.19h.004Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h71v11.423H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default CIMB;