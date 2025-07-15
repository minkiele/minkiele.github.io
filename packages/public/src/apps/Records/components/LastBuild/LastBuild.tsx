import dayjs from 'dayjs';

const date = dayjs(process.env.NEXT_BUILD_TIMESTAMP).startOf('minute');

export default function LastBuild() {
  return (
    <p>
      Last build: {date.format('DD/MM/YYYY')}
      at {date.format('HH:mm')}
    </p>
  );
}
