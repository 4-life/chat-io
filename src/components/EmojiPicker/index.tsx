/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import data from '@emoji-mart/data';
import { Picker } from 'emoji-mart';

export default function EmojiPicker(props: any) {
  const ref = useRef();
  const executedRef = useRef(false);

  useEffect(() => {
    if (executedRef.current) {
      return;
    }
    // eslint-disable-next-line no-new
    new Picker({ ...props, data, ref });
    executedRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={ref as any} />;
}
