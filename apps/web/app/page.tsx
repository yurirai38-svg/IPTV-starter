import { ChannelGrid } from '../components/ChannelGrid';

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ marginBottom: 16 }}>IPTV Starter</h1>
      <ChannelGrid />
    </main>
  );
}
