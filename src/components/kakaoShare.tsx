function KakaoShare() {
  const onClickShareBtn = () => {
    if (!(window as any).Kakao.isInitialized()) {
      (window as any).Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
    }

    (window as any).Kakao.Share.sendCustom({
      templateId: Number(process.env.REACT_APP_TEMPLATE_ID),
    });
  };

  return (
    <>
      <div>카카오톡 공유하기</div>
      <button onClick={onClickShareBtn}>공유하기</button>
    </>
  );
}

export default KakaoShare;
