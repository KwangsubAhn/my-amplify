import { useState } from 'react';
import outputs from '../amplify_outputs.json';

const sayHelloUrl = (outputs as { custom?: { sayHelloUrl?: string } }).custom
  ?.sayHelloUrl;

export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const callFunction = async () => {
    if (!sayHelloUrl) {
      setMessage('amplify_outputs.json에 sayHelloUrl이 없습니다. 샌드박스를 다시 배포하세요.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${sayHelloUrl}?name=${encodeURIComponent(name)}`);
      setMessage(await res.text());
    } catch (e) {
      setMessage(`호출 실패: ${e}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 480, margin: '4rem auto' }}>
      <h1>Say Hello 👋</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력하세요"
        style={{ padding: 8, marginRight: 8 }}
      />
      <button onClick={callFunction} disabled={loading} style={{ padding: 8 }}>
        {loading ? '호출 중...' : 'Lambda 호출'}
      </button>
      {message && <p style={{ fontSize: 20 }}>{message}</p>}
    </main>
  );
}
