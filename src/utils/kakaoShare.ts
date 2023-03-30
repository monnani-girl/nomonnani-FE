/**
 * 카카오톡 공유 핸들러
 */

//TODO: link prd url로 변경
interface IKakaoShareProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const handleKaKaoShareBtn = ({
  title,
  description,
  imageUrl,
}: IKakaoShareProps) => {
  if (!(window as any).Kakao.isInitialized()) {
    (window as any).Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
  }

  (window as any).Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title,
      description,
      imageUrl,
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
    buttons: [
      {
        title: '닮은꼴 캐릭터 찾기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    ],
  });
};
