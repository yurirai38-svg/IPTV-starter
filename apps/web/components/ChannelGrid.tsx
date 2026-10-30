'use client';

import { useEffect, useState } from 'react';
import { Player } from './Player';

type Channel = {
  id: string;
  name: string;
  category: string;
  logoUrl?: string;
  streamUrl: string;
};

export function ChannelGrid() {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [selected, setSelected] = useState<Channel | null>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch('http://localhost:3001/channels', { cache: 'no-store' });
      if (!res.ok) return;

      const data = await res.json();
      setChannels(data);
      if (data.length > 0) setSelected(data[0]);
    }

    load();
  }, []);

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
        {channels.map((channel) => (
          <button
            key={channel.id}
            onClick={() => setSelected(channel)}
            style={{
              padding: 12,
              borderRadius: 12,
              border: selected?.id === channel.id ? '2px solid #4f46e5' : '1px solid #ddd',
              background: '#fff',
              textAlign: 'left',
              cursor: 'pointer',
            }}
          >
            <div>{channel.name}</div>
            <small>{channel.category}</small>
          </button>
        ))}
      </div>

      {selected && <Player src={selected.streamUrl} title={selected.name} />}
    </div>
  );
}
