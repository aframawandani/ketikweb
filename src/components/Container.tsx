import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default function Container({ className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div className={classNames('max-w-7xl mx-auto px-6', className)} {...props} />
  );
}
