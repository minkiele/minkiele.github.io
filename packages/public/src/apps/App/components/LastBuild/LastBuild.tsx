'use client';
import dayjs from 'dayjs';
import { memo } from 'react';

interface LastBuildProps {
  className?: string;
}

const LastBuild = memo(({ className }: LastBuildProps) => {
  const date = dayjs(process.env.NEXT_BUILD_TIMESTAMP).startOf('minute');
  return (
    <p className={className}>
      Last build:
      <br />
      {date.format('DD/MM/YYYY')}&nbsp;{date.format('HH:mm:ss')}
    </p>
  );
});

LastBuild.displayName = 'LastBuild';

export default LastBuild;
