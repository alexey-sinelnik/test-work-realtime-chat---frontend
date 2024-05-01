import { FC, JSX } from 'react';
import { ContainerProps } from '../../common/types/container';

const Container: FC<ContainerProps> = ({ children }): JSX.Element => {
  return (
    <div className="w-full h-full mx-auto shadow-lg rounded-lg">{children}</div>
  );
};

export default Container;
