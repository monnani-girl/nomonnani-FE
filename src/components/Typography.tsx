import React, { ReactNode, CSSProperties } from 'react';

const theme = {
  /** head1 */
  h1: {
    fontFamily: 'SF Pro',
    fontSize: '30px',
    fontWeight: '700',
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'left',
  },

  /** head2 */
  h2: {
    fontFamily: 'SF Pro',
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'left',
  },

  /** head3 */
  h3: {
    fontFamily: 'SF Pro',
    fontSize: '21px',
    fontWeight: '700',
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'left',
  },

  /** subtitle1 */
  sub1: {
    fontFamily: 'Pretendard',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'left',
  },

  /** subtitle2 */
  sub2: {
    fontFamily: 'Pretendard',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'left',
  },

  /** subtitle3 */
  sub3: {
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'left',
  },

  /** subtitle4 */
  sub4: {
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'left',
  },

  /** paragraph1 */
  p1: {
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '21px',
    letterSpacing: '0em',
    textAlign: 'left',
  },

  /** paragraph2 */
  p2: {
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '21px',
    letterSpacing: '0em',
    textAlign: 'left',
  },

  /** paragraph3 */
  p3: {
    fontFamily: 'Pretendard',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'left',
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
  return <span style={style || (theme[variant] as {})}>{children}</span>;
};

export default Typography;
