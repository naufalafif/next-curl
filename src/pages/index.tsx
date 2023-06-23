import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [url, setUrl] = useState<string>('') 
  const [response, setResponse] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const handleSend = () => {
    setLoading(true)
    fetch(`/api/send?url=${url}`).then((res) => res.text()).then((res) => {
      setLoading(false)
      setResponse(res)
  })
  }
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <h1>Next Curls</h1>
      <p>This app sends request to url using nextjs-api route</p>
      <p>ex: https://example.com or http://172.168.0.1</p>

      <div className="mt-10">
        <input type="text" placeholder="URL or IP" value={url} onChange={(e) => setUrl(e.target.value)}/>
        <button onClick={handleSend}>{loading ? 'Loading' : 'Send'}</button>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </main>
  );
}
