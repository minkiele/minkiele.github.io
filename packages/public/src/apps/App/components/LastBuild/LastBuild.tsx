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
      {/* It should automatically reposition itself on mobile / desktop */}
      Last build: {date.format('DD/MM/YYYY')}&nbsp;{date.format('HH:mm:ss')}
    </p>
  );
});

LastBuild.displayName = 'LastBuild';

export default LastBuild;
