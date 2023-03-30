import React, { ReactNode, CSSProperties } from 'react';

const type = {
  /** head1 */
  h1: {
    fontFamily: 'SF Pro',
    fontSize: '30px',
    fontWeight: '700',
  },

  /** head2 */
  h2: {
    fontFamily: 'SF Pro',
    fontSize: '24px',
    fontWeight: '700',
  },

  /** head3 */
  h3: {
    fontFamily: 'SF Pro',
    fontSize: '21px',
    fontWeight: '700',
  },

  /** subtitle1 */
  sub1: {
    fontFamily: 'Pretendard',
    fontSize: '24px',
    fontWeight: '600',
  },

  /** subtitle2 */
  sub2: {
    fontFamily: 'Pretendard',
    fontSize: '18px',
    fontWeight: '600',
  },

  /** subtitle3 */
  sub3: {
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontWeight: '700',
  },

  /** subtitle4 */
  sub4: {
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontWeight: '400',
  },

  /** paragraph1 */
  p1: {
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontWeight: '400',
  },

  /** paragraph2 */
  p2: {
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontWeight: '400',
  },

  /** paragraph3 */
  p3: {
    fontFamily: 'Pretendard',
    fontSize: '12px',
    fontWeight: '400',
  },
};

interface TypographyProps {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'sub1'
    | 'sub2'
    | 'sub3'
    | 'sub4'
    | 'p1'
    | 'p2'
    | 'p3';
  children: ReactNode;
  style?: CSSProperties;
}

const Typography = ({ variant = 'sub1', children, style }: TypographyProps) => {
  return <span style={style || (type[variant] as {})}>{children}</span>;
};

export default Typography;
