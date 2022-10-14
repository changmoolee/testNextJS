import Layout from "../components/Layout";
import "../styles/globals.css"; // 여기 _app js에서만 파일 쨰로 import가 가능

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <span>hello</span>
      <style jsx global></style>
    </>
  );
}
