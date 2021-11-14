import jsSHA from 'jssha';

export const getAuth = () => {
  const AppID = '4a642955ffbe4621967b643c51372922';
  const AppKey = 'f_cWs8Qm3fXmoY5H8jrA4aWbcog';
  const GMTString = new Date().toUTCString();
  const ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return { Authorization: Authorization, 'X-Date': GMTString };
};
