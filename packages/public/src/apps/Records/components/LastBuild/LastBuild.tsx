'use client';
import dayjs from 'dayjs';
import { memo } from 'react';

const LastBuild = memo(() => {
  const date = dayjs(process.env.NEXT_BUILD_TIMESTAMP).startOf('minute');
  return (
    <p>
      Last build: {date.format('DD/MM/YYYY')} at {date.format('HH:mm')}
    </p>
  );
});

LastBuild.displayName = 'LastBuild';

export default LastBuild;
