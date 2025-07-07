import dayjs from 'dayjs';

export default function LastBuild() {
  return process.env.NEXT_BUILD_TIMESTAMP ? (
    <p>
      Last build:{' '}
      {dayjs(process.env.NEXT_BUILD_TIMESTAMP)
        .startOf('minute')
        .format('DD/MM/YYYY@HH:mm:ss')}
    </p>
  ) : null;
}
