import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseQRCode, { ReadmeMd } from '@/apps/QRCode/QRCode';
const { metadata, App: QRCode } = getAppAndMetadata('/qr', {
  app: BaseQRCode,
  readme: ReadmeMd,
});

export default QRCode;
export { metadata };
