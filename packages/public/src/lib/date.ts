import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import tz from 'dayjs/plugin/timezone';

export type { Dayjs } from 'dayjs';

dayjs.extend(utc);
dayjs.extend(tz);

export default dayjs;
